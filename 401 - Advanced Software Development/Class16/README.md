# Readings: Data Transfer Objects

## [Data Transfer Objects](https://learn.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-5)

## Using Web API 2 with Entity Framework 6

This tutorial teaches you how to create a web application with an ASP.NET Web API back end that uses Entity Framework 6 for the data layer and Knockout.js for the client-side JavaScript application. The tutorial also shows how to deploy the app to Azure App Service Web Apps.

### Software versions used in the tutorial

- Web API 2.1
- Visual Studio 2017
- Entity Framework 6
- .NET 4.7
- Knockout.js 3.1

### Overview of the app

The app is a simple to-do list that lets you add, edit, and delete items. The app uses a single-page application (SPA) design, which means that after the initial page load, the app talks with the server through AJAX requests and updates the UI dynamically.

The main components of the app are:

- ASP.NET MVC: creates the HTML page.
- ASP.NET Web API: handles the AJAX requests and returns JSON data.
- Knockout.js: data-binds the HTML elements to the JSON data.
- Entity Framework: talks to the database.

### Steps to create the app

The tutorial consists of five parts:

1. Create the project and add a model class.
2. Add a controller and methods for GET, POST, PUT, and DELETE operations.
3. Add a client-side view and use Knockout.js to bind data to HTML elements.
4. Enable CORS to allow cross-origin requests from the client to the server.
5. Deploy the app to Azure App Service Web Apps.

You can see the finished app running on Azure by clicking [here](^1^). You can also download the completed project from [here](^2^).

### References

¹: https://bookservice2.azurewebsites.net/
²: https://code.msdn.microsoft.com/Using-Web-API-2-with-c1dc0a0e

## [How to use DTOs](https://www.infoworld.com/article/3562271/how-to-use-data-transfer-objects-in-aspnet-core-31.html)

## How to use Data Transfer Objects in ASP.NET Core 3.1

This article explains what Data Transfer Objects (DTOs) are, why they are useful, and how to use them in ASP.NET Core 3.1 applications.

### What are Data Transfer Objects (DTOs)?

- A DTO is a simple class that contains only data and no behavior.
- A DTO is used to transfer data between different layers or components of an application, such as the service layer and the presentation layer.
- A DTO is usually a POCO (plain old CLR object) that can be serialized and deserialized easily.
- A DTO should be immutable, meaning that its properties cannot be changed after it is created.

### Why use Data Transfer Objects (DTOs)?

- Using DTOs can decouple the clients from the internal data structures of the application, making it easier to change the data model without breaking the clients.
- Using DTOs can improve performance by reducing the amount of data that is transferred over the network, especially when using bandwidth-constrained mediums.
- Using DTOs can enhance security by hiding sensitive or irrelevant data from the clients, such as database IDs or internal fields.

### How to use Data Transfer Objects (DTOs) in ASP.NET Core 3.1?

- To use DTOs in ASP.NET Core 3.1, you need to create a class that represents the data you want to transfer, and annotate it with the `[DataContract]` and `[DataMember]` attributes.
- You also need to create a mapping between your data model and your DTO, either manually or using a library such as AutoMapper.
- You can then use your DTO class as the parameter or return type of your Web API controller methods, and ASP.NET Core will handle the serialization and deserialization for you.

### Example of using Data Transfer Objects (DTOs) in ASP.NET Core 3.1

The article provides a step-by-step guide on how to create an ASP.NET Core 3.1 Web API project that uses Entity Framework 6 for the data layer and Knockout.js for the client-side JavaScript application. The project is a simple to-do list app that uses DTOs to transfer data between the server and the client.

The article covers the following topics:

- How to create the project and add a model class
- How to add a controller and methods for GET, POST, PUT, and DELETE operations
- How to add a client-side view and use Knockout.js to bind data to HTML elements
- How to enable CORS to allow cross-origin requests from the client to the server
- How to deploy the app to Azure App Service Web Apps

You can see the finished app running on Azure by clicking [here](^1^). You can also download the completed project from [here](^2^).

### References

¹: https://bookservice2.azurewebsites.net/
²: https://code.msdn.microsoft.com/Using-Web-API-2-with-c1dc0a0e

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About