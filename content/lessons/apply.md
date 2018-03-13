---
title: "Apply"
lesson: 3
chapter: 1
cover: ""
date: "13/03/2018"
---

Apply the changes described by the Terraform plan means let Automium creates or destroys resources on Enter Cloud Suite.

To have an idea of what can be done with 2 clicks in Automium, consider to add the following Terraform file:

```yaml
# Create ssh firewall policy
module "myserver_ssh_sg" {
  source = "github.com/entercloudsuite/terraform-modules//security?ref=2.6"
  name = "myserver_ssh_sg"
  region = "${var.region}"
  protocol = "tcp"
  port_range_min = 22
  port_range_max = 22
  allow_remote = "0.0.0.0/0"
}

# Create instance
module "myserver" {
  source = "github.com/entercloudsuite/terraform-modules//instance?ref=2.6"
  name = "myserver"
  region = "${var.region}"
  flavor = "e3standard.x1"
  network_name = "${var.network_name}"
  keypair = "${var.keyname}"
  sec_group = ["${module.myserver_ssh_sg.sg_id}"
  tags = {
    "server_group" = "MYSERVER"
  }
}
```

Run a **Plan** to check the resources that we are going to create on Enter Cloud Suite, a new instance with the related: floating IP, network port and security group in order to login via SSH.

**Apply** the plan to confirm the creation tasks.

**Destroy** the created resources is as simple as deleting the Terraform file.
