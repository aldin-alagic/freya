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
                sh "docker rm -f freya"
                sh "docker run -d --name freya -p 80:3000 freya:${BUILD_NUMBER}"
            }
        }
        stage('Clean') {
            steps {
                sh "docker rmi -f `docker images |grep freya`"
                sh "docker rmi -f `docker images |grep <none>`"
            }
        }
    }
}