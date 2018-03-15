---
title: "Metabase"
lesson: 7
chapter: 1
cover: ""
date: "14/03/2018"
---

[Metabase](https://www.metabase.com/) is an open source tool for Data Visualization that it's delivered also as [Docker Image](https://hub.docker.com/r/metabase/metabase/). 

We can run Matabase as a container in Kubernetes with the following Deployment file:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metabase
spec:
  selector:
    matchLabels:
      app: metabase
  replicas: 1
  template:
    metadata:
      labels:
        app: metabase
    spec:
      containers:
         - name: metabase
           image: metabase/metabase:v0.25.0
           env:
              - name: MB_JETTY_HOST
                value: "0.0.0.0"
              - name: MB_DB_TYPE
                value: "postgres"
              - name: MB_DB_PORT
                value: "5432"
              - name: MB_DB_DBNAME
                value: "metabase"
              - name: MB_DB_USER
                value: "metabase"
              - name: MB_DB_PASS
                value: "supersecret"
              - name: MB_DB_HOST
                value: "postgres.service.automium.consul"

```

In the configuration, you can see that we are going to use PostgreSQL as the database for Metabase; this will allow us to scale Metabase. The database is already running, but instead of using its local IP address, our approach it's to use [Service Discovery](/concepts/service-discovery) using the FQDN "postgres.service.automium.consul". 

It's now possible to publish our services on a dedicated [Load Balancer](ha-proxy).