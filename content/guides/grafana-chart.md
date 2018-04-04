---
title: "Grafana Chart"
lesson: 10
chapter: 2
cover: ""
date: "05/04/2018"
---

A Chart is a Helm package. Grafana is one of the stable chart available in the official Repository.

In Helm, a Release is an instance of a chart running in a Kubernetes cluster. Charts have default configurations that sometimes require a persistent logic via [PersistentVolumeClaim]() and [StorageClass]().

Grafana chart require by default a storage volume to persist configuration and dashboards. So, you have to define a StorageClass to use the Enter Cloud Suite storage service (OpenStack Cinder):

storageclass.yml
```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: standard
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
provisioner: kubernetes.io/cinder
parameters:
  type: Standard
  availability: de-fra1
```

Change the **availability** parameter accordingly with the Enter Cloud Suite region you are using and create the StorageClass with the command:
`kubectl create -f storageclass.yml`.

Now, you can create a default release of the Grafana Chart with the following command: 

```
$ helm --tiller-namespace grafana install stable/grafana
NAME:   incindiary-hedgehog
LAST DEPLOYED: Wed Apr  4 21:45:10 2018
NAMESPACE: grafana
STATUS: DEPLOYED
...
```

In the NOTES section of the output you can get the command for getting the service password (the username is admin):

```
$ kubectl get secret --namespace grafana incindiary-hedgehog-grafana -o jsonpath="{.data.grafana-admin-password}" | base64 --decode ; echo
```

You can check the status of the grafana container, with the command: 

```
$ kubectl --namespace grafana get pods -l "component=grafana"
NAME                                      READY     STATUS    RESTARTS   AGE
incindiary-hedgehog-grafana-76484-xdt4g   1/1       Running   0          1m
```

If the pod is running, the Grafana server can be accessed via port-forwarding using the command
`kubectl --namespace grafana port-forward incindiary-hedgehog-grafana-76484-xdt4g 3000` and opening the url `http://localhost:3000/` in your browser. 

Thanks for following this guide, now you have all the components to understand what's happening in your infrastructure!