# The live EC2 environment was removed after testing to avoid ongoing cloud costs. This repository documents the complete implementation.


# Automated Resume Deployment on AWS EC2

![Final Resume Website](<img width="1917" height="972" alt="image" src="https://github.com/user-attachments/assets/c1705ba5-e84e-49ba-b9f2-145a4af93baa" />)

## Project Overview

Built and deployed a responsive resume website on Ubuntu EC2
instance using Apache. Automated the deployment process using GitHub
Actions and SSH.

## Architecture

<img width="1707" height="917" alt="image" src="https://github.com/user-attachments/assets/5e8ad203-c9f3-4513-8659-0d80b370cde3" />


## Technologies Used

- AWS EC2
- Ubuntu 
- Apache2
- GitHub Actions
- SSH
- HTML
- CSS
- JavaScript

## Key Features

- Automated deployment after every push to the main branch
- Apache web server configuration
- EC2 Security Group configuration for SSH and HTTP
- Responsive resume website
- Secure deployment using GitHub Secrets

## Deployment Workflow

1. Code is pushed to the main branch.
2. GitHub Actions connects to EC2 using SSH.
3. Website files are copied to the server.
4. Files are placed inside `/var/www/html`.
5. Apache serves the updated website.

## Screenshots

### GitHub Actions Deployment

![GitHub Actions](screenshots/github-actions-success.png)

### EC2 Instance

![EC2 Instance](<img width="1707" height="917" alt="image" src="https://github.com/user-attachments/assets/f247ac2c-c8de-4f3d-a9cf-d0f5f7e422c4" />)

### Apache Server Test

![Apache Test](screenshots/apache-test.png)

## Challenges and Solutions

### Website timed out

<img width="1200" height="656" alt="req_time_out" src="https://github.com/user-attachments/assets/3670e4a2-85d3-41f7-bf3d-6455e8d4abb0" />

The EC2 Security Group originally allowed only SSH traffic.

**Solution:** Added an inbound HTTP rule for port 80.

<img width="1620" height="740" alt="inbound_security" src="https://github.com/user-attachments/assets/aadbfb65-47db-4442-8187-e4cf0d8dec65" />

### GitHub Actions did not start

The workflow file was located in the wrong folder.

**Solution:** Moved the workflow to:

`.github/workflows/deploy.yml`

### Website loaded without styling

<img width="1900" height="901" alt="WebsiteNoStyling" src="https://github.com/user-attachments/assets/21b9999a-ceaf-427f-acd2-d5fadd8c3fe9" />


The stylesheet filename did not match the filename referenced by
`index.html`.

**Solution:** Corrected the CSS filename and updated the CSS selectors.

## Cost Management

The EC2 instance and associated resources were terminated after the
project was completed to prevent ongoing AWS charges.

## What I Learned

- EC2 instance provisioning
- Linux server administration
- Apache configuration
- GitHub Actions deployment
- SSH key authentication
- Security Group troubleshooting
- Cloud cost management


## Project Demo

Click the image below to watch the full portfolio walkthrough.

[![Click here](screenshots/portfolio-demo-thumbnail.png)](https://youtu.be/YOUR_VIDEO_ID)


