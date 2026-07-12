# The live EC2 environment was removed after testing to avoid ongoing cloud costs. This repository documents the complete implementation.

----

# Automated Resume Deployment on AWS EC2



## Project Overview

Built and deployed a responsive resume website on Ubuntu EC2 instance using Apache. Automated the deployment process using GitHub Actions and SSH.

## Architecture

<img width="1448" height="1086" alt="ArchitectureDiagram" src="https://github.com/user-attachments/assets/e9e2289d-988d-40a9-800a-673deda60f20" />



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

<img width="1918" height="972" alt="github_actions" src="https://github.com/user-attachments/assets/358d08b1-a866-4d22-be13-a4fde2a37c9e" />


### EC2 Instance

<img width="1707" height="917" alt="image" src="https://github.com/user-attachments/assets/f247ac2c-c8de-4f3d-a9cf-d0f5f7e422c4" />

### Apache Server Test

<img width="1661" height="772" alt="ec2_commandrun" src="https://github.com/user-attachments/assets/a77bdfb9-ad12-4ea5-840a-cbb3f927aa37" />


## Challenges and Solutions

### Website timed out

<img width="1200" height="656" alt="req_time_out" src="https://github.com/user-attachments/assets/3670e4a2-85d3-41f7-bf3d-6455e8d4abb0" />

The EC2 Security Group originally allowed only SSH traffic.

**Solution:** Added an inbound HTTP rule for port 80.

<img width="1620" height="740" alt="inbound_security" src="https://github.com/user-attachments/assets/aadbfb65-47db-4442-8187-e4cf0d8dec65" />

### Website loaded without styling

<img width="1777" height="882" alt="WebsiteNoStyling1" src="https://github.com/user-attachments/assets/05d0374b-5747-415c-bcf9-9a7c1f1e29b1" />

<img width="1900" height="901" alt="WebsiteNoStyling" src="https://github.com/user-attachments/assets/21b9999a-ceaf-427f-acd2-d5fadd8c3fe9" />


The stylesheet filename did not match the filename referenced by
`index.html`.

**Solution:** Corrected the CSS filename and updated the CSS selectors.


## What I Learned

- EC2 instance provisioning
- Linux server administration
- Apache configuration
- GitHub Actions deployment
- SSH key authentication
- Security Group troubleshooting

## Project Demo

Click the link below to watch the full portfolio walkthrough.

![Watch from youtube]((https://youtu.be/2LQLv_FEWm8)) or [Download here](https://github.com/megat-hakim/cloud-portfolio/releases/download/portfolio-demo/Sequence.03.mp4)


----

## AI-Assisted Development

Used Codex to help with frontend development. Generate and improve parts of the HTML, CSS and JavaScript. Generated code was reviewed, tested and modified.


