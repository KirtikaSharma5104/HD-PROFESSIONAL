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
                archiveArtifacts artifacts: 'build/', allowEmptyArchive: true
            }
        }

        
        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                bat 'docker run --rm -v ${WORKSPACE}:/code codeclimate/codeclimate analyze'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo "Deploying to Test Environment..."'
            }
        }
    }

    post {
        always {
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
