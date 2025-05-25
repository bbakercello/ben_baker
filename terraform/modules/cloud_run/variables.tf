variable "service_name" {
  description = "The name of the Cloud Run service"
  type        = string
  default     = "portfolio"
}

variable "region" {
  description = "The region to deploy the Cloud Run service"
  type        = string
  default     = "us-central1"
}

variable "container_image" {
  description = "The container image to deploy"
  type        = string
}
