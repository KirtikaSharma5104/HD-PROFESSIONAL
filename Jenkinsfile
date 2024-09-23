pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git url: 'https://github.com/KirtikaSharma5104/HD-PROFESSIONAL.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                // Build the React application
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment steps here
            }
        }
    }
}
