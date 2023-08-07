# Readings: Collections & Enums

## [Collections](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections)

- The article explains the concept of collections in C#, which are classes that can store and manage groups of related objects.
- Collections are more flexible than arrays, which have a fixed size and type. Collections can grow and shrink dynamically, and some collections can store objects of different types or use keys to access them.
- The article introduces some of the common collection classes in .NET, such as List<T>, Dictionary<TKey,TValue>, Queue<T>, Stack<T>, HashSet<T>, and SortedList<TKey,TValue>.
- The article also shows how to use collection initializers, LINQ queries, sorting methods, custom collections, and iterators with collections.
- The article provides code examples for each topic, and links to more detailed information on each collection class.

## [Enums](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)

> An **enumeration** type (or enum type) is a value type defined by a set of named constants of the underlying integral numeric type. To define an enumeration type, use the enum keyword and specify the names of enum members:

```CSharp
enum Season
{
    Spring,
    Summer,
    Autumn,
    Winter
}
```

- The article explains the concept of enums in C#, which are named constants that represent a set of values.
- Enums are useful for defining and grouping related values, such as days of the week, colors, directions, etc.
- Enums are declared using the `enum` keyword, followed by the enum name and the list of values. By default, the values are assigned integer numbers starting from zero, but they can also be explicitly specified or cast to other types.
- Enums can be used in expressions, assignments, comparisons, switch statements, and as method parameters. They can also have attributes, methods, and fields defined within them.
- The article provides code examples for each topic, and links to more information on enum operators, flags, and underlying types.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About