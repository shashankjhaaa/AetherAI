# AetherAI

AetherAI is a full-stack B2B SaaS and Customer Experience platform designed to help businesses manage customer interactions, authentication, dashboards, pricing, and AI-powered conversations through a unified web application.

## Features

- Modern responsive landing page
- User Registration and Login
- Customer dashboard
- AI-powered chatbot using Google Gemini API
- Customer experience analytics
- Bot customization
- Pricing section
- FAQ section
- Testimonial slider
- Responsive UI
- MySQL database integration
- REST APIs using Spring Boot

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Chart.js
- AOS Animation Library
- Font Awesome

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Maven
- REST APIs

### Database
- MySQL

### AI
- Google Gemini API

## Project Structure

```text
AetherAI/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── auth.js
│   ├── chatbot.js
│   ├── config.js
│   ├── dashboard.js
│   ├── main.js
│   ├── pricing.js
│   └── slider.js
│
└── AetherAiBackend/
    ├── src/
    │   ├── main/
    │   │   ├── java/com/aether/backend/
    │   │   │   ├── AuthController.java
    │   │   │   ├── BackendApplication.java
    │   │   │   ├── ChatController.java
    │   │   │   ├── User.java
    │   │   │   └── UserRepository.java
    │   │   │
    │   │   └── resources/
    │   │       └── application.properties
    │   │
    │   └── test/
    │
    ├── pom.xml
    ├── mvnw
    └── mvnw.cmd


    ## Deployment

### Frontend

The AetherAI frontend is deployed on Netlify.

### Backend

The Spring Boot backend currently runs locally on:

`http://localhost:8080`

The frontend communicates with the backend through the configured API endpoint.
