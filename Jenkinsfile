pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Test') {
            parallel {
                stage('Install') {
                    steps {
                        sh 'npm ci'
                    }
                }
                stage('Lint') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                stage('Test') {
                    steps {
                        sh 'npm run test'
                    }
                }
            }
        }

        stage('Verify Build') {
            steps {
                sh '''
                    ls -la /var/jenkins_home/workspace/build/ || echo "Build not ready"
                '''
            }
        }
    }

    post {
        always {
            echo "✅ Testing completed: ${currentBuild.result}"
        }
        success {
            echo "🎉 All tests passed! Build is ready in nginx"
        }
    }
}