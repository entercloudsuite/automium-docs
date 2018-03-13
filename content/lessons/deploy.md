---
title: "Deploy"
lesson: 4
chapter: 2
cover: ""
date: "13/03/2018"
---

When you define an Application, Automium prepare an endpoint to operate on it.

The main operation is the Deploy. When you run a deploy Automium create a task, and add it to the execution queue. 

The task is processed by a worker considering 3 different execution strategies: global, target or application based. **Global** means no concurrency, every new task is queued and wait for the worker. Use a **Target** or an **App** strategy in order to allow concurrent tasks at the infrastructure or at the application level.  

To apply a configuration, the worker fetch the defined repo and then runs the **Ansible Playbook** targeting the desired infrastructure. 

All the tasks are tracked in the **Deployment History** section:

![deployment history](/images/history.png "Deployment History")
