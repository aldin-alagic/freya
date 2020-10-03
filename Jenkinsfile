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
                sh "docker rm -f freya > /dev/null"
                sh "docker run -d --name freya -p 80:3000 freya:${BUILD_NUMBER}"
            }
        }
        stage('Clean') {
            steps {
                sh "docker rmi -f `docker images |grep freya` > /dev/null"
                sh "docker rmi -f `docker images |grep <none>` > /dev/null"
            }
        }
    }
}