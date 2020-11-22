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
                sh "docker run -ti -d --network host --name freya -p 9900:3000 freya:${BUILD_NUMBER}"
            }
        }
        stage('Clean') {
            steps {
                sh "docker rmi `docker images freya  --format '{{.ID}}'` || true"
                sh "docker rmi -f `docker images '<none>'  --format '{{.ID}}'` || true"
            }
        }
    }
}
