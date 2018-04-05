---
title: "Grafana Dashboard"
lesson: 11
chapter: 2
cover: ""
date: "05/04/2018"
---

Grafana makes it easy to construct queries with a **Query Editor** specific for the **Data Source** (i.e Prometheus) you need to use. 

Start adding a new data source for Prometheus following the Grafana [documentation](http://docs.grafana.org/features/datasources/prometheus/). Use the URL: `http://prometheus.service.automium.consul:9090` and Save the configuration.

Grafana will visualize queries in real time in one or more **Panels**. Dashboards are composed of individual panels arranged on a grid.

Grafana ships with a variety of panels and permit to build your perfect dashboards. Follow this [guide](http://docs.grafana.org/guides/getting_started/) if you want to learn more about this topic.

For the purpose of this guide, we are going to use a ready-made dashboard you can easily import in your Grafana. 

To import a dashboard, open dashboard search and then click the **import** button.
From here you can paste a Grafana.com dashboard url, like the following: `https://grafana.com/dashboards/1860`.

The dashboard shows all the metrics by service and host:

![grafana](/images/grafana.png "Grafana")

Thanks for following this guide, now you have all the components to understand what's happening in your infrastructure!