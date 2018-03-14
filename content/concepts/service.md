---
title: "Service"
lesson: 1
chapter: 3
cover: ""
date: "13/03/2018"
---

Automium provides composable and reusable services ready to be deployed in your infrastructure.

Each service is built upon a proven process of Continuous Deployments, operated by Travis CI, in order to test and delivery 3 components:

### Ansible Role

Ansible role versioned and described on GitHub with the service configurations. The role is publicly available also on Ansible Galaxy to simplify further usages. 

### Cloud Image

The image baked by the process. Every change to the configuration is tested with Travis CI and delivered as a Cloud Image to the catalog of Enter Cloud Suite.

### Terraform Module

Every service needs one or more infrastructure resources, such as a number of variable nodes when you deploy a cluster service. All the needed resources are described in a specific Terraform module.