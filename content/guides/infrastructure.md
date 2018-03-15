---
title: "Infrastructure"
lesson: 3
chapter: 1
cover: ""
date: "14/03/2018"
---

The **My Infrastructure** section of Automium lists all the infrastructure resources. When you add a service from the Automium catalog, a new file is added with the name convention "ServiceName_*".

You can **Edit** the file to inspect what is going to be created for the service. For the PostgreSQL service a module like the following was written in the file:

```yaml
module "postgres" {
  source 		= "github.com/entercloudsuite/terraform-modules//postgres"
  image 		= "ecs-postgres 1.0.0"
  region 		= "${var.region}"
  flavor         = "e3standard.x3"
  network_name	= "${var.network_name}"
  keyname       = "${var.keypair_name}"
  slave_count   = 0
}
```

To apply the module, you have to press the **Plan** button and after evaluating the terarform plan, confirm the creation of the needed resources with the **Apply** button.  

After terraform finalize the creation of the resources in Enter Cloud Suite, the PostgreSQL service will be running, but we need to add our specific [Configuration](ansible-playbook).