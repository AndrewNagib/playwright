pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-focal'
      args '-u root'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm install
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
        }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}