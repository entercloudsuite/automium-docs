---
title: "Jenkins Pipeline"
lesson: 3
chapter: 3
cover: ""
date: "10/04/2018"
---

Jenkins Pipeline provides an extensible set of tools for defining an **automation process** such as the infrastructure scaling.

The definition of a Jenkins Pipeline is typically written into a text file, named **"Jenkisfile"**, like the following:

```groovy
  // create json payload
  def payload = """
      {"name":"example"}
  """
  def response = httpRequest httpMode: 'POST',
    contentType: 'APPLICATION_JSON',
    customHeaders: [[name: 'Authorization', value: 'Bearer TOKEN']],
    requestBody: payload,
    url: 'http://bastion.service.automium.consul:3000/v3/application/deploy'
  node {
      echo 'Deploy...'
      println("Status: "+response.status)
      println("Content: "+response.content)
  }
```

The scaling logic could be defined as a Jenkins Pipeline, triggered manually or event-based, that interacts directly with the **Automium API** to get information about the current state of the infrastructure and to change the running number of nodes.

To get started quickly with Pipeline:  
* Access Jenkins server with the browser.
* Configure plugins and security, for example using [Automium LDAP](/concepts/LDAP) via [LDAP plugin](https://plugins.jenkins.io/ldap).
* Click the **New Item** menu within Jenkins.
* Provide a name for your new item and select **Pipeline**.
* Confirm the creation with the OK button. 

Once you have created the Jenkins pipeline, you can configure it following the information in the [next step](pipeline-configuration).
