---
title: "Plan"
lesson: 3
chapter: 1
cover: ""
date: "13/03/2018"
---

Terraform has a "planning" step where it generates an execution plan. The execution plan shows what Terraform will do when you call apply. This lets you avoid any surprises when Terraform manipulates infrastructure.

When you press "Plan" in the Dashboard, Automium runs Terraform and shows the execution plan. 

If you try to execute a plan without modifing the Terraform files, no changes will be applied. 

![terraform plan](/images/plan.png "Terraform plan")
