pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Ensure this matches the name given in Global Tool Configuration in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/KirtikaSharma5104/HD-PROFESSIONAL.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                bat 'npm install --include=dev'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'START /B npm run start'
                bat 'ping 127.0.0.1 -n 30 > nul'
                bat 'npm list puppeteer'  // This checks if Puppeteer is installed
                bat 'node src/puppeteerTest.js' 
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
            // Cleanup
            bat 'docker stop react-app-container || true'
            bat 'docker rm react-app-container || true'
            // Ensure to kill Node.js server process if needed
            bat 'taskkill /IM node.exe /F || true'
            cleanWs()  // Clean workspace after each build
        }
    }
}
