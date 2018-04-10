---
title: "Integrate Prometheus"
lesson: 5
chapter: 3
cover: ""
date: "10/04/2018"
---

With this step, you are going to add the ability to autoscale workloads based on metrics such as CPU and memory usage. To enable this feature we first need to collect and analize these metrics. Using **Prometheus** it's a very common approach for managing this operation.

Follow the **[Monitoring Guide](intro)** to setup Prometheus and the needed components with **Automium**.

Once you have configuered Prometheus with the **Alertmanager** component, you can configure a set of rules to trigger the scaling process.

To do that, you can start configuring a couple of rules, one to detect when the infrastructue is under high load, for example as follow, and one for a normal/average condition.

```yaml
alert: HighCPULoad
expr: node_load1{job="kubernetes"} > 1.5
for: 30s
labels:
  severity: warning
  service: kubernetes
annotations:
  description: Avg load 1m is at {{ $value }}.
  summary: Kubernetes node {{ $labels.instance }} is under high load.
```

The **Alertmanager** could be configured to trigger a webhook when a specific alert is active. So, for example, the following configuration can be applied to complete the Jenkins integration:

```yaml
global:

route:
  receiver: 'default-receiver'
  group_wait: 30s       # how long to initially wait to send a notification
  group_interval: 5m    # how long to wait before sending new notification about a group that have been alerted 
  repeat_interval: 10m  # how long to wait before sending again a firing alert.
  group_by: [service, alertname]
  # All alerts that do not match the following child routes
  # will remain at the root node and be dispatched to 'default-receiver'.
  routes:
  - receiver: 'scale-up'
    group_wait: 60s
    match_re:
      service: 'kubernetes'
      alertname: 'HighCPULoad'
  - receiver: 'scale-down'
    group_wait: 60s
    match_re:
      service: 'kubernetes'
      alertname: 'LowCPUUsage'

receivers:
  - name: 'default-receiver'
    webhook_configs:
      - send_resolved: true
        url: 'http://bastion.service.automium.consul:3000/v3/alert'
  - name: 'scale-up'
    webhook_configs:
      - send_resolved: false
        url: 'http://USER:API-TOKEN@jenkins.service.automium.consul/job/autoscale/buildWithParameters?token=JOB-TOKEN&scale=1'
  - name: 'scale-down'
    webhook_configs:
      - send_resolved: false
        url: 'http://USER:API-TOKEN@jenkins.service.automium.consul/job/autoscale/buildWithParameters?token=JOB-TOKEN&scale=-1'
``` 

Thanks for following this guide, now you have a process for scaling and autoscaling your infrastructure on custom metrics and with your own specific logic!
