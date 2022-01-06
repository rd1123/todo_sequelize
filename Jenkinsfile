pipeline {
    agent any
    environment {
        CI = 'true'
        RED = '#FF0000'
        YELLOW = '#FFFF00'
        GREEN = '#008000'
    }

    stages {
        stage('Pre-Build') {
            steps {
                echo "Build Started!"
            }
        }
    }

    post { 
        success {
            echo "Build Success"
            // slackSend(color: '#008000', message: "Build Succeed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }

        // failure { 
        //     echo "Build Failed"
        //     slackSend(color: '#FF0000', message: "Build Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        // }
    }
}
