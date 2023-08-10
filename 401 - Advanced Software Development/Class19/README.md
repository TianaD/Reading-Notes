# Readings: Roles, Claims and JWT Tokens

## [Claims-Based auth in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/security/authorization/claims?view=aspnetcore-7.0&viewFallbackFrom=aspnetcore-2.1)

This article explains how to use claims, which are name-value pairs that represent what a user is, to authorize access to resources in ASP.NET Core web apps. Claims are issued by a trusted identity provider or ASP.NET Core identity.

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

### How to use claims-based authorization in ASP.NET Core

Claims-based authorization in ASP.NET Core is based on policies, which are expressions of requirements that a user must meet to access a resource. Policies are registered as part of the Authorization service configuration, typically in the Program.cs file.

A policy can check for the presence or value of one or more claims on the current user's identity. For example, you can create a policy that requires a user to have an EmployeeNumber claim:

```csharp
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("EmployeeOnly", policy => policy.RequireClaim("EmployeeNumber"));
});
```

You can then apply the policy using the [Authorize] attribute on your controllers, actions, or Razor Pages:

```csharp
[Authorize(Policy = "EmployeeOnly")]
public IActionResult VacationBalance()
{
    return View();
}
```

You can also create more complex policies that use custom requirements and handlers. For example, you can create a policy that requires a user to have a minimum age claim:

```csharp
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AtLeast21", policy =>
        policy.Requirements.Add(new MinimumAgeRequirement(21)));
});
```

You then need to implement a handler that evaluates the user's claim against the requirement:

```csharp
public class MinimumAgeHandler : AuthorizationHandler<MinimumAgeRequirement>
{
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context,
                                                   MinimumAgeRequirement requirement)
    {
        if (!context.User.HasClaim(c => c.Type == ClaimTypes.DateOfBirth))
        {
            return Task.CompletedTask;
        }

        var dateOfBirth = Convert.ToDateTime(
            context.User.FindFirst(c => c.Type == ClaimTypes.DateOfBirth).Value);

        int calculatedAge = DateTime.Today.Year - dateOfBirth.Year;
        if (dateOfBirth > DateTime.Today.AddYears(-calculatedAge))
        {
            calculatedAge--;
        }

        if (calculatedAge >= requirement.MinimumAge)
        {
            context.Succeed(requirement);
        }

        return Task.CompletedTask;
    }
}
```

You also need to register the handler as a service:

```csharp
builder.Services.AddSingleton<IAuthorizationHandler, MinimumAgeHandler>();
```

You can then apply the policy as before:

```csharp
[Authorize(Policy = "AtLeast21")]
public IActionResult AlcoholPurchase()
{
    return View();
}
```

### References

¹: https://bookservice2.azurewebsites.net/
²: https://code.msdn.microsoft.com/Using-Web-API-2-with-c1dc0a0e

## [Intro to Claims](https://andrewlock.net/introduction-to-authentication-with-asp-net-core/)

## Introduction to Authentication with ASP.NET Core

### What is authentication?

- Authentication is the process of verifying the identity of a user or system.
- Authentication can be done in various ways, such as using passwords, tokens, certificates, biometrics, etc.
- Authentication is distinct from authorization, which is the process of determining what a user or system can do after being authenticated.

### What is claims-based authentication?

- Claims-based authentication is a way of authenticating users based on a set of claims or attributes about them.
- A claim is a name-value pair that represents something about the user, such as their name, role, email, etc.
- A user can have multiple claims from different sources, such as identity providers, databases, or custom logic.
- Claims are stored in a security token, which is a digitally signed piece of data that contains the claims and other information about the user.
- A security token can be issued by a trusted authority, such as an identity provider or a token service.
- A security token can be validated by the recipient, such as an application or a service, using the digital signature and other metadata.

### How does claims-based authentication work in ASP.NET Core?

- ASP.NET Core uses the concept of middleware to handle various aspects of the request pipeline, such as routing, logging, caching, etc.
- ASP.NET Core also provides middleware for authentication and authorization, which can be configured and customized to suit different scenarios and requirements.
- The authentication middleware is responsible for:
    - Extracting the security token from the request, such as from a cookie, a header, a query string, etc.
    - Validating the security token and creating a ClaimsPrincipal object that represents the user.
    - Attaching the ClaimsPrincipal object to the HttpContext.User property, which can be accessed by other components in the pipeline.
- The authorization middleware is responsible for:
    - Checking if the user is authenticated by looking at the HttpContext.User property.
    - Checking if the user has the required permissions to access the resource by looking at the claims and other criteria.
    - Allowing or denying access to the resource based on the authorization result.

### What are some common authentication scenarios in ASP.NET Core?

- ASP.NET Core supports various authentication scenarios out of the box, such as:
    - Cookie authentication: The security token is stored in a cookie that is sent with each request. The cookie authentication middleware validates the cookie and creates the ClaimsPrincipal object. This is suitable for web applications that have their own user store and login logic.
    - JWT (JSON Web Token) authentication: The security token is a JSON object that contains the claims and other information. The JWT authentication middleware validates the JWT and creates the ClaimsPrincipal object. This is suitable for web APIs that need to support stateless and cross-domain requests from various clients.
    - OAuth 2.0 and OpenID Connect: The security token is obtained from an external identity provider or token service using a standard protocol. The OAuth 2.0 and OpenID Connect middleware validates the token and creates the ClaimsPrincipal object. This is suitable for web applications and web APIs that need to support social login or single sign-on (SSO) scenarios.

### How can I learn more about authentication in ASP.NET Core?

- You can read more about authentication in ASP.NET Core on [the official documentation](^1^).
- You can also check out some of [the blog posts](^2^) by Andrew Lock, who is an expert on ASP.NET Core security.

## [JWT Authentication](https://codeburst.io/jwt-to-authenticate-servers-apis-c6e179aa8c4e)

## JWT to authenticate Servers API’s

### What is JWT?

- JWT stands for JSON Web Token, which is a way of representing claims to be transferred between two parties.
- The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption (JWE).
- JWT can be used as an access token for authentication from the server.

### How to authenticate servers API’s using JWT?

- The author uses the producer-consumer concept to explain how JWT can be used for server-to-server authentication.
- The producer is the server that issues the JWT to the consumer, which is another server that wants to access the producer's API.
- The producer and the consumer share a secret key, which is used to sign and verify the JWT.
- The producer creates a JWT with the following parts:
    - Header: contains the algorithm (HS256 or RS256) and the type (JWT) of the token.
    - Payload: contains the claims or custom data about the consumer, such as email, name, amount, etc.
    - Signature: contains the encrypted header and payload using the secret key and the algorithm.
- The producer sends the JWT to the consumer as a response to a request for a token.
- The consumer stores the JWT and uses it as an authorization header when making requests to the producer's API.
- The producer validates the JWT by checking the signature, the expiration time, and other criteria.
- The producer grants or denies access to the API based on the validation result.

### What are some benefits of using JWT for server-to-server authentication?

- JWT is stateless, which means it does not require any session or database storage on the server side.
- JWT is self-contained, which means it contains all the information needed to authenticate and authorize the consumer.
- JWT is fast and scalable, which means it can handle high-volume and cross-domain requests efficiently.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About