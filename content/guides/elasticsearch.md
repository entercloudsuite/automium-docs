---
title: "Elasticsearch"
lesson: 2
chapter: 4
cover: ""
date: "28/04/2018"
---

Automium provides a catalog of [ready-made  services](/concepts/service).
One of the available services in the [**Explore**](/concepts/explore) section, is Elasticsearch. 
  
The steps to deploy the service are the followings:  
* Find the service (Elasticsearch) in the list and launch it.
* In the detail page, from the drop down list, choose the version of the service that fits your needs and fill out all the required settings.
* Press the **Submit** button to procede.
* An information page is displayed to have an overview of the next steps.

A Terraform file is created and the Infrastructure changes have to be applied in the **My Infrastructure** section. 

Once you have created the Elasticsearch server, the service is up and running but doesn't collect logs from the other services of your infrastructure yet. Let's configure a log forwarder based on [Fluentd](fluentd).

This guide assumes you have a Kubernetes cluster already in place; follow the [Getting Started](start) guide if you still need to setup it.
