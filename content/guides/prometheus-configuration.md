---
title: "Prometheus Configuration"
lesson: 3
chapter: 2
cover: ""
date: "28/03/2018"
---

In Automium, the [Application](/concepts/application) is the standard way to  deploy configurations. 

From the **My Applications** section, you can create a new Application. A unique name and a target are mandatory. Choose "PROMETHEUS" as a **Target**. 

Once you add the application, you can find it in the list; press the **Edit** button to add the deployment configuration, as follow:

```yaml
version: '1'
ansible:
   playbook_file: 'playbook.yml'
   requirements_file: 'requirements.yml'
   git:
     repo: 'https://git.enter.it/automium/prometheus.git'
     branch: 'master'
```

The [configuration format](/concepts/application) defines from where Automium pulls the Ansible Playbook and if there are required roles to be fetched with Ansible Galaxy. 

So, you can define your specific configuration of Prometheus starting from this Ansible Role: https://github.com/entercloudsuite/ansible-prometheus and define, for example, the services to be monitored (named targets) with different approaches, accordingly to the [documentation](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) of Prometheus.

In **Automium** the best approach is to use the [Service Discovery](/concepts/service-discovery) to query the list of targets, as described in the [next step](prometheus-targets).
