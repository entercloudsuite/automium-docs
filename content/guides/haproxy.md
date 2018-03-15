---
title: "HAProxy"
lesson: 8
chapter: 1
cover: ""
date: "14/03/2018"
---

In our experience, operating large infrastructures, we have choosen to deploy a dedicated Load Balancer service for routing the users requests to applications and services. Automium provides [HAProxy](https://haproxy.com/) service for this purpose; you can add it, as we did before, using the service deployment flow. 

Once we deploy HAProxy, we need to configure the service for our needs. This can be done, of course, creating an Ansible Playbook and an Automium Application to deploying it. The HAProxy configuration should be as follow:

```yaml
resolvers dns-consul
  nameserver bastion 10.2.0.4:53
  hold valid 1s

frontend main
  bind *:80
  mode http
 	default_backend metabase-backends

backend metabase-backends
  mode http
  balance source
  option tcpka
  option httplog
  server-template kubernetes-worker 1-3 kubernetes-workers.service.automium.consul:30000 check port 30000 resolvers dns-consul
```

Looking at the configuration, you can see that HAProxy uses the [Service Discovery](/concepts/service-discovery) for resolving the backend addresses. 

Before trying to access Metabase on the HTTP port of HAProxy, we have to expose our container, accordingly to the example, defining the following Kubernetes Service:

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: metabase
  name: metabase-svc
spec:
  ports:
  - nodePort: 30000
    port: 3000
    protocol: TCP
    targetPort: 3000
  selector:
    app: metabase
  sessionAffinity: None
  type: NodePort
```

Let's try if everything is correct in the [last step](Live).