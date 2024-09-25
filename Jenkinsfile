pipeline {
    agent any

    environment {
        CC_TEST_REPORTER_ID = credentials('codeclimate-test-reporter-id')
    }

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
                bat 'set CI=false && npm run build'
                archiveArtifacts artifacts: 'build/', allowEmptyArchive: true
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --passWithNoTests'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t react-app-image .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d -p 80:80 --name react-app-container react-app-image'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }

    post {
        always {
            bat 'docker stop react-app-container || true'
            bat 'docker rm react-app-container || true'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
