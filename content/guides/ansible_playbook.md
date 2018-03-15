---
title: "Ansible Playbook"
lesson: 4
chapter: 1
cover: ""
date: "14/03/2018"
---

Automium services are publicly available on [GitHub](https://github.com/entercloudsuite) as [Ansible](https://www.ansible.com) roles, tested with [Molecule](https://molecule.readthedocs.io). 

To change the configuration of a deployed service you have to create a new Repository in your Git, and add an Ansible Playbook like the following:

```yaml
- name: run postgres configuration
  become: true
  hosts: all
  vars:
    postgresql_global_config_options:
      - option: 'listen_addresses'
        value: '*'
    postgresql_hba_entries:
      - { type: local, database: all, user: postgres, auth_method: peer }
      - { type: local, database: all, user: all, auth_method: peer }
      - { type: host, database: all, user: all, address: '127.0.0.1/32', auth_method: md5 }
      - { type: host, database: all, user: all, address: '::1/128', auth_method: md5 }
    postgresql_users:
      - name: example
        password: supersecret
  roles:
    - entercloudsuite.postgres
```

Once the playbook is ready with all your configurations, you can use Automium to run it targeting your service. Let's configure an [Application](database-configuration) for this purpose.