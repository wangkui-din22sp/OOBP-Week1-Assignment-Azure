pipeline {
    agent any
    tools {
        nodejs 'Node22' // Node.js 22 with npm 22.15.0
    }
    environment {
        ACR_REGISTRY = 'wangkui.azurecr.io'
        ACR_REPOSITORY = 'typescript-week1'
        IMAGE_TAG = "${env.BUILD_ID}"
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/wangkui-din22sp/OOBP-Week1-Assignment-Azure', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${ACR_REGISTRY}/${ACR_REPOSITORY}:${IMAGE_TAG} ."
            }
        }
        stage('Push to ACR') {
            when {
                expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'acr-credentials', usernameVariable: 'ACR_USER', passwordVariable: 'ACR_PASS')]) {
                    sh "echo $ACR_PASS | docker login ${ACR_REGISTRY} --username $ACR_USER --password-stdin"
                    sh "docker push ${ACR_REGISTRY}/${ACR_REPOSITORY}:${IMAGE_TAG}"
                }
            }
        }
    }
    post {
        always {
            cleanWs()
            sh "docker rmi ${ACR_REGISTRY}/${ACR_REPOSITORY}:${IMAGE_TAG} || true"
        }
        success {
            echo 'Build, test, and push to ACR completed.'
        }
        failure {
            echo 'Build, test, or push failed.'
        }
    }
}
