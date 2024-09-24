pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "react-app-image" // Name of your Docker image
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
                script {
                    // Install dependencies and build the React application
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    // Build the Docker image for the React application
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the Docker container in detached mode
                    sh "docker run -d -p 80:80 --name react-app-container ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Add your deployment steps here if needed
                    echo 'Application deployed successfully.'
                }
            }
        }
    }

    post {
        always {
            script {
                // Cleanup - Stop and remove the Docker container if it exists
                sh '''
                    docker stop react-app-container || true
                    docker rm react-app-container || true
                '''
            }
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
