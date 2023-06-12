# More CRUD

## [CRUD Basics](https://medium.com/geekculture/crud-operations-explained-2a44096e9c88)


* HTTP status codes are part of the HTTP response and provide information about the status of a request.

* Status codes are divided into classes based on their first digit: informational (100-199), success (200-299), redirection (300-399), client error (400-499), and server error (500-599).

* Custom status codes above 599 are not permitted but may be encountered in practice.

* The CRUD model (Create, Read, Update, Delete) is commonly used in API design for persistent storage operations.

* For the Create operation, common status codes are 200 OK, 201 Created, 202 Accepted, and 303 See Other.

* For the Read operation, common status codes are 200 OK, 206 Partial Content, 300 Multiple Choices, 308 Permanent Redirect, and 304 Not Modified.

* For the Update operation, common status codes are 200 OK, 204 No Content, and 202 Accepted.

* For the Delete operation, common status codes are 200 OK, 204 No Content, and 202 Accepted.

* API changes can be handled using status codes such as 307 Temporary Redirect and 308 Permanent Redirect.

* Multiple endpoints for one resource can be managed using 308 Permanent Redirect.

* Error handling can utilize status codes such as 500 Internal Server Error, 404 Not Found, 405 Method Not Allowed, 501 Not Implemented, 406 Not Acceptable, 410 Gone, 414 Request-URI Too Long, 308 Permanent Redirect, and 307 Temporary Redirect.

* Status codes like 401 Unauthorized and 403 Forbidden can be used for indicating permission issues.

* Consistency in the usage of status codes across the entire API surface is important for clarity and developer experience.

1. Which HTTP method would you use to update a record through an API?
The HTTP method you would use to update a record through an API is PUT or PATCH as per the CRUD (Create, Read, Update, Delete) operations.

PUT: This method is used when you want to update the entire resource with the new data. It's a complete replacement of the resource.

PATCH: This method is used when you want to apply a partial update to the resource, like changing just one field.


2. Which REST methods require an ID parameter?
GET: When used to retrieve a specific resource, as opposed to a collection of resources.

PUT or PATCH: When updating a specific resource. These methods need to know which specific resource to update.

DELETE: When deleting a specific resource. The API needs to know which specific resource to remove.

&nbsp;

&nbsp;

## [Speed Coding: Building a CRUD API](https://www.youtube.com/watch?v=EzNcBhSv1Wo)

1. What’s the relationship between REST and CRUD?

RESTful APIs align with the CRUD concept by utilizing HTTP methods to perform CRUD operations on resources. Each CRUD operation (Create, Read, Update, Delete) corresponds to a specific HTTP method (POST, GET, PUT/PATCH, DELETE). REST emphasizes a resource-oriented design approach, where resources are identified by URLs and CRUD operations are applied to these resources using the appropriate HTTP methods. This relationship between REST and CRUD allows developers to design APIs that follow REST principles while providing CRUD functionality for data manipulation.

2. If you had to describe the process of creating a RESTful API in 5 steps, what would they be?

The process of creating a RESTful API in 5 steps:

Identify Resources: Determine the resources (data entities) that your API will expose. These could be objects, concepts, or entities that your application manages.

Design URLs: Define a URL structure that represents your resources and their relationships. Use meaningful and hierarchical URLs to reflect the resource hierarchy and provide a consistent and intuitive API endpoint structure.

Choose HTTP Methods: Assign the appropriate HTTP methods (GET, POST, PUT, DELETE) to the URL endpoints based on the desired CRUD operations for each resource. Ensure that the chosen methods align with the semantics of each operation.

Define Data Formats: Determine the data format (such as JSON or XML) that your API will use for request and response payloads. Define the structure and schema of the data to ensure consistency and interoperability.

Implement API Handlers: Develop the server-side logic to handle incoming requests and perform the corresponding CRUD operations on the resources. Validate inputs, interact with the database or storage system, and generate appropriate responses for successful and error scenarios.


## Things I Want to Know 