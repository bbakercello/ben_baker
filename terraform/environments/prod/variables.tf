variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The GCP region"
  type        = string
  default     = "us-central1"
}

variable "github_repo" {
  description = "The GitHub repository in the format 'owner/repo'"
  type        = string
}

variable "service_name" {
  description = "The name of the Cloud Run service"
  type        = string
  default     = "portfolio"
}

variable "container_image" {
  description = "The container image to deploy"
  type        = string
}
