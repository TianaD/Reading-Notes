

## [Azure Dev Ops](https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops)


## [MVC Basics](https://www.c-sharpcorner.com/article/learn-basics-of-mvc-architecture/)

# Learn Basics of MVC Architecture

- MVC stands for Model-View-Controller, a design pattern or architecture for developing web applications.
- MVC was originally developed for desktop applications in 1970s, but later adopted for web applications as well.
- MVC helps in developing web applications in a more efficient way than the traditional ASP.NET Web Application Framework, which follows a view-based architecture.
- MVC separates the application into three layers: Model, View, and Controller, each with a different responsibility and concern.
- Model layer represents the data and behavior of the application, independent of the UI. It contains classes that define the objects, properties, methods, and rules of the application domain.
- View layer displays the UI of the application, based on the data from the model layer. It contains HTML markup and presentation logic.
- Controller layer handles the user requests and actions, and interacts with the model and view layers. It contains classes that define the logic and flow of the application.
- MVC makes the application more maintainable, testable, and scalable, by decoupling the UI and the business logic.
- MVC also uses a Router component, which matches the requested URL to the appropriate controller and action method.
- MVC is widely used and supported by many frameworks and languages, such as ASP.NET MVC, Ruby on Rails, Django, Laravel, etc.

## [Tag Helpers](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-2.1)

### Introduction to Tag Helpers in ASP.NET Core

- Tag Helpers are a feature of ASP.NET Core that enable server-side code to participate in creating and rendering HTML elements in Razor files.
- Tag Helpers look like standard HTML tags and attributes, but they have a special prefix (`@`) or a special attribute (`asp-`) to indicate that they are processed by the server.
- Tag Helpers can enhance the HTML elements by adding new attributes, modifying existing attributes, wrapping the element content, or generating new content.
- Tag Helpers are implemented as C# classes that derive from the `TagHelper` base class or implement the `ITagHelper` interface.
- Tag Helpers are registered in the `_ViewImports.cshtml` file using the `@addTagHelper` directive, which specifies the assembly and namespace of the Tag Helpers.
- Tag Helpers can be scoped to specific views or folders by using the `@removeTagHelper` directive, which removes the specified Tag Helpers from the current scope.
- Tag Helpers can be self-closing, meaning that they do not have a closing tag, such as `<input />`.
- Tag Helpers can have required attributes, optional attributes, or catch-all attributes, which are defined by using the `[HtmlAttributeName]` attribute on the Tag Helper properties.
- Tag Helpers can have associated HTML elements, which are defined by using the `[HtmlTargetElement]` attribute on the Tag Helper class.
- Tag Helpers can have order precedence, which determines the order in which they are executed when multiple Tag Helpers target the same element, by using the `[HtmlTargetElement]` attribute with the `Order` property.
- Tag Helpers can have dependencies on other Tag Helpers, which means that they require another Tag Helper to run before them, by using the `[HtmlTargetElement]` attribute with the `TagStructure` property.
- Tag Helpers can be nested, meaning that they can target an element that is inside another Tag Helper, by using the `[RestrictChildren]` attribute on the parent Tag Helper class.
- Tag Helpers can be customized, meaning that they can have different behaviors or appearances based on the application settings or user preferences, by using the `[HtmlAttributeNotBound]` attribute on the Tag Helper properties that are not bound to HTML attributes.
- Tag Helpers can be unit tested, meaning that they can be verified for correctness and functionality by using a testing framework such as xUnit or MSTest.
- Tag Helpers can be created by developers, meaning that they can extend the existing Tag Helpers or create new ones to suit their needs and preferences.
- Tag Helpers can be distributed as NuGet packages, meaning that they can be shared and reused by other developers or applications.

For more information and examples of Tag Helpers, you can check out the following resources:

- [Tag Helpers in ASP.NET Core](^1^), which provides an overview of Tag Helpers and their benefits.
- [ASP.NET Core built-in Tag Helpers](^3^), which lists and explains the Tag Helpers that are included in the ASP.NET Core framework.
- [Author Tag Helpers in ASP.NET Core](^4^), which teaches how to create custom Tag Helpers and use advanced features.
- [How to Pass View Data to Partial View in Asp.net core?](^5^), which shows how to use the `Partial` Tag Helper to render a partial view with view data.

[Bootstrap](https://getbootstrap.com/)

[1 Hour tutorial Bootstrap](https://scrimba.com/learn/bootstrap4)








