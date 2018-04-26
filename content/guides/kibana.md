---
title: "Kibana"
lesson: 4
chapter: 4
cover: ""
date: "28/04/2018"
---

Kibana is the official Dashboard of Elasticsearch. You have to setup it somewhere in your infrastructure. The best place is, of course, your Kubernetes cluster.

To deploy applications in Kubernetes the suggested way is to go with [Helm](https://www.helm.sh/). Helm makes incredibly easy to deploy and upgrade application packages. **Tiller** is the Helm server component that runs on Kubernetes and handles the Helm packages.

Before we can use Helm, you need to install Tiller with the following steps.

```
$ kubectl create namespace kibana
...
$ kubectl create serviceaccount tiller --namespace kibana
serviceaccount "tiller" created
```

Define a role for the tiller serviceAccount with the yaml files:

role-tiller.yml
```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: tiller-manager
  namespace: kibana
rules:
- apiGroups: ["", "extensions", "apps"]
  resources: ["*"]
  verbs: ["*"]
```

rolebinding-tiller.yml
```yaml
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: tiller-binding
  namespace: kibana
subjects:
- kind: ServiceAccount
  name: tiller
  namespace: kibana
roleRef:
  kind: Role
  name: tiller-manager
  apiGroup: rbac.authorization.k8s.io
```

Apply the files with the following commands:

```
$ kubectl create -f role-tiller.yml 
role.rbac.authorization.k8s.io "tiller-manager" created
$ kubectl create -f rolebinding-tiller.yml 
rolebinding.rbac.authorization.k8s.io "tiller-binding" configured
```

Now you are ready to init helm. Be sure to use the namespace "kibana"!

```
helm init --service-account tiller --tiller-namespace grafana
$HELM_HOME has been configured at /Users/automium/.helm.

Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.
Happy Helming!
```

In the [next step](kibana-chart) we are going to deploy Kibana.
