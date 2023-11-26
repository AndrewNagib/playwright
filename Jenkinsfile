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
                script {
                    // Здесь вы можете выполнить установку зависимостей, если это необходимо для ваших тестов
                    // Например, установка Node.js пакетов:
                    sh 'npm install'
                }
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