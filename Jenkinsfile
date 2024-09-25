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
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Start the app in the background on a specific port
                bat 'START /B npm run start'
                // Increase the timeout to allow the server to start up properly
                bat 'timeout /t 30' // Increase to 30 seconds or more if needed
                // Run Puppeteer tests
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
        }
    }
}
