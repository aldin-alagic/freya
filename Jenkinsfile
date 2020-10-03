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
    }
}