# Tetris v2 CI/CD and GitOps Deployment

## Stack

- Jenkins
- Docker
- Kubernetes
- ArgoCD
- GitOps

## What I Built

I engineered a Jenkins pipeline that builds, tags, and pushes Docker images to Docker Hub, then automatically updates Kubernetes manifests through a GitOps workflow.

## Outcome

- End-to-end deployment cycle under 3 minutes
- Fixed an image-tag mismatch issue and restored the deployment flow to a production-ready state within the same sprint
- Demonstrated a practical release path from commit to Kubernetes rollout
