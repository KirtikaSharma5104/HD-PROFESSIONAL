pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KirtikaSharma5104/HD-PROFESSIONAL.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
                bat 'docker build -t react-app-image .' // Build Docker image
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false' // Ensure tests run once
            }
        }

        stage('Code Quality Analysis') {
            steps {
                withCredentials([string(credentialsId: 'codeclimate-test-reporter-id', variable: 'CC_TEST_REPORTER_ID')]) {
                    bat 'docker run --rm -v C:/ProgramData/Jenkins/.jenkins/workspace/React-App-Pipeline:/code codeclimate/codeclimate analyze'
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker run -d -p 80:80 --name react-app-container react-app-image' // Deploy the app
            }
        }

        stage('Release') {
            steps {
                bat 'echo "Promoting to production..."' // Placeholder for production release
                // Add commands for production release, if applicable
            }
        }

        stage('Monitoring') {
            steps {
                bat 'echo "Monitoring in production..."' // Placeholder for monitoring tool
                // Add integration with Datadog, New Relic, or any monitoring tool here
            }
        }
    }

    post {
        always {
            cleanWs() // Clean workspace after each build
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
