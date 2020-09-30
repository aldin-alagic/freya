pipeline {
    agent { docker { image 'docker:dind' } }
    stages {
        stage('build') {
            steps {
                sh 'echo hellp_world'
            }
        }
    }
}