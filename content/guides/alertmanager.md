---
title: "Alertmanager"
lesson: 7
chapter: 2
cover: ""
date: "28/03/2018"
---

Alerting rules in Prometheus servers send alerts to an Alertmanager. The Alertmanager then manages those alerts, including silencing, inhibition, aggregation and sending out notifications.

Consult the [configuration documentation](https://prometheus.io/docs/alerting/configuration/) to learn how to use Alertmanager in detail. An basic configuration could be the following. Customize it in the new **alertmanager.yml** file:

```yaml
global:
route:
  receiver: 'default-receiver'
  group_wait: 30s       # how long to initially wait to send a notification
  group_interval: 5m    # how long to wait before sending new notification about a group that have been alerted 
  repeat_interval: 10m  # how long to wait before sending again a firing alert.
  group_by: [alertname]
receivers:
  - name: 'default-receiver'
    webhook_configs:
      - send_resolved: true
        url: 'http://customize-this-url'  # The webhook receiver allows configuring a generic receiver.
```
The Alertmanager will notify alerts sending HTTP POST requests to the defined url.

Once you have loaded the rules in the Prometheus server, customize the Ansible Role to install the AlertManager component and its configuration:

```yaml
- name: configure prometheus and alertmanager
  become: true
  hosts: all
  vars:
    prometheus_components:
      - prometheus
      - alertmanager
    playbook_dir: /usr/src/apps/prometheus/master/current
    prometheus_conf_main: prometheus.yml
    prometheus_alertmanager_conf: alertmanager.yml
  roles:
    - entercloudsuite.prometheus
  ...
```

Run once more a **Deploy** of the application to update the configuration.

Thanks for following this guide, now you are ready to monitor all your infrastructure and receive notification if any component is at fault!