# Readings: Identity

## [Intro to Identity on ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-7.0&viewFallbackFrom=aspnetcore-2.1&tabs=visual-studio)

This article explains how to use Identity, an API that supports user interface (UI) login functionality, in ASP.NET Core web apps. Identity manages users, passwords, profile data, roles, claims, tokens, email confirmation, and more.

### Software versions used in the article

- ASP.NET Core 7.0
- Visual Studio 2022
- Entity Framework 6
- .NET 7.0
- Knockout.js 3.1

### Overview of the app

The app is a simple to-do list that lets you add, edit, and delete items. The app uses a single-page application (SPA) design, which means that after the initial page load, the app talks with the server through AJAX requests and updates the UI dynamically.

The main components of the app are:

- ASP.NET MVC: creates the HTML page.
- ASP.NET Web API: handles the AJAX requests and returns JSON data.
- Knockout.js: data-binds the HTML elements to the JSON data.
- Entity Framework: talks to the database.

### Steps to create the app

The article consists of five parts:

1. Create the project and add a model class.
2. Add a controller and methods for GET, POST, PUT, and DELETE operations.
3. Add a client-side view and use Knockout.js to bind data to HTML elements.
4. Enable CORS to allow cross-origin requests from the client to the server.
5. Deploy the app to Azure App Service Web Apps.

You can see the finished app running on Azure by clicking [here](^1^). You can also download the completed project from [here](^2^).

### References

¹: https://bookservice2.azurewebsites.net/
²: https://code.msdn.microsoft.com/Using-Web-API-2-with-c1dc0a0e

## [Identity Demystified](https://freetimeprogrammer.com/)

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About