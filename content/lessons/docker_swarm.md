---
title: "Docker Swarm"
lesson: 5
chapter: 2
cover: ""
date: "13/03/2018"
---

Docker makes powerful tools, accessible to everyone, to build cloud-native applications and to migrate traditional applications.

To run Dockerized applications in production you need a Container Orchestrator like Docker Swarm or Kubernetes.

Automium is orchestrator agnostic, but Docker Swarm could be ready to use as a first-class citizen via a specific integration.

When you create an Application targeting a Docker Swarm infrastructure, the endpoint that can be operated in Automium has specific behaviors: permits to specify the Docker Stack configuration, lists the services and the running containers providing terminal access and logging.

The value of the integration is the Role Based Access Control in place, to grant various levels of access to your Docker Stacks.
