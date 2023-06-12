# CRUD

## [Status Codes Based On REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

1. - 100's = They're like your friend saying, "Hang on, I'm thinking." These are informational status codes. The server is saying it received your request, and it's processing it.

- 200's = These are like getting a high-five. They indicate success! The server understood your request, accepted it, and sent what you asked for.

- 300's = Imagine you're looking for your friend on the playground, but they moved to another spot. This is what these codes are like - redirection. The information you asked for is somewhere else, and the server is telling you where to look.

- 400's = These are like when you ask something silly or wrong, and your friend says, "Huh? That doesn't make sense." These codes mean there was a mistake in your request. It could be you asked for something that doesn't exist or in a way the server doesn't understand.

- 500's = Imagine your friend had a chance to respond, but they tripped and fell. These codes are like that. They indicate there's something wrong on the server's end, not yours.

2. What is a status code 202?
The status code 202, "Accepted," is often used for asynchronous processing. It indicates that the client's request was valid, but its processing will finish sometime in the future. 

3. What is a status code 308?
 The status code 308 is used for permanent redirects. When a server responds with a 308 status code, it instructs the client to use another URL to access the requested resource and to not use the current URL anymore

4. What code would you use if an update didn’t return data to a client?
If an update operation doesn't return any data to the client, the appropriate status code to use is 204 No Content.

The status code 204 indicates that the server has successfully processed the request and there is no content to send back in the response body.

5. What code would you use if a resource used to exist but no longer does?
If a resource used to exist but no longer does, the appropriate status code to use is 410 Gone.

The status code 410 indicates that the requested resource is permanently gone and will not be available again. 

6. What is the ‘Forbidden’ status code?
The "Forbidden" status code is represented by the status code 403 in the HTTP specification.

The status code 403 Forbidden indicates that the client has been authenticated and successfully communicated with the server, but it lacks the necessary permissions to access the requested resource. 

&nbsp;

&nbsp;

## [Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)


### Questions

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?

It is considered a best practice to store sensitive information, such as database connection strings, passwords, and API keys, in environment variables rather than hard-coding them into the source code. By storing the MongoDB database string in the .env file, you separate the configuration from the code, making it easier to manage and maintain. This approach also helps to protect sensitive information from being exposed if the source code is accidentally shared or if the project is hosted on a version control system.

2. What is middleware?

Middleware refers to a piece of code that sits between the request and response objects in an application. It acts as a bridge, intercepting incoming requests, performing certain actions or transformations, and passing the request along to the next middleware or final request handler.

Middleware can be used for various purposes, such as logging, authentication, authorization, error handling, data parsing, and more. It allows developers to modularize their application logic and apply common functionalities across multiple routes or endpoints without duplicating code.

3. What does app.use(express.json()) do?

In the context of an Express.js application, app.use(express.json()) is middleware that parses incoming request bodies containing JSON data. It enables the server to handle JSON payloads sent by clients and transforms them into JavaScript objects, making it easier to work with the data within the application.

By including app.use(express.json()) in the application setup, you ensure that the middleware is applied to all routes, allowing the server to automatically parse JSON data in the request body.

4. What does the /:id mean in a route?
In the context of a route definition in Express.js, /:id represents a route parameter. The colon (:) indicates that it's a variable segment in the URL, and id is the name of the parameter.

For example, if you have a route defined as /users/:id, it means that the route expects a URL like /users/123, where 123 can be any value, and it will be captured and accessible within the route handler as req.params.id. This allows you to dynamically handle requests for specific resources based on their identifiers, such as retrieving a user with a specific ID from a database.

5. What is the difference between PUT and PATCH?
Both PUT and PATCH are HTTP methods used for updating resources in a RESTful API. However, they differ in their semantics and how they handle updates:

PUT: The PUT method is used to completely replace an existing resource with a new representation. When sending a PUT request, the entire resource is typically included in the request payload, and the server replaces the existing resource with the provided data. If a resource with the same identifier already exists, it is overwritten. PUT is considered an idempotent operation, meaning that sending the same request multiple times should have the same effect as sending it once.

PATCH: The PATCH method is used to partially update an existing resource. Unlike PUT, which replaces the entire resource, PATCH allows you to send only the changes or updates that need to be applied. The server then applies the provided changes to the resource, modifying only the specified fields or properties. PATCH requests are not necessarily idempotent, as multiple identical requests may have different effects depending on the initial state of the resource.

6. How do you make a default value in a schema?

The default property

7. What does a 500 error status code mean?

Something is wrong with the internal server. 
8. What is the difference between a status 200 and a status 201?

200 means successful request, 201 means successful creation.

### Things i want to know 
