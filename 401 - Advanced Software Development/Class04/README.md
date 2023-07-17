
# Readings: Classes & Memory Management

## [Constructors (C# programming guide)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)

    - Classes are the most common type of user-defined type in C#.
    - A class is a blueprint for creating objects that have properties, methods, and events.
    - A class can inherit from another class, implement one or more interfaces, and contain nested types.
    - A class can have access modifiers that control its visibility and accessibility to other types.
    - A class can have constructors that initialize its state and destructors that perform cleanup actions.
    - A class can have fields that store data, properties that expose data, methods that perform actions, and events that notify other types of changes.
    - A class can have static members that belong to the class itself and not to any instance of the class.
    - A class can have operators that define how to perform arithmetic or logical operations on its instances.
    - A class can have indexers that allow accessing its elements by using an index syntax.

## [Properties (C# Programming Guide)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)

1. What’s the difference between a static and an instance constructor?

2. How does the use of a static constructor differ from setting properties/values?

    - Properties are members that provide a flexible mechanism to read, write, or compute the value of a private field.
    - Properties can be used as if they are public data members, but they are actually special methods called accessors.
    - Properties can have get and set accessors that define how to get or set the value of the property.
    - Properties can have different access levels for the get and set accessors, such as public, private, protected, internal, or protected internal.
    - Properties can be auto-implemented, which means that the compiler generates a private backing field and the accessors for the property.
    - Properties can be read-only, which means that they have a get accessor but no set accessor.
    - Properties can be write-only, which means that they have a set accessor but no get accessor.
    - Properties can be expression-bodied, which means that they use a lambda expression to return or assign a value.


## [C# Heap(ing) Vs Stack(ing) In .NET - Part One](https://www.c-sharpcorner.com/article/C-Sharp-heaping-vs-stacking-in-net-part-i/)

1. Knowing what you now know about the stack and the heap, how might you rethink the way you did projects in previous courses, to make more effecient use of memory?

    - Heaping and stacking are two ways of organizing memory in C#. Memory is like a warehouse that has many shelves and boxes. Each box has a label that indicates its address and contents.
    - Heaping is like putting boxes on the floor of the warehouse without any order. You can put any box anywhere, as long as there is space. You can also remove any box at any time, leaving gaps on the floor. Heaping is flexible, but it can cause fragmentation and waste of space. Heaping is used for dynamic memory allocation, such as creating objects with the new keyword.
    - Stacking is like putting boxes on a stack of shelves that has a fixed size and order. You can only put a box on the top shelf, and you can only remove the box from the top shelf. Stacking is efficient, but it can cause overflow and underflow. Stacking is used for static memory allocation, such as creating local variables and parameters.

More explanation:

- Heaping and stacking are two types of memory segments in C#. Memory segments are regions of memory that have different characteristics and purposes.
- Heaping is a memory segment that is used for storing objects that are created at run time. Objects on the heap have no fixed size or lifetime, and they can be accessed by any method or thread. The heap is managed by the garbage collector, which periodically frees the memory of unused objects.
- Stacking is a memory segment that is used for storing local variables and parameters that are created at compile time. Variables on the stack have a fixed size and lifetime, and they can only be accessed by the method or thread that created them. The stack is managed by the compiler, which automatically allocates and deallocates the memory of variables.

## [Fundamentals of Garbage Collection](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals)

1. Compare “Garbage Collection” in C# with the lifecycle of normal household items.

    The link you provided is an article that explains the fundamentals of garbage collection in .NET. Garbage collection is a feature of the .NET framework that automatically manages the memory used by your application. You can think of it as a **housekeeper** that cleans up the **rooms** in your **house**.

    The **house** is your application's virtual address space, which is the memory that your application can use. The **rooms** are the different parts of the virtual address space, such as the managed heap, where your application allocates and frees objects. The **housekeeper** is the garbage collector, which periodically checks for objects that are no longer needed and removes them from the managed heap, freeing up memory for new objects.

    The garbage collector has some benefits for your application, such as:

    - You don't have to manually clean up the rooms yourself, which saves you time and effort.
    - The housekeeper allocates and frees rooms efficiently, which reduces memory fragmentation and improves performance.
    - The housekeeper ensures that each room has clean content when you use it, which prevents errors and bugs.

    The article also explains some of the concepts and terms related to garbage collection, such as:

    - The managed heap, which is where your application creates and destroys objects.
    - Generations, which are groups of objects based on their age and survival rate.
    - What happens during a garbage collection, which is when the garbage collector reclaims memory from unused objects.
    - Unmanaged resources, which are resources that are not managed by the garbage collector and need to be disposed manually.