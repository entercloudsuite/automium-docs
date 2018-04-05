---
title: "Grafana"
lesson: 8
chapter: 2
cover: ""
date: "05/04/2018"
---

[Grafana](https://grafana.com/) is an open source software that allows you to query and visualize your metrics with beautiful dashboards. 

We are going to deploy Grafana in Kubernetes.

Let's start from Automium. Add a new Application named "grafana". This automatically create the new role "grafana". The role should be assign to the users who are in charge of managing Grafana.

As a Kubernetes Admin, create a dedicated namespace for Grafana with the command:

```
$ kubectl create namespace grafana
namespace "grafana" created
```

Define a [Role](https://kubernetes.io/docs/admin/authorization/rbac/#role-and-clusterrole) in a new yaml file: **role-grafana.yml**. The role define a **grafana-manager** with full grants on the namespace:

```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: grafana
  name: grafana-manager
rules:
- apiGroups: ["","extensions", "apps"]
  resources: ["*"]
  verbs: ["*"]
```

Apply the role with the command `kubectl create -f role-grafana.yml`.

Now you need to bind the new role to the [Group](https://kubernetes.io/docs/admin/authorization/rbac/#rolebinding-and-clusterrolebinding) "grafana":

rolebinding-grafana.yml
```yaml
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: grafana-binding
  namespace: grafana
subjects:
- kind: Group
  name: grafana
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: grafana-manager
  apiGroup: rbac.authorization.k8s.io
```

Apply the RoleBinding with the command `kubectl create -f rolebinding-grafana.yml`.

The first configurations for deploying the Grafana service are done, you can move to the [next step](helm).