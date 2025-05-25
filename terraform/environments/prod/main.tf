provider "google" {
  project = var.project_id
  region  = var.region
}

module "github_actions" {
  source = "../../modules/github_actions"

  project_id  = var.project_id
  github_repo = var.github_repo
}

module "cloud_run" {
  source = "../../modules/cloud_run"

  service_name    = var.service_name
  region          = var.region
  container_image = var.container_image
}
