---
title: "Logging"
lesson: 1
chapter: 4
cover: ""
date: "28/04/2018"
---

This guide is provided to walks you through the management of your application logs with **Automium**. You will deploy an **[Elasticsearch](https://www.elastic.co/products/elasticsearch)** server, use **[Fluentd](https://www.fluentd.org/)** to forward logs from the Kubernetes cluster and use **[Kibana](https://www.elastic.co/products/kibana)** to view and analyze them.
  
The guide contains the following information:  
* Instructions for creating an **[Elasticsearch](https://www.elastic.co/products/elasticsearch)** server.  
* An explanation on how **[Fluentd](https://www.fluentd.org/)** can be configured in Kubernetes for processing and forwarding all the application logs.  
* An overview of the features and functionality of **[Kibana](https://www.elastic.co/products/kibana)** for **Log Analysis**. 

Let's log into the **Automium Dashboard** to create the [Elasticsearch Server](elasticsearch).