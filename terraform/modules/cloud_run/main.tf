# Create the Cloud Run service
resource "google_cloud_run_service" "portfolio" {
  name     = var.service_name
  location = var.region

  template {
    spec {
      containers {
        image = var.container_image
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Allow unauthenticated access
resource "google_cloud_run_service_iam_member" "public" {
  location = google_cloud_run_service.portfolio.location
  service  = google_cloud_run_service.portfolio.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
