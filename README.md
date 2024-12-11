# Movie Database Application 🎥

## Table of Contents
* Introduction
* Technologies Used
* Scope of Functionalities
* Examples of Use
* How to Launch
* Project Status
* Sources and Acknowledgments
* Other Information
## Introduction
The Movie Database Application is a React-based project designed to provide users with an interactive platform to search and explore movies. It uses a modern, responsive interface to display movie details like titles, genres, directors, cast, and plot summaries. The primary aim of the project is to demonstrate how a frontend can connect to a backend API and deliver dynamic content.

## Technologies Used
* Frontend: React.js, Bootstrap
* HTTP Client: Axios
* Styling: CSS
* Backend API: Accessible via REACT_APP_API_URL environment variable
* Build Tool: React Scripts

## Scope of Functionalities
  ### Search Movies: Users can search for movies by title or keywords using a search bar.
  ### Paginated Listings: The app displays movies in a paginated format, allowing users to navigate easily through large datasets.
  ### Movie Details: Each movie card displays detailed information, such as:
    * Title and release year
    * Genres
    * Directors
    * Cast
    * Plot
    * Responsive Design: The app adapts seamlessly to various screen sizes.
## Examples of Use

### Search Functionality:
Input a movie title like Inception in the search bar and click "Search."
The results display movies matching the title, along with key details.

### Pagination:
View multiple results across pages and adjust the number of results per page using a dropdown.

### Dynamic Movie Cards:
Each card includes clickable or visible information about a movie, making it easy to explore its details.

## How to Launch

### Prerequisites
* Install Node.js (v16 or higher) and npm/yarn.

### Steps to Run the Project

1. Clone the Repository:

git clone <repository-url>
cd <repository-folder>

2. Install Dependencies:
   
npm install

3. Set Up Environment Variables:
* Create a .env file in the root directory.
* Add the backend API URL:
REACT_APP_API_URL=<Your Backend API URL>

### Start the Application:

npm start
* The app will run on http://localhost:3000.

## Sources and Acknowledgments
* Movie Data: Fetched from a backend API connected to a MongoDB database.
* Libraries:
    React.js (UI framework)
    Axios (HTTP requests)
    Bootstrap (responsive design)
* Inspiration: A learning exercise for integrating a React frontend with a REST API.

## Other Information
This project was created to demonstrate frontend development with React, focusing on real-world scenarios like API integration and responsive design. It can serve as a foundation for larger applications in movie or content management domains.
