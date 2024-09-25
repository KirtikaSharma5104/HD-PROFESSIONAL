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
                bat 'npm install puppeteer --save-dev'  // Ensure Puppeteer is installed
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'START /B npm run start'
                bat 'ping 127.0.0.1 -n 30 > nul'
                bat 'npm list puppeteer'  // Check if Puppeteer is installed
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
            // Check if the container exists before stopping it
            bat 'docker ps -a | findstr react-app-container && docker stop react-app-container || echo "Container not found"'
            bat 'docker ps -a | findstr react-app-container && docker rm react-app-container || echo "Container not found"'
            // Ensure to kill Node.js server process if needed
            bat 'taskkill /IM node.exe /F || true'
        }
    }
}
