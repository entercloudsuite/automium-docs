---
title: "Pipeline Configuration"
lesson: 4
chapter: 3
cover: ""
date: "10/04/2018"
---

Jenkins Pipeline allows you to compose multiple steps. So, you can define the scaling process as a list of commands grouped in steps; when a step succeeds it moves onto the next step, as follow:

```groovy
#!/usr/bin/env groovy
pipeline {
    parameters {
        string(
          name: "resource",
          defaultValue: "nodes_count",
          description: "The name of the resource that should be scaled"
        )
        string(
          name: "scale",
          defaultValue: "0",
          description: "Number of nodes to add or remove (if negative)"
        )
    }
    environment {
        token = $AUTOMIUM_TOKEN
        base_url = "http://bastion.service.automium.consul:3000"
        value = 1
    }
    agent any
    stages {
        stage("Validate") {
            steps {
                script {
                    int min_nodes = 1
                    int max_nodes = 5

                    def url = "${base_url}/v3/infra/state"
                    def response = httpRequest httpMode: "GET", contentType: "APPLICATION_JSON", customHeaders: [[name: "Authorization", value: "Bearer ${token}"]], url: "${url}"
                    println("Status: "+response.status)
                    
                    // save infra state to file
                    writeFile file: 'output.json', text: response.content

                    // inspect KUBERNETES nodes and save the names to file
                    def inspectNodes = sh(
                      script: "jq '.. | select(.\"metadata.server_group\"?==\"KUBERNETES\") | {\"name\":.name}' output.json",
                      returnStdout: true
                    )
                    writeFile file: 'nodes.json', text: inspectNodes

                    // get a valid json array with the nodes
                    def json = sh(
                      script: "jq -s . < nodes.json",
                      returnStdout: true
                    )
                    def inspectJson = readJSON text: json

                    // get the current number of nodes
                    def currentNodes = inspectJson.size()
                    echo "current number of nodes is $currentNodes"

                    archiveArtifacts artifacts: '*.json'

                    echo "Check scale limits for the resource ${resource}"
                    value = "${scale}".toInteger()
                    echo "the number of nodes to add/remove is $value"

                    value = currentNodes + value
                    echo "the desired number of nodes is $value"

                    if (value > max_nodes) {
                        error("Invalid scale param. The maximum number of nodes is ${max_nodes}")
                    }
                    if (value < min_nodes) {
                        error("Invalid scale param. The minimum number of nodes is ${min_nodes}")
                    }

                    if(value == currentNodes) {
                      error("Invalid scale param. Infrastructure is already scaled to the desired number of nodes")
                    }
                }
            }
        }
        stage("Scale") {
            steps {
                script {
                    echo "Start scaling the resource ${resource} to ${value}"
                    // create json payload
                    def payload = """
                        {"name":"${resource}", "variable":"${resource}", "value":${value}}
                    """
                    def url = "${base_url}/v3/infra/edit"
                    def response = httpRequest httpMode: "POST", contentType: "APPLICATION_JSON", customHeaders: [[name: "Authorization", value: "Bearer ${token}"]], requestBody: payload, url: "${url}"
                    println("Status: "+response.status)
                }
            }
        }
    }
}
```

Edit the Pipeline (Job) you have created, and:  
* Enable the **"Trigger Builds Remotely"** option to obtain a JOB TOKEN.
* If Jenkins requires authentication, get valid Jenkins API TOKEN and USER to execute the job.
* Add the **Pipeline Script** (or the related Jenkinsfile from your Git repository).
* Save the configuration.

Once you have configured the Jenkins pipeline, you can test it remotely composing the right url. The webhook url must be in the format: `http://USER:API-TOKEN@jenkins.service.automium.consul/job/JOB-NAME/buildWithParameters?token=JOB-TOKEN&scale=1`.

If the webhook is correct, in the Jenkins dashboard, you will see a running job in the history.

The same webhook could be used for triggering the process from other tools, such as [Prometheus](integrate-prometheus).
