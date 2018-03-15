---
title: "Configuration"
lesson: 2
chapter: 2
cover: ""
date: "13/03/2018"
---

Ansible allows your whole infrastructure to be configured as code, so it can be version controlled, easily replicated and tested.

Configurations are defined as a collection of tasks in what is called **Ansible Playbook**. 

A task define an operation to be performed in the destination host, so for example the following Playbook define how to configure a PostgreSQL user using the specific role "entercloudsuite.postgres" and a final task to force the service to restart.

```yaml
- name: run postgres configuration
  become: true
  hosts: all
  vars:
    postgresql_users:
      - name: example
        password: supersecret
  roles:
    - entercloudsuite.postgres
  tasks:
    - name: ensure Postgres config is reloaded
      service:
        name: postgresql
        state: restarted
```
