variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "service_account_id" {
  description = "The ID of the service account"
  type        = string
  default     = "github-actions-deployer"
}

variable "service_account_display_name" {
  description = "The display name of the service account"
  type        = string
  default     = "GitHub Actions Deployer"
}

variable "service_account_description" {
  description = "The description of the service account"
  type        = string
  default     = "Service account for GitHub Actions deployments"
}

variable "pool_id" {
  description = "The ID of the Workload Identity Pool"
  type        = string
  default     = "github-actions-pool"
}

variable "pool_display_name" {
  description = "The display name of the Workload Identity Pool"
  type        = string
  default     = "GitHub Actions Pool"
}

variable "pool_description" {
  description = "The description of the Workload Identity Pool"
  type        = string
  default     = "Identity pool for GitHub Actions"
}

variable "provider_id" {
  description = "The ID of the Workload Identity Provider"
  type        = string
  default     = "github-actions-provider"
}

variable "provider_display_name" {
  description = "The display name of the Workload Identity Provider"
  type        = string
  default     = "GitHub Actions Provider"
}

variable "github_repo" {
  description = "The GitHub repository in the format 'owner/repo'"
  type        = string
}
