---
title: "Setup Kubernetes"
lesson: 6
chapter: 1
cover: ""
date: "14/03/2018"
---

For Automium, [Kubernetes](/concepts/kubernetes) is just another service that can be deployed with the standard process from the catalog. The Kubernetes service is pre-configured for Enter Cloud Suite and required few more info to be executed: the number and the sizing of the nodes. 

![kubernetes setup](/images/kubernetes.png "Kubernetes Setup")

Once you have finish the configuration, you can **Plan** the creation of the nodes in the **My Infrastructure** section: a Kubernetes master with the number of disired nodes are going to be created. 

It's now possible to use Kubernetes with their native tools to [add containerized applications](metabase).