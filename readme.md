# Webtoon Database Backend API

This project serves as the backend for making requests to a webtoon database. It provides RESTful API endpoints for performing read and write operations on webtoon data. The backend is built with **Node.js** and **Express.js**, and it supports **JWT-based authentication** for secure data manipulation.

## Features

- Fetch all webtoons.
- Add new webtoons.
- Fetch specific webtoons by ID.
- Delete webtoons by ID.
- JWT-based authentication for secure POST and DELETE requests.
- Rate limiting to prevent abuse.

## Technologies Used

- Node.js
- Express.js
- JWT (JSON Web Tokens) for authentication
- MongoDB
- `express-rate-limit` for rate limiting
- `jsonwebtoken` for generating and verifying tokens

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RanaAyush/Backend-Assignment-Animemangatoon.git

2. install dependencies
    ```bash 
    npm install

3. Setup your urls
    ```bash
    JWT_SECRET=your_jwt_secret
    PORT=5000
    DATABASE_URL=your_database_url
4. Generate Jwt token
    ```bash
    node generateToken.js
5. Start server
    ```bash
    npm run dev

