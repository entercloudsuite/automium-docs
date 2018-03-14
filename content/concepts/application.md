---
title: "Application"
lesson: 3
chapter: 2
cover: ""
date: "13/03/2018"
---

Automium uses Ansible Playbook to apply the configurations of the services.

From the **My Applications** section you can add an Application for a group of servers, and define which **Ansible Playbook** has to be executed into with the following script:

```yaml
version: '1'
ansible:
   playbook_file: 'playbook.yml'
   requirements_file: 'requirements.yml'
   git:
      repo: 'https://git.enter.it/automium/myansibleplaybook'
      branch: 'master'
```

**playbook_file** is the full path of the Ansible Playbook file.  
**requirements_file** is the full path of the Ansible (Galaxy) requirements file.  
**git** section defines the repo and the branch to fetch.
