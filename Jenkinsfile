pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Ensure this matches the name in Jenkins' Global Tool Configuration
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
                // Start the app in the background
                bat 'START /B npm run start'
                
                // Sleep to give the app time to fully start
                bat 'timeout /t 10'
                
                // Run Puppeteer tests
                bat 'npm run puppeteer-test' // Defined in your package.json
            }
        }
        stage('Docker Build') {
            steps {
                // Build a Docker image for the app
                bat 'docker build -t react-app-image .'
            }
        }
        stage('Run Docker Container') {
            steps {
                // Run the Docker container
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
            // Clean up the Docker container
            bat 'docker stop react-app-container || true'
            bat 'docker rm react-app-container || true'
            
            // Clean up Node.js server
            bat 'taskkill /IM node.exe /F || true'
        }
    }
}

