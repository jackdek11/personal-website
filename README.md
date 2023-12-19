[![CircleCI](https://dl.circleci.com/status-badge/img/gh/jackdek11/personal-website/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/jackdek11/personal-website/tree/main)
# Personal Website and deployment architecture
This website deploys to DigitalOcean as a self-hosted droplet

### The website
![home page](./docs/home_page.png)

### Deployment
- **CI / CD should be done through the CircleCI pipeline**
- Should you need to deploy manually, there is an npm script to do so. Before running the script:
    - Add the `SSH_USER` and `SERVER_IP` variable to your environment (ssh user and remote IP addrs.)
    - Run `npm run deploy` (this will build and deploy your changes)