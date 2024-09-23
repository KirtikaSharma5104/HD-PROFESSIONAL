pipeline {
    agent any
    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'  // Ensure NodeJS is configured in Jenkins
        SONARQUBE_SERVER = 'SonarQube'  // SonarQube server configured in Jenkins
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

        // Stage 2: Build the application
        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }

        // Stage 3: Test the application
        stage('Test') {
            steps {
                script {
                    bat 'npm run test -- --watchAll=false'
                }
            }
        }

        // Stage 4: Code Quality Analysis (Optional for HD)
        stage('Code Quality Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {  // SonarQube environment configured in Jenkins
                        bat 'sonar-scanner'
                    }
                }
            }
        }

        // Stage 5: Deploy to Test Environment
        stage('Deploy') {
            steps {
                script {
                    // Replace with your Windows-based deployment method, e.g., PowerShell or direct file copy
                    bat 'copy build\\* \\\\your-server\\path\\to\\deploy'
                }
            }
        }

        // Stage 6: Release to Production (Optional for HD)
        stage('Release') {
            steps {
                script {
                    // Example: Promoting to production (replace with your release tool)
                    bat 'echo "Promote to production environment"'
                }
            }
        }

        // Stage 7: Monitoring and Alerting (Optional for HD)
        stage('Monitoring and Alerting') {
            steps {
                script {
                    // Example: Setup monitoring using Datadog (replace with your tool and server)
                    bat 'echo "Monitoring setup on production"'
                }
            }
        }
    }

    post {
        always {
            // Archive built files
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true

            // Cleanup resources or notify team
            echo 'Pipeline completed'
        }
    }
}
