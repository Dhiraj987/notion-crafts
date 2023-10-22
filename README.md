# Notion Crafts

Notion Crafts is a web application that provides a collection of icons and widgets designed to enhance Notion pages. This file provides an overview of the technical aspects of the project.

**Visit the website: [Notion Crafts](https://notioncrafts.com)**

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)

## Project Overview

Notion Crafts aims to help Notion users personalize their workspace with a wide range of icons and widgets. The web app is built using Python and Flask for the backend, HTML/CSS for the frontend, and leverages Nginx and Gunicorn for deployment. The project includes features such as:

- Serving a collection of icons from Icons8.
- Offering custom-designed widgets for Notion.
- Providing an intuitive user interface for users to explore and utilize the resources.

## Tech Stack

The technical stack used in this project includes:

- **Python**: The backend of the web app is built using Python, particularly the Flask framework.
- **HTML/CSS**: The frontend of the web app is designed using HTML and CSS for user interface and styling.
- **Nginx**: Nginx is used as a reverse proxy server to route HTTP requests to the Flask application.
- **Gunicorn**: Gunicorn is the WSGI HTTP server used to serve the Flask app.
- **Cloudflare**: Cloudflare is used to manage DNS and provide HTTPS encryption for the domain.
- **JSON**: JSON files are used to store data for icons and widgets.

## Deployment

The production deployment of this web app is hosted on an AWS EC2 instance. Nginx is used as a reverse proxy to route requests to Gunicorn. HTTPS is provided through Cloudflare.
