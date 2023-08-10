# Readings: Testing and Swagger and Deployment

## [Swagger](https://learn.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?tabs=visual-studio&view=aspnetcore-2.1)

## ASP.NET Core web API documentation with Swagger / OpenAPI

### What is Swagger / OpenAPI?

- Swagger (OpenAPI) is a language-agnostic specification for describing REST APIs.
- It allows both computers and humans to understand the capabilities of a REST API without direct access to the source code.
- Its main goals are to:
  - Minimize the amount of work needed to connect decoupled services.
  - Reduce the cost of developing and maintaining APIs.
  - Enable interactive documentation, code generation, and automated testing.

### How to add Swagger / OpenAPI support to ASP.NET Core web API?

- The tutorial uses the [Swashbuckle.AspNetCore](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) NuGet package to integrate Swagger / OpenAPI with ASP.NET Core web API.
- The steps are as follows:
  - Install the Swashbuckle.AspNetCore package using the Package Manager Console or the Manage NuGet Packages dialog.
  - In the Startup class, add the following code to the ConfigureServices method:

    ```csharp
    // Register the Swagger generator, defining one or more Swagger documents
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    });
    ```

  - In the Startup class, add the following code to the Configure method, before the call to UseMvc:

    ```csharp
    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
    // specifying the Swagger JSON endpoint.
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    });
    ```

  - Run the project and navigate to `http://localhost:<port>/swagger` to see the Swagger UI.

### How to customize and annotate the Swagger / OpenAPI document?

- The tutorial shows how to use various options and attributes to modify the generated Swagger / OpenAPI document.
- Some examples are:
  - Use `SwaggerDoc` options to set the document title, version, description, contact, license, etc.
  - Use `XmlComments` options to include XML comments from the action methods and model classes
  - Use `ProducesResponseType` attribute to specify the HTTP status codes and response types of an action method
  - Use `Required` attribute to mark a property as required in a model class
  - Use `SwaggerOperation` attribute to set a unique operation ID for an action method
  - Use `SwaggerResponse` attribute to provide additional information about a response type

### How to test web API actions using Swagger UI?

- The tutorial shows how to use the interactive features of Swagger UI to test web API actions.
- Some examples are:
  - Use **Try it out** button to send an HTTP request and examine the response
  - Use **Authorize** button to provide authentication information (such as API key or OAuth token) for secured actions
  - Use **Models** section to view the schema of request and response types

## [Unit Testing](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/unit-testing/creating-unit-tests-for-asp-net-mvc-applications-cs)

## Creating Unit Tests for ASP.NET MVC Applications (C#)

### What is unit testing?

- Unit testing is a software development practice that involves writing and running small pieces of code to verify the behavior and functionality of individual units of a larger system.
- A unit can be a method, a class, a component, or any other logical entity that can be tested independently.
- Unit testing has many benefits, such as:
  - Improving the quality and reliability of the code.
  - Detecting and preventing bugs early in the development cycle.
  - Facilitating code refactoring and maintenance.
  - Enhancing code readability and documentation.
  - Supporting agile development methodologies.

### How to create unit tests for ASP.NET MVC applications?

- The tutorial uses the [Microsoft.VisualStudio.TestTools.UnitTesting](https://docs.microsoft.com/en-us/dotnet/api/microsoft.visualstudio.testtools.unittesting?view=mstest-net-1.3.2) namespace to create and run unit tests for ASP.NET MVC applications.
- The steps are as follows:
  - Create a new ASP.NET MVC project in Visual Studio.
  - Add a new Test Project to the solution.
  - Add a reference to the ASP.NET MVC project in the Test Project.
  - Write test methods using the [TestMethod] attribute and the Assert class.
  - Run the tests using the Test Explorer window or the Test menu.

### How to test different aspects of ASP.NET MVC controller actions?

- The tutorial shows how to test three different aspects of ASP.NET MVC controller actions: the view, the view data, and the action result.
- Some examples are:
  - Use the ViewResult.ViewName property to check whether a controller action returns a specific view.
  - Use the ViewResult.ViewData property to check whether a controller action returns a specific set of data.
  - Use the RedirectToRouteResult.RouteValues property to check whether a controller action redirects to another action.

## [Testing Controllers](https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/testing?view=aspnetcore-2.1)

## Test controller logic in ASP.NET Core

### What is controller logic?

- Controller logic is the code that handles incoming requests and produces responses in an ASP.NET Core MVC application.
- Controller logic typically involves:
  - Reading data from the request (such as route values, query strings, headers, forms, etc.).
  - Performing business logic or calling other services.
  - Creating and returning an action result (such as views, files, redirects, etc.).

### Why test controller logic?

- Testing controller logic can help ensure the quality and reliability of the application.
- Testing controller logic can help detect and prevent bugs and errors before they affect the end users.
- Testing controller logic can help facilitate code refactoring and maintenance.
- Testing controller logic can help document the expected behavior and functionality of the application.

### How to test controller logic in ASP.NET Core?

- The tutorial uses the [Microsoft.AspNetCore.Mvc.Testing](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.Testing) NuGet package to test controller logic in ASP.NET Core.
- The steps are as follows:
  - Create a test project and add a reference to the Microsoft.AspNetCore.Mvc.Testing package.
  - Add a reference to the web project that contains the controller logic to be tested.
  - Create a custom WebApplicationFactory<TStartup> class that configures the test web host and app.
  - Create a test class that inherits from IClassFixture<TFixture> and uses the custom WebApplicationFactory<TStartup> class as the fixture.
  - Write test methods that use HttpClient to send requests and assert responses.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About