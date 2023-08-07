# Readings: LINQ & Delegates

# [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/)

```CSharp
// Specify the data source.
int[] scores = { 97, 92, 81, 60 };

// Define the query expression.
IEnumerable<int> scoreQuery =
    from score in scores
    where score > 80
    select score;

// Execute the query.
foreach (int i in scoreQuery)
{
    Console.Write(i + " ");
}

// Output: 97 92 81
```

- LINQ stands for Language Integrated Query, which is a set of technologies that allow you to query and transform data from various sources and formats using C# syntax.
- LINQ queries consist of three parts: obtaining the data source, creating the query expression, and executing the query.
- LINQ queries can use either query syntax or method syntax, but query syntax is usually more readable and concise.
- LINQ queries are not executed until you iterate over the query variable, such as in a foreach statement. This is called deferred execution.
- LINQ supports different types of data sources, such as arrays, collections, XML documents, SQL databases, and more. Each data source must implement the IEnumerable<T> or IQueryable<T> interface to be queryable.
- LINQ provides a set of standard query operators that can perform common operations on data, such as filtering, sorting, grouping, joining, aggregating, and transforming.
- LINQ also enables you to write your own custom query operators by using extension methods and lambda expressions.

# [Introduction To LINQ Queries](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/introduction-to-linq-queries)

```CSharp
class IntroToLINQ
{
    static void Main()
    {
        // The Three Parts of a LINQ Query:
        // 1. Data source.
        int[] numbers = new int[7] { 0, 1, 2, 3, 4, 5, 6 };

        // 2. Query creation.
        // numQuery is an IEnumerable<int>
        var numQuery =
            from num in numbers
            where (num % 2) == 0
            select num;

        // 3. Query execution.
        foreach (int num in numQuery)
        {
            Console.Write("{0,1} ", num);
        }
    }
}
```

- LINQ stands for Language Integrated Query, which is a set of technologies that allow you to query and transform data from various sources and formats using C# syntax¹.
- LINQ queries consist of three parts: obtaining the data source, creating the query expression, and executing the query¹.
- LINQ queries can use either query syntax or method syntax, but query syntax is usually more readable and concise¹.
- LINQ queries are not executed until you iterate over the query variable, such as in a foreach statement. This is called deferred execution¹.
- LINQ supports different types of data sources, such as arrays, collections, XML documents, SQL databases, and more. Each data source must implement the IEnumerable<T> or IQueryable<T> interface to be queryable¹.
- LINQ provides a set of standard query operators that can perform common operations on data, such as filtering, sorting, grouping, joining, aggregating, and transforming¹.
- LINQ also enables you to write your own custom query operators by using extension methods and lambda expressions¹.

# [Basic LINQ Query Operators](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/standard-query-operators-overview)

```CSharp
string sentence = "the quick brown fox jumps over the lazy dog";  
// Split the string into individual words to create a collection.  
string[] words = sentence.Split(' ');  
  
// Using query expression syntax.  
var query = from word in words  
            group word.ToUpper() by word.Length into gr  
            orderby gr.Key  
            select new { Length = gr.Key, Words = gr };  
  
// Using method-based query syntax.  
var query2 = words.  
    GroupBy(w => w.Length, w => w.ToUpper()).  
    Select(g => new { Length = g.Key, Words = g }).  
    OrderBy(o => o.Length);  
  
foreach (var obj in query)  
{  
    Console.WriteLine("Words of length {0}:", obj.Length);  
    foreach (string word in obj.Words)  
        Console.WriteLine(word);  
}  
  
// This code example produces the following output:  
//  
// Words of length 3:  
// THE  
// FOX  
// THE  
// DOG  
// Words of length 4:  
// OVER  
// LAZY  
// Words of length 5:  
// QUICK  
// BROWN  
// JUMPS
```

- Standard query operators are a set of methods that provide a consistent way to query and manipulate data from different sources and formats using LINQ.
- Standard query operators are implemented as extension methods for the IEnumerable<T> and IQueryable<T> interfaces, which means they can be invoked on any object that implements these interfaces.
- Standard query operators can be categorized into two groups: deferred and immediate. Deferred operators return a new query object that is executed when iterated over, while immediate operators execute the query and return a single value or a new collection.
- Standard query operators can be further classified into different types based on their functionality, such as filtering, projection, joining, grouping, ordering, aggregation, quantifiers, partitioning, conversion, and element operators.
- Standard query operators can be composed together to form complex queries that can perform multiple operations on data.
- Standard query operators can be used with either query syntax or method syntax, but some operators are only available in method syntax.

# [Walkthrough Writing LINQ Queries in C#](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/walkthrough-writing-queries-linq)


### To add the data source

Add the Student class and the initialized list of students to the Program class in your project.

```CSharp
public class Student
{
    public string First { get; set; }
    public string Last { get; set; }
    public int ID { get; set; }
    public List<int> Scores;
}

// Create a data source by using a collection initializer.
static List<Student> students = new List<Student>
{
    new Student {First="Svetlana", Last="Omelchenko", ID=111, Scores= new List<int> {97, 92, 81, 60}},
    new Student {First="Claire", Last="O'Donnell", ID=112, Scores= new List<int> {75, 84, 91, 39}},
    new Student {First="Sven", Last="Mortensen", ID=113, Scores= new List<int> {88, 94, 65, 91}},
    new Student {First="Cesar", Last="Garcia", ID=114, Scores= new List<int> {97, 89, 85, 82}},
    new Student {First="Debra", Last="Garcia", ID=115, Scores= new List<int> {35, 72, 91, 70}},
    new Student {First="Fadi", Last="Fakhouri", ID=116, Scores= new List<int> {99, 86, 90, 94}},
    new Student {First="Hanying", Last="Feng", ID=117, Scores= new List<int> {93, 92, 80, 87}},
    new Student {First="Hugo", Last="Garcia", ID=118, Scores= new List<int> {92, 90, 83, 78}},
    new Student {First="Lance", Last="Tucker", ID=119, Scores= new List<int> {68, 79, 88, 92}},
    new Student {First="Terry", Last="Adams", ID=120, Scores= new List<int> {99, 82, 81, 79}},
    new Student {First="Eugene", Last="Zabokritski", ID=121, Scores= new List<int> {96, 85, 91, 60}},
    new Student {First="Michael", Last="Tucker", ID=122, Scores= new List<int> {94, 92, 91, 91}}
};
```

- This walkthrough demonstrates how to write LINQ query expressions in C# by using the three ways: query syntax, method syntax, and mixed syntax.
- The first step is to create a C# project and add a reference to System.Core.dll and a using directive for the System.Linq namespace.
- The second step is to create an in-memory data source, which is a simple list of Student objects that has a first name, last name, and an array of integers that represents their test scores in the class.
- The third step is to create the query expression by using either query syntax or method syntax. The query expression specifies what information you want to retrieve from the data source or sources.
- The fourth step is to execute the query by iterating over the query variable in a foreach statement or other statement. This will cause the query to be executed and the results to be returned.
- The fifth step is to modify the query by adding more operators or changing the conditions. You can also use mixed syntax to combine query syntax and method syntax in a single query expression.
- Some common operators used in LINQ queries are Where, Select, OrderBy, GroupBy, Join, Aggregate, and Count.
- You can also use lambda expressions and anonymous types to simplify your queries and make them more readable.
- For more information about LINQ queries in C#, you can check out the interactive tutorials on Microsoft Learn or the official documentation on .NET website.

##### Notes generated with the help of ChatGPT

## Things I Want to Know More About
