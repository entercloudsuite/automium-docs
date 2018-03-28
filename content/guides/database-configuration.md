---
title: "Database Configuration"
lesson: 5
chapter: 1
cover: ""
date: "14/03/2018"
---

In Automium, the [Application](/concepts/application) is the standard way to  deploy configurations. 

From the **My Applications** section, you can create a new Application. A unique name and a target are mandatory.
A target, should be clear looking at the prepopulated list, could be one of the deployed service, such as "POSTGRES". 

Once you add the application, you can find it in the list; press the **Edit** button to add the deployment configuration, as follow:

```yaml
version: '1'
ansible:
   playbook_file: 'playbook_metabase.yml'
   requirements_file: 'requirements.yml'
   git:
     repo: 'https://git.enter.it/automium/postgres-import.git'
     branch: 'master'
```

The [configuration format](/concepts/application) defines from where Automium pulls the Ansible Playbook and if there are required roles to be fetched with Ansible Galaxy. Change the configuration accordingly to the previous step.

It's now possible to run a **Deploy** of the application, and follow the execution in the **Deployment History** section, before proceeding with the [next step](setup-kubernetes).