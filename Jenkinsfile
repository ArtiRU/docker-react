pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Build') {
            steps {
                echo '📦 Installing dependencies and building...'
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage('Lint') {
            steps {
                echo '🔍 Running linters...'
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running unit tests...'
                sh 'npm run test'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
