---
title: "My Infrastructure"
lesson: 1
chapter: 1
cover: ""
date: "13/03/2018"
---

The first step to use Automium is to define the infrastructure needed to run your own application stack.

It is possibile to use all kinds of resources commonly found in a Cloud environment, like: instances (virtual machines), volumes, security groups, public IPs.  

Once the initial configurations are added, Automium executes a plan of creation or destruction based on the status of the infrastructure, only adding what's missing and removing what's in excess.

Defining the infrastructure as code brings a list of improvement over the "old-way" of doing things: replicating environments (staging, testing, production) is a matter of minutes insted of days. Moreover the infrastructure being code can be versioned and rolled-back like every other software.