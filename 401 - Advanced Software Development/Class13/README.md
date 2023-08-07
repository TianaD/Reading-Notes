# Readings: Dependency Injection & Repository Design Pattern

## [Dependency Injection](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-7.0)

- Dependency injection (DI) is a technique that allows an application to resolve its dependencies at runtime, rather than at compile time.
- DI benefits
    - DI enables loose coupling and better testability of the application components.
    - DI allows the application to use different implementations of the same service, depending on the environment or configuration.
    - DI supports the inversion of control (IoC) principle, which states that a class should not create its own dependencies, but rather receive them from an external source.
- DI in ASP.NET Core
    - ASP.NET Core provides a built-in DI framework that is compatible with the .NET Generic Host.
    - The DI framework consists of three main concepts: services, containers, and clients.
        - A service is a class or interface that provides some functionality to the application. A service can have dependencies on other services.
        - A container is an object that creates and manages the lifetime of services. A container can also resolve dependencies between services.
        - A client is a class that consumes services from the container. A client can request services from the container using constructor injection, property injection, or method injection.
    - The DI framework supports different kinds of service lifetimes: singleton, scoped, and transient.
        - A singleton service is created once and reused throughout the application. It is suitable for stateless or thread-safe services.
        - A scoped service is created once per request. It is suitable for services that need to access request-specific data or resources.
        - A transient service is created every time it is requested. It is suitable for lightweight and stateless services.
- Registering services
    - To use DI in ASP.NET Core, services must be registered with the container in the Startup.ConfigureServices method.
    - Services can be registered using extension methods on the IServiceCollection interface, such as AddSingleton, AddScoped, and AddTransient.
    - Services can also be registered using factory methods or delegates, which allow more control over how the service instances are created.
    - Services can also be registered using conventions or attributes, which allow automatic discovery and registration of services based on certain criteria.

## [Repository Pattern](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design?view=aspnetcore-2.1#the-repository-pattern)

- The repository pattern is a design pattern that abstracts the data access logic from the business logic, and provides a simple interface for querying and manipulating data.
- The repository pattern benefits
    - The repository pattern decouples the business logic from the data access layer, which makes the code more maintainable, testable, and reusable.
    - The repository pattern hides the implementation details of the data access layer, such as the database technology, query language, or object-relational mapping (ORM) framework.
    - The repository pattern allows the business logic to work with domain entities or aggregates, rather than data transfer objects (DTOs) or view models.
    - The repository pattern can implement caching, logging, performance monitoring, or other cross-cutting concerns in a centralized way.
- The repository pattern implementation
    - The repository pattern consists of two main components: the repository interface and the repository implementation.
    - The repository interface defines the methods for querying and manipulating data, such as GetById, GetAll, Add, Update, Delete, etc. The interface should be generic and use domain entities or aggregates as parameters and return types.
    - The repository implementation provides the concrete logic for accessing the data source, such as a relational database, a document database, or an in-memory collection. The implementation should use an ORM framework or a micro-ORM tool to simplify the data access code.
    - The repository implementation should follow the principle of least astonishment (POLA), which means that it should behave in a way that is consistent and predictable for the consumers. For example, it should not return null values, throw exceptions, or modify the state of the entities without explicit request.

## [Repository Design Pattern](https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30)

- The article explains the repository design pattern, which is a way of separating the data access logic from the business logic in an application.
- The repository design pattern benefits
    - The repository design pattern makes the code more readable, maintainable, and testable by following the single responsibility principle (SRP), which states that each class should have only one reason to change.
    - The repository design pattern decouples the business logic from the data access layer, which allows the application to use different data sources or technologies without affecting the core functionality.
    - The repository design pattern follows the dependency inversion principle (DIP), which states that high-level modules should not depend on low-level modules, but both should depend on abstractions. This reduces the coupling and increases the cohesion of the code.
- The repository design pattern implementation
    - The repository design pattern consists of two main components: the repository interface and the repository implementation.
    - The repository interface defines the methods for querying and manipulating data, such as GetById, GetAll, Add, Update, Delete, etc. The interface should be generic and use domain entities as parameters and return types.
    - The repository implementation provides the concrete logic for accessing the data source, such as a database, a web service, or a file system. The implementation should use an object-relational mapping (ORM) framework or a micro-ORM tool to simplify the data access code.
    - The repository implementation should be injected into the business logic layer using dependency injection (DI), which is a technique that allows an application to resolve its dependencies at runtime, rather than at compile time.

## [SOLID Principles](https://www.telerik.com/blogs/30-days-of-tdd-day-five-make-your-code-solid)

- The article introduces the SOLID principles, which are a set of guidelines for writing clean and maintainable code.
- The SOLID principles are:
    - Single Responsibility Principle (SRP): A class should have only one reason to change, and only one responsibility.
    - Open/Closed Principle (OCP): A class should be open for extension, but closed for modification.
    - Liskov Substitution Principle (LSP): A subclass should be able to replace its superclass without breaking the functionality of the program.
    - Interface Segregation Principle (ISP): A class should not depend on methods that it does not use, and interfaces should be small and focused.
    - Dependency Inversion Principle (DIP): A class should depend on abstractions, not concretions, and high-level modules should not depend on low-level modules.
- The article explains each principle with examples and code snippets, and shows how applying the SOLID principles can improve the quality and maintainability of the code.
- The article also provides some tips and resources for learning more about the SOLID principles.

## [Why SOLID Matters](https://www.telerik.com/blogs/why-solid-matters)

### What is SOLID?

- SOLID is an acronym for five design principles that help create maintainable and testable code.
- The principles are:
    - Single Responsibility Principle: A class should have one, and only one, reason to change.
    - Open Closed Principle: A module should be open for extension but closed for modification.
    - Liskov Substitution Principle: Subclasses should be substitutable for their base classes.
    - Interface Segregation Principle: Many client specific interfaces are better than one general purpose interface.
    - Dependency Inversion Principle: Depend upon abstractions. Do not depend on concretions.

### Why is SOLID important?

- SOLID helps to avoid code smells, such as:
    - Rigidity: Code that is hard to change because of ripple effects.
    - Fragility: Code that breaks in many places when a single change is made.
    - Immobility: Code that is hard to reuse because of too many dependencies.
    - Viscosity: Code that is easier to do in a hacky way than in a clean way.
    - Needless Complexity: Code that has unnecessary design elements or patterns.
    - Indecent Exposure: Code that exposes too much internal information or behavior.
- SOLID also helps to achieve code quality attributes, such as:
    - Cohesion: Code that has a clear and focused purpose.
    - Coupling: Code that has minimal and loose dependencies with other code.
    - Abstraction: Code that hides implementation details and exposes only essential features.
    - Encapsulation: Code that protects its internal state and behavior from external manipulation.
    - Polymorphism: Code that can behave differently depending on the context or input.
    - Testability: Code that can be easily verified for correctness and functionality.

### How to apply SOLID?

- SOLID can be applied by following some best practices, such as:
    - Use meaningful names for classes, methods, variables, etc.
    - Keep classes and methods small and focused on a single responsibility.
    - Favor composition over inheritance and use interfaces to define contracts.
    - Follow the principle of least knowledge and only communicate with related objects.
    - Use dependency injection or factories to create objects and avoid hard-coded dependencies.
    - Write unit tests and refactor code as needed to improve readability and maintainability.

### Where to learn more about SOLID?

- You can learn more about SOLID by reading the original articles by Robert C. Martin¹ or his book "Clean Code"².
- You can also watch some videos or podcasts that explain SOLID in more detail, such as:
    - [SOLID Principles of Object Oriented Design](^3^) by Pluralsight
    - [SOLID Principles for C# Developers] by Kudvenkat
    - [SOLID Design Principles Explained] by Derek Banas
- You can also practice applying SOLID by doing some coding exercises or challenges, such as:
    - [SOLID Principles for C# Developers] by DotNetTricks
    - [SOLID Principles in C#] by Exercism
    - [SOLID Principles in C#] by Codewars

## [SOLID Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

Here are some notes I created from the link you provided:

## The S.O.L.I.D Principles in Pictures

### What are the S.O.L.I.D principles?

- The S.O.L.I.D principles are a set of guidelines for writing clean and maintainable code in object-oriented programming.
- The acronym stands for:
    - Single Responsibility Principle: A class should have only one reason to change.
    - Open/Closed Principle: A class should be open for extension but closed for modification.
    - Liskov Substitution Principle: A subclass should be able to replace its superclass without breaking the program.
    - Interface Segregation Principle: A class should not be forced to depend on methods it does not use.
    - Dependency Inversion Principle: A class should depend on abstractions rather than concretions.

### How to understand the S.O.L.I.D principles with pictures?

- The article uses simple and humorous illustrations to explain each principle with examples and counter-examples.
- For instance, the Single Responsibility Principle is illustrated by a car that has too many features and responsibilities, making it hard to maintain and modify. A better design would be to separate the features into different classes, such as Engine, Radio, GPS, etc.
- The Open/Closed Principle is illustrated by a pizza that can be customized with different toppings without changing the base recipe. A bad design would be to have a fixed pizza that cannot be modified or extended.
- The Liskov Substitution Principle is illustrated by a duck that can be replaced by a rubber duck without affecting the behavior of the program. A violation of this principle would be to replace the duck with a chicken, which cannot swim or quack like a duck.
- The Interface Segregation Principle is illustrated by a superhero that has too many powers and responsibilities, making it hard to use and test. A better design would be to split the powers into different interfaces, such as Flyable, Invisible, Fireable, etc.
- The Dependency Inversion Principle is illustrated by a lamp that depends on a specific type of plug rather than an abstract interface. A better design would be to have the lamp depend on an interface that can be implemented by different types of plugs, such as USPlug, EUPlug, UKPlug, etc.

### Where to find the article and the pictures?

- You can find the article and the pictures at this link.
- You can also download the pictures as PDF files from this link.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About





