---
title: "Prometheus"
lesson: 2
chapter: 2
cover: ""
date: "28/03/2018"
---

Automium provides a catalog of [ready-made  services](/concepts/service).
One of the available services in the [**Explore**](/concepts/explore) section, is Prometheus. 
  
The steps to deploy the service are the followings:  
* Find the service (Prometheus) in the list and launch it.
* In the detail page, from the drop down list, choose the version of the service that fits your needs and fill out all the required settings.
* Press the **Submit** button to procede.
* An information page is displayed to have an overview of the next steps.

A Terraform file is created and the Infrastructure changes have to be applied in the **My Infrastructure** section. 

Once you have created the Prometheus server, the monitoring service is up and running but doesn't collect metrics from the other services of your infrastructure. Let's [configure](prometheus-configuration) Prometheus to do that. 