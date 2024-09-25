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
        
        // Use ping as a delay workaround (pinging localhost 30 times, 1 second per ping)
        bat 'ping 127.0.0.1 -n 30 > nul'

        // Check if the server is running before running the tests
        bat 'curl http://localhost:3000 || echo "Server not running!"'
        
        // Run Puppeteer tests
        bat 'npm run puppeteer-test'
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

