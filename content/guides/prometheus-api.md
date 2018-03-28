---
title: "Prometheus API"
lesson: 5
chapter: 2
cover: ""
date: "14/03/2018"
---

Prometheus server has [HTTP API](https://prometheus.io/docs/prometheus/latest/querying/api/) for quering data and to inspect the running configuration.

To be sure that our configuration is used by the Prometheus Server, we can curl the API endpoint and get the list of the configured targets:

```
$ curl prometheus.service.automium.consul:9090/api/v1/targets
{
  "status": "success",
  "data": {
    "activeTargets": [
      {
        "discoveredLabels": {
          "__address__": "192.168.0.25:9100",
          "__meta_dns_name": "k8s.service.automium.consul",
          "__metrics_path__": "/metrics",
          "__scheme__": "http",
          "job": "k8s-node-exporter"
        },
       ...
      }
    ]
  }
}
```

In the response you can see all the **active targets**.

It is important to have confidence that monitoring is working. Accordingly, have alerts to ensure that Prometheus server and all the services are available and running correctly. [Follow the guide](alerting) to understand how **Alerting** works with Prometheus.
