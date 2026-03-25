pipeline{
    agent any
    
    stages{
        stage("Code"){
            steps{
                git url: "https://github.com/codebydeep/My-Portfolio.git", branch: "main"
            }
        }
        stage("Build"){
            steps{
                sh "docker build -t my-port ."
            }
        }
        stage("Test"){
            steps{
                echo "Code Test developer karega"
            }
        }
        stage("Push to Docker Hub"){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: "dockerCreds",
                    passwordVariable: "dockerHubPass",
                    usernameVariable: "dockerHubUser"
                    )]){
                        sh "docker image tag my-port ${env.dockerHubUser}/my-port"
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker push ${env.dockerHubUser}/my-port:latest"
                    }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker compose up -d --build frontend"
            }
        }
    }
}
