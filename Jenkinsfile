pipeline {
    agent any
    
    tools {
        nodejs 'node' // Ensure NodeJS tool is configured in Jenkins with this name
    }
    
    environment {
        NODE_OPTIONS = '--openssl-legacy-provider' // Set legacy provider for Node.js versions >= 17
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git url: 'https://github.com/KirtikaSharma5104/HD-PROFESSIONAL.git', branch: 'main'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    bat 'npm install' // Use 'bat' for Windows, 'sh' for Unix/MacOS
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // Build the application
                    bat 'npm run build'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run tests
                    bat 'npm test -- --watchAll=false'
                }
            }
        }
        
        stage('Code Quality Analysis') {
            steps {
                script {
                    // Example: Running ESLint for code quality checks
                    bat 'npx eslint . --ext .js,.jsx' // Adjust this command based on your code quality tool
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Example: Copy built files to a local directory for testing
                    bat 'if not exist C:\\local-deployment mkdir C:\\local-deployment'
                    bat 'xcopy /E /I /Y build\\* C:\\local-deployment\\'
                }
            }
        }
        
        stage('Release') {
            steps {
                echo 'Releasing to production...'
                // Add your production deployment steps here
            }
        }
        
        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring and alerting...'
                // Add monitoring setup steps, e.g., integrating with Datadog or New Relic
            }
        }
    }
    
    post {
        always {
            // Archive the build artifacts
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for more details.'
        }
    }
}
