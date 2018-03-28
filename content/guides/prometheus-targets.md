---
title: "Prometheus Targets"
lesson: 4
chapter: 2
cover: ""
date: "28/03/2018"
---

In the Prometheus configuration file, the **scrape_file** section specifies a set of targets and parameters, describing how to scrape them.  
Targets may be statically configured or dynamically discovered.

In Automium, all the running services are listed in the local [Service Discovery](/concepts/service-discovery) so, you can add a configuration like the following to monitor the Kubernetes nodes:

```yaml
# A list of scrape configurations.
scrape_configs:
  - job_name: 'k8s-node-exporter'
    scrape_interval: 10s
    scrape_timeout:  10s
    dns_sd_configs:
      - names:
        - 'k8s.service.automium.consul'
        type: 'A'
        port: 9100
```

Once you have listed your services in the configuration, customize the Ansible Role like in the following Play (where the vars define name and location of the configuration file):

```yaml
- name: configure prometheus
  become: true
  hosts: all
  vars:
    playbook_dir: /usr/src/apps/prometheus/master/current
    prometheus_conf_main: prometheus.yml
  roles:
    - entercloudsuite.prometheus
```

It's now possible to run a **Deploy** of the application, and follow the execution in the **Deployment History** section, before checking the configuration is applied in the [next step](prometheus-api).