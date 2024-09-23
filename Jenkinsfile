pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    bat 'npm run test -- --watchAll=false'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Copy built files to the local directory you just created
                    bat 'xcopy /E /I build\\* C:\\local-deployment\\'
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
