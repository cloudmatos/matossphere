---
sidebar_position: 4
---

# Glossary

MatosSphere Glossary of Terms

| Term | Description |
| ----------- | ----------- |
| Environment | A grouping classification to bind resources specific to different environments. For e.g. dev, staging, pre-production, production etc. Accounts can define their own environments and each account starts with a “Default” environment. |
| Application | Another sub level grouping classification to group relevant/related resources under one label. For e.g. A GCP Project or an AWS account or a K8 cluster or an application stack of resources etc. Accounts can define their own application as required. |
| Deploy | Selected IAC/PAC template execution from the repository catalogue to setup or reconfigure resources or policy enforcements. |
| Observe | Visualization of health and resource data for underlying resources of an application. |
| Manage | General administration of account, settings, users and roles, template repository catalogues etc. |
| History | Complete audit trail of all actions performed by human and non-human actors using the platform. |
| Resource | Any cloud resource exposed by the supported cloud service providers. For e.g. EC2, RDS on AWS, CE or Cloud SQL on GCP etc. |
| Health | Health is computed using a base algorithm that considers various virtual resource and compliance factors of underlying individual resources to deduce the aggregate score for an application. |
| Template | A collection of correlated scripts consisting of written instructions to set up, (re)configure cloud infrastructure resources and enforce policies as well as to remediate detected anomalies. For e.g. Terraform, Helm, Cloud Formation templates. |
| Remediation | Resolution of detected anomalies based on deep observability of underlying cloud resources health using automated tools, templates or scripts. |
| Observability | Observability provides the health and resource details of underlying resources to compute a relevant score to depict the current state of the overall application. |
