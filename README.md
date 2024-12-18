# Calculator App CI/CD Pipeline

## Description

This CI/CD pipeline automates the process of building, testing, vulnerability detection, and deployment of a calculator application to Docker Hub.

## Key Features:

1. **Test Execution**: Runs tests on the application using Vitest and generates code coverage.
2. **Code Analysis**: Uses SonarQube to detect code quality issues, including critical vulnerabilities.
3. **Vulnerability Scanning**: Checks Docker images for vulnerabilities using Snyk.
4. **Docker Deployment**: Builds and deploys the Docker image to Docker Hub.

## Instructions

1. **Set up secrets**: Configure the following secrets in your GitHub project:
   - `SONAR_HOST_URL`
   - `SONAR_TOKEN`
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
   - `SNYK_TOKEN`

2. **Using the pipeline**:
   - Pushing to the `main` branch triggers the pipeline.
   - Steps include:
     - Installing dependencies.
     - Running tests.
     - Performing quality analysis with SonarQube.
     - Building the Docker image.
     - Scanning vulnerabilities with Snyk.
     - Deploying to Docker Hub (if analysis succeeds).

3. **Post-Processing**: Upon success, a deployment confirmation is displayed.
