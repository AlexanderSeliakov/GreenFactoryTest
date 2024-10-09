## Installation Note

Run `npm i` and then `npm run dev` If you get an error when running `npm run dev` on _mac os_, try
`sudo npm i -g vite`

## Demo

https://alexanderseliakov.github.io/GreenFactoryTest/

### Login Credentials:

Use any username to log in (e.g., user).

## Books Searching App

A simple application built with **React**, **TypeScript**, and **Vite**. The app allows you to
search books from openlibrary

## Features

-   Search Functionality: Users can search for books by title, author, or subject with real-time
    results.
-   Debounced Search Input: Implements a debounce mechanism to optimize API calls and improve
    performance.
-   Pagination: Navigate through search results seamlessly with pagination controls.
-   Average Search Duration: Displays the average duration of search queries to monitor performance.
-   Simple Authentication: Log in using **just a username**, with authentication state persisted in
    localStorage.
-   Modular Architecture: Well-organized and isolated components for maintainability and
    scalability.
-   Efficient Data Management: Utilizes React Query for caching and managing server state, reducing
    unnecessary network requests.

## General Comments

I tried to keep the app's architecture simple due to its straightforward functionality while
organizing it into separate modules for flexibility and future growth. I aimed to keep components as
isolated as possible, ensuring each component handles its own responsibility without unnecessary
dependencies. This modular approach not only enhances maintainability but also facilitates easier
testing and scalability as the application evolves.
