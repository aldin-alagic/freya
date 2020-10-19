def BUILD_NUMBER = env.BUILD_NUMBER

pipeline {
    agent {
        node {
        label 'master'
        } 
    }
    options {
        skipDefaultCheckout()
    }
    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                checkout scm
                sh "git checkout develop"
                sh "printenv"
            }
        }
        stage('Build') {
            steps {
                sh "docker build -t freya:${BUILD_NUMBER} ."
            }
        }
        stage('Deploy') {
            steps {
                sh "docker stop freya || true && docker rm -f freya || true"
                sh "docker run -ti -d --network dys --name freya -p 9900:3000 freya:${BUILD_NUMBER}"
            }
        }
        stage('Clean') {
            steps {
                sh "docker rmi -f `docker images  --format "/{{.ID}}: {{.Repository}}/"  |grep freya | sed -E  's/(.*):(.*)/\1/'` || true"
                sh "docker rmi -f `docker images  --format "/{{.ID}}: {{.Repository}}/"  |grep freya | sed -E  's/(.*):(.*)/\1/'` || true"
            }
        }
    }
}