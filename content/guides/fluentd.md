---
title: "Fluentd"
lesson: 3
chapter: 4
cover: ""
date: "28/04/2018"
---

When an application is deployed to Kubernetes, logs are collected on the cluster nodes. You have to forward these logs to Elasticsearch to view and analyze them easily.

Log forwarding is a specific task that can be accomplished by different tools, one that fits our need, because has a plugin for Elasticsearch, is Fluentd.

You have to run Fluentd on every nodes of Kubernetes. This can be done easily with a Kubernetes Daemonset. Download the configuration file from teh official repository: `https://raw.githubusercontent.com/fluent/fluentd-kubernetes-daemonset/master/fluentd-daemonset-elasticsearch-rbac.yaml`.  

Edit the file in order to define where logs are to be forwarded.
In **Automium** all the services are accessible through the native [Service Discovery](/concepts/service-discovery). So, you can change the configuration as follow: 

```yaml
...
    containers:
      - name: fluentd
        image: fluent/fluentd-kubernetes-daemonset:elasticsearch
        env:
          - name:  FLUENT_ELASTICSEARCH_HOST
            value: "elasticsearch.service.automium.consul"
          - name:  FLUENT_ELASTICSEARCH_PORT
            value: "9200"
          - name: FLUENT_ELASTICSEARCH_SCHEME
            value: "http"
...
```

Run the following command to apply the configuration: `kubectl create -f fluentd-daemonset-elasticsearch-rbac.yaml`.

Once complete, Elasticsearch is going to collect all our Kubernetes logs. Let's configure a [Kibana Dashboard](kibana) to analyze and view them.
