output "service_account_email" {
  description = "The email of the service account"
  value       = google_service_account.github_actions.email
}

output "workload_identity_provider" {
  description = "The name of the Workload Identity Provider"
  value       = google_iam_workload_identity_pool_provider.github_actions_provider.name
}
