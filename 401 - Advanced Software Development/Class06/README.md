# Readings: Object Oriented Principles

## [Inheritance](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance)

- The article explains the concept of **inheritance**, which is one of the three primary characteristics of object-oriented programming.
- Inheritance enables you to create new classes that reuse, extend, and modify the behavior defined in other classes.
- The class whose members are inherited is called the **base class**, and the class that inherits those members is called the **derived class**.
- A derived class can have only one direct base class, but it can inherit from multiple base classes through **transitivity**.
- Inheritance is useful for creating **specializations** of existing classes, such as different types of bank accounts or animals.
- To define a derived class, you use the **colon syntax** after the class name, followed by the name of the base class. For example: `public class InterestEarningAccount : BankAccount`
- A derived class inherits all the members of the base class, except for its constructors and finalizers. It can also add new members or override existing ones.
- To override a member of the base class, you use the **override keyword** in the derived class. The member must be marked as **virtual** in the base class. For example: `public override string ToString()`
- You can also use **abstract** and **sealed** modifiers to control how inheritance works for your classes. An abstract class cannot be instantiated, but it can provide common functionality for its derived classes. A sealed class cannot be inherited by any other class.
- You can also use **interfaces** to define contracts that classes can implement. Interfaces can have default implementations for their members, which are inherited by the classes that implement them.

## [Abstract](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/abstract-and-sealed-classes-and-class-members)

- The article explains how to use the **abstract** and **sealed** modifiers to control the inheritance behavior of classes and class members in C#.
- An **abstract class** is a class that cannot be instantiated, but can contain some implementation code and define abstract methods that must be implemented by its derived classes.
- An **abstract method** is a method that has no implementation in the base class, but provides a signature that derived classes must override. It is declared with the **abstract keyword** and does not have a body. For example: `public abstract void Draw();`
- A class that inherits from an abstract class must implement all abstract methods of the base class, unless it is also an abstract class. If a derived class does not implement all abstract methods, it will cause a compile-time error.
- An **abstract class** can also contain **virtual methods**, which have a default implementation in the base class, but can be overridden by derived classes. For example: `public virtual void Move();`
- A **sealed class** is a class that cannot be inherited by any other class. It is declared with the **sealed keyword** and prevents other classes from extending its functionality. For example: `public sealed class Rectangle : Shape`
- A **sealed method** is a method that cannot be overridden by any derived class. It is declared with the **sealed keyword** and prevents other methods from changing its behavior. For example: `public sealed override void Draw();`
- The **sealed modifier** can only be applied to methods that override a virtual or abstract method in a base class. It cannot be applied to methods that are not inherited or that are declared as static, virtual, or abstract.
- The article also provides some examples of using abstract and sealed classes and methods in different scenarios, such as shapes, animals, and bank accounts.

## [Polymorphism](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism)

- The article explains the concept of **polymorphism**, which is one of the three primary characteristics of object-oriented programming.
- Polymorphism means "many forms" and it occurs when classes have different functionalities while sharing a common interface.
- Polymorphism enables you to invoke derived class methods through a base class reference during run-time.
- In C#, polymorphism is implemented by using **abstract classes**, **virtual methods**, and **override methods**. You can also use **interfaces** to achieve polymorphism.
- An **abstract class** is a class that cannot be instantiated, but can provide some implementation code and define abstract methods that must be implemented by its derived classes.
- A **virtual method** is a method that has a default implementation in the base class, but can be overridden by derived classes. It is declared with the **virtual keyword** and can have a body. For example: `public virtual void Draw();`
- An **override method** is a method that provides a new implementation of a virtual or abstract method in the base class. It is declared with the **override keyword** and must have the same signature as the base method. For example: `public override void Draw();`
- An **interface** is a contract that defines the signatures of methods, properties, events, and indexers that classes can implement. It does not provide any implementation code, but it can have default implementations for its members, which are inherited by the classes that implement them.
- The article also provides some examples of using polymorphism in different scenarios, such as shapes, animals, and bank accounts.

## [OOP Principles](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop)

- The link is about object-oriented programming (OOP) in C#, which is a programming paradigm that organizes code by creating types in the form of classes.
- Classes are abstractions that model the relevant attributes and interactions of entities as properties and methods.
- OOP has four basic principles: abstraction, encapsulation, inheritance, and polymorphism.
- Abstraction is the process of hiding the irrelevant details and focusing on the essential features of a system.
- Encapsulation is the technique of hiding the internal state and functionality of an object and only allowing access through a public set of functions.
- Inheritance is the ability to create new classes based on existing classes, reusing and extending their behavior.
- Polymorphism is the ability to implement inherited properties or methods in different ways across multiple classes.
- The link provides an example of creating different types of bank accounts that inherit from a base class called BankAccount.
- The derived classes can override the base class methods or properties to provide specific behavior for each type of account.
- The link also shows how to use virtual and abstract keywords to enable polymorphism in C#.
- The link explains how to use the base keyword to access the base class members from the derived class.
- The link demonstrates how to use constructors and initializers to set up the initial state of an object.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About
