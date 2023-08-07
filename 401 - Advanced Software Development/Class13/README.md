# Readings: Dependency Injection & Repository Design Pattern

## [Routing within MVC](https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/controllers-and-routing/asp-net-mvc-routing-overview-cs)

- ASP.NET Routing is a feature of the ASP.NET MVC framework that maps incoming browser requests to controller actions based on URL patterns.
- The default route table in an ASP.NET MVC application maps URLs with the pattern "{controller}/{action}/{id}" to controller actions with the same name.
- You can customize the route table by adding or modifying routes using the MapRoute method of the RouteCollection class.
- Routes can have optional parameters, constraints, and default values to handle different types of requests.
- You can use route attributes to define routes directly on controller actions or controllers instead of using the global route table.
- You can also use route areas to organize routes into separate namespaces and folders for better maintainability.
- ASP.NET Routing supports different types of constraints, such as regular expressions, data types, and custom classes, to validate parameter values and prevent ambiguous matches.
- You can use URL generation helpers, such as ActionLink and RouteLink, to generate URLs based on route names and parameters.
- You can use URL rewriting techniques, such as URL rewriting module or custom HTTP modules, to modify incoming or outgoing URLs for SEO or other purposes.

## [Routing within Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-3.1)

- Routing is the process of matching incoming HTTP requests to endpoints, which are units of executable code that handle requests and produce responses.
- Routing basics
    - ASP.NET Core uses a middleware called UseRouting to enable routing.
    - UseRouting must be called before any endpoint-aware middleware, such as UseAuthentication, UseAuthorization, and UseEndpoints.
    - UseEndpoints is another middleware that adds endpoints to the request pipeline. It must be called after UseRouting and any endpoint-aware middleware.
    - UseEndpoints can specify different kinds of endpoints, such as:
        - MapGet, MapPost, MapPut, MapDelete, and MapVerb for HTTP methods.
        - MapControllerRoute and MapAreaControllerRoute for MVC controllers.
        - MapRazorPages for Razor Pages.
        - MapFallback and MapFallbackToFile for fallback endpoints.
        - MapBlazorHub and MapHub for SignalR hubs.
        - MapGrpcService for gRPC services.
- Routing concepts
    - An endpoint consists of a delegate that runs when the endpoint is matched, and a collection of metadata that describes how the endpoint is matched, such as route template, HTTP methods, and authorization policies.
    - A route template is a pattern that can contain literal segments and parameter segments, such as /blog/{category}/{id}.
    - Route templates can also have constraints that restrict the values of parameters, such as {id:int} for integer values only.
    - Route templates can also have default values and optional parameters, such as {controller=Home}/{action=Index}/{id?}.
    - Routing uses the concept of precedence to determine which endpoint to match when multiple endpoints match a request. Precedence is based on factors such as order of registration, number of literals, and number of parameters.
- Routing with special characters
    - Routing encodes some special characters in route templates, such as space, dot, slash, and plus. To use these characters literally, they must be escaped with a backslash in the route template.
    - Routing also supports Unicode characters in route templates, but they must be encoded using Punycode in the URL.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About