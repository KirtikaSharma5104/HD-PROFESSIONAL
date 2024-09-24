pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // This should be configured in Jenkins under Manage Jenkins -> Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git url: 'https://github.com/KirtikaSharma5104/HD-PROFESSIONAL.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                // Install dependencies and build the project
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                bat 'npm test'
            }
        }
        stage('Docker Build') {
            steps {
                // Build Docker image
                bat 'docker build -t react-app-image .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // Run Docker container
                bat 'docker run -d -p 80:80 --name react-app-container react-app-image'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment steps here if needed
            }
        }
    }
    post {
        always {
            // Cleanup: Stop and remove the Docker container
            bat 'docker stop react-app-container || true'
            bat 'docker rm react-app-container || true'
        }
    }
}
