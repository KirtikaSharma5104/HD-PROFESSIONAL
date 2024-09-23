pipeline {
    agent any
    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS' // Ensure NodeJS is configured in Jenkins
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm run test -- --watchAll=false'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Example: Deploy the build to a server
                    sh 'scp -r build/ user@your-server:/path/to/deploy/'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}
