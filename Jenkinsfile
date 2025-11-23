pipeline {
    agent any

    tools {
        nodejs "NodeJS"  // Убедитесь, что это имя совпадает с настройками в Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                echo "🔄 Starting checkout..."
                checkout scm
                sh 'ls -la'  // Проверка что файлы есть
            }
        }

        stage('Install') {
            steps {
                echo "📦 Installing dependencies..."
                sh 'node --version'
                sh 'npm --version'
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                echo "🔍 Running lint..."
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                echo "🧪 Running tests..."
                sh 'npm run test'
            }
        }

        stage('Build') {
            steps {
                echo "🏗️ Building project..."
                sh 'npm run build'
                sh 'ls -la dist/'  // Проверка что сборка создалась
            }
        }
    }

    post {
        always {
            echo "✅ Pipeline completed: ${currentBuild.result}"
            cleanWs()  // Очистка workspace
        }
        success {
            echo "🎉 Pipeline succeeded!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}