---
title: "Kibana Chart"
lesson: 5
chapter: 4
cover: ""
date: "28/04/2018"
---

A Chart is an Helm package. Kibana is one of the stable chart available in the official Repository.

In Helm, a Release is an instance of a chart running in a Kubernetes cluster.
You can create a release of the Kibana Chart with the following command to define the needed parameter like the version of the components and the Elasticsearch url. 

```
$ helm --tiller-namespace kibana install stable/kibana --set=env.ELASTICSEARCH_URL=http://elasticsearch.service.automium.consul:9200,image.tag=5.5.1,image.repository=kibana
NAME:   innocent-skunk
LAST DEPLOYED: Thu Apr 26 12:38:50 2018
NAMESPACE: kibana
STATUS: DEPLOYED
...
```

You can check the status of the Kibana container, with the command: 

```
$ kubectl --namespace kibana get pods 
NAME                                     READY     STATUS    RESTARTS   AGE
innocent-skunk-kibana-5dbdd665b4-jgj7j   1/1       Running   0          1h
tiller-deploy-54fb77d879-cn5hs           1/1       Running   0          1h
```

If the pod is running, the Kibana server can be accessed via port-forwarding using the command
`kubectl --namespace kibana port-forward innocent-skunk-kibana-5dbdd665b4-jgj7j 5601` and opening the url `http://localhost:5601/` in your browser. 

![kibana](/images/kibana.png "kibana")
