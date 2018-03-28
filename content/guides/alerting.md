---
title: "Alerting"
lesson: 6
chapter: 2
cover: ""
date: "28/03/2018"
---

Alert conditions for your services could be described with **rules** based on Prometheus metrics.

In the Prometheus configuration file, the **rule_files** section specifies where the alerting rules are on the server. So, add the section to the prometheus.yml file as follow:

```yaml
# Rule files specifies a list of files from which rules are read.
rule_files:
  - /etc/prometheus/rules/*.rules
```

Create the "rules" folder in the Ansible Role and add as many files (with the extension .rules) you need to define your conditions of alert.

A basic rule in Prometheus could be the following, as documented on the [Prometheus website](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/):

```yaml
groups:
- name: default
  rules:
  - alert: monitor_service_down
    expr: up == 0
    for: 30s
    labels:
      severity: critical
```

Once you have defined the rules, customize the Ansible Role to copy and validate them, like in the following example:

```yaml
- name: configure prometheus
  become: true
  hosts: all
  vars:
    playbook_dir: /usr/src/apps/prometheus/master/current
    prometheus_conf_main: prometheus.yml
  roles:
    - entercloudsuite.prometheus
  tasks:
    - name: copy rules files
      copy:
        src: "{{ playbook_dir }}/rules/{{ item }}.rules"
        dest: "{{ prometheus_rule_path }}/{{ item }}.rules"
        validate: "{{ prometheus_daemon_dir }}/promtool check rules %s"
      with_items:
        - basic
        - kubernetes
```

It's now possible to run a **Deploy** of the application to update the configuration, before introducing the [Alertmanager](alertmanager) component.