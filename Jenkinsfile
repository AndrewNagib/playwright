pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
    } 
  }
  environment {
        npm_config_cache = 'npm-cache'
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
          echo 'Tests completed successfully'
        '''
      }
    }
  }
}