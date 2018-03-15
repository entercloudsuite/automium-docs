---
title: "Live"
lesson: 9
chapter: 1
cover: ""
date: "14/03/2018"
---

Thanks for following the guides until the last step: the final test.

We have 3 services running: PostgreSQL, Kubernetes, and HAProxy.

Get the public IP of HAProxy and open it with the browser. Your request should go through the balancer, to a Kubernetes node. On the node, a Metabase container should be listening. At the first access Metabase shows a setup page to finalize your configuration:

![metabase](/images/metabase.png "Metabase")