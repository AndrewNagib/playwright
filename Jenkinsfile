pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.38.0-focal'
            args '-u root'  // Запуск контейнера с правами root (если необходимо)
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
         sh '''
          npm install
          npm i -D @playwright/test
          npx playwright install
        '''
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Здесь запускаются ваши тесты, например, с использованием npm или npx:
                    sh 'npx playwright test'
                }
            }
        }
    }
}