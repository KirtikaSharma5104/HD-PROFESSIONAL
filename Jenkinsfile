pipeline {
    agent any
    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'  // Ensure NodeJS is configured in Jenkins
    }

    stages {
        // Stage 1: Install Dependencies
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        // Stage 2: Build the React app
        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }

        // Stage 3: Test the React app
        stage('Test') {
            steps {
                script {
                    bat 'npm run test -- --watchAll=false'
                }
            }
        }

        // Stage 4: Deploy the build (if applicable)
        stage('Deploy') {
            steps {
                script {
                    // Add deployment logic here, such as copying files to a server
                    bat 'echo Deploying...'
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
