# Reading Notes

## [**Read to a file**](https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-read-and-write-to-a-newly-created-data-file)

Shows how to read and write to a newly created data file for a .NET app. It uses the following classes and methods:

- **BinaryWriter** and **BinaryReader** are used for writing and reading data other than character strings. They can write and read primitive data types, decimal values, and strings.
- **FileStream** is used to create a stream for a file, which can be read from or written to. It takes the file path, the file mode, and the file access as parameters.
- **BitConverter** is used to convert numeric data types to an array of bytes and vice versa.

The article also provides an example of how to use these classes and methods in C# code. Here are some notes based on the example:

- To create a new data file, you can use a `FileStream` object with the `FileMode.Create` and `FileAccess.Write` parameters, and pass it to a `BinaryWriter` object.
- To write data to the file, you can use the `Write` method of the `BinaryWriter` object, which takes the data value as a parameter. You can write different types of data, such as integers, doubles, booleans, and strings.
- To close the file, you can use the `Close` method of the `BinaryWriter` object, which also closes the underlying stream.
- To read data from the file, you can use a `FileStream` object with the `FileMode.Open` and `FileAccess.Read` parameters, and pass it to a `BinaryReader` object.
- To read data from the file, you can use the `Read` methods of the `BinaryReader` object, which return the data value as the specified type. You need to read the data in the same order as they were written.
- To convert an array of bytes to a numeric value, you can use the `To` methods of the `BitConverter` class, which take the byte array and an optional start index as parameters.

Source: Conversation with Bing, 7/10/2023

(1) How to: Read and write to a newly created data file | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-read-and-write-to-a-newly-created-data-file.

(2) File and Stream I/O - .NET | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/io/.

(3) How to: Read text from a file | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-read-text-from-a-file.

## [**Write to a file**](https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-write-text-to-a-file)

Shows different ways to write text to a file for a .NET app. It uses the following classes and methods:

- **StreamWriter** contains methods to write to a file synchronously (`Write` and `WriteLine`) or asynchronously (`WriteAsync` and `WriteLineAsync`).
- **File** provides static methods to write text to a file such as `WriteAllLines` and `WriteAllText`, or to append text to a file such as `AppendAllLines`, `AppendAllText`, and `AppendText`.
- **Path** is for strings that have file or directory path information. It contains the `Combine` method and in .NET Core 2.1 and later, the `Join` and `TryJoin` methods. These methods let you concatenate strings for building a file or directory path.

The article also provides some examples of how to use these classes and methods in C# code. Here are some notes based on the examples:

- To synchronously write text to a new file one line at a time, you can use a `StreamWriter` object in a `using` statement, and call the `WriteLine` method for each line of text.
- To synchronously append text to an existing file, you can use a `StreamWriter` object with the `true` parameter in the constructor, and call the `WriteLine` method for the text to be appended.
- To asynchronously write text to a new file, you can use an async method that returns a `Task`, and use a `StreamWriter` object with the `await` keyword and the `WriteAsync` or `WriteLineAsync` methods.
- To write or append text with the `File` class, you can use the static methods such as `File.WriteAllText`, `File.AppendAllText`, or `File.AppendText`, which take the file path and the text as parameters.
- To combine strings for building a file or directory path, you can use the static methods of the `Path` class such as `Path.Combine`, `Path.Join`, or `Path.TryJoin`, which take multiple strings as parameters.

Source: Conversation with Bing, 7/10/2023

(1) How to: Write text to a file | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/io/how-to-write-text-to-a-file.

(2) How do I write data to a text file in C#? - Stack Overflow. https://stackoverflow.com/questions/6153074/how-do-i-write-data-to-a-text-file-in-c.

(3) c# - How to write to a file in .NET Core? - Stack Overflow. https://stackoverflow.com/questions/35310078/how-to-write-to-a-file-in-net-core.

(4) How to: Write Text to Files - Visual Basic | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/visual-basic/developing-apps/programming/drives-directories-files/how-to-write-text-to-files.

(5) undefined. http://msdn.microsoft.com/en-us/library/system.io.filestream.aspx.

## [**File and Stream I/O**](https://learn.microsoft.com/en-us/dotnet/standard/io/)

Shows how to read and write to a newly created data file for a .NET app. It uses the following classes and methods:

- **BinaryWriter** and **BinaryReader** are used for writing and reading data other than character strings. They can write and read primitive data types, decimal values, and strings¹.
- **FileStream** is used to create a stream for a file, which can be read from or written to. It takes the file path, the file mode, and the file access as parameters¹.
- **BitConverter** is used to convert numeric data types to an array of bytes and vice versa¹.

The article also provides an example of how to use these classes and methods in C# code. Here are some notes based on the example:

- To create a new data file, you can use a `FileStream` object with the `FileMode.Create` and `FileAccess.Write` parameters, and pass it to a `BinaryWriter` object¹.
- To write data to the file, you can use the `Write` method of the `BinaryWriter` object, which takes the data value as a parameter. You can write different types of data, such as integers, doubles, booleans, and strings¹.
- To close the file, you can use the `Close` method of the `BinaryWriter` object, which also closes the underlying stream¹.
- To read data from the file, you can use a `FileStream` object with the `FileMode.Open` and `FileAccess.Read` parameters, and pass it to a `BinaryReader` object¹.
- To read data from the file, you can use the `Read` methods of the `BinaryReader` object, which return the data value as the specified type. You need to read the data in the same order as they were written¹.
- To convert an array of bytes to a numeric value, you can use the `To` methods of the `BitConverter` class, which take the byte array and an optional start index as parameters¹.

Source: Conversation with Bing, 7/10/2023

(1) File and Stream I/O - .NET | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/io/.

(2) I/O pipelines - .NET | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/io/pipelines.

(3) .NET Standard | Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/standard/net-standard.

## Things I Want to Know More About