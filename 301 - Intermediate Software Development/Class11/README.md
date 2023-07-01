# [Nosql v sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

# [sql vs nosql](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

# [mongoose api](https://mongoosejs.com/docs/api/model.html#Model())

### SQL Databases

* Also known as Relational Databases (RDBMS).
* Data is stored in tables with predefined schemas.
* Use structured query language (SQL) for defining and manipulating data.
* Vertically scalable by increasing hardware resources.
* Good for complex query-intensive environments and heavy-duty transactional applications.
* Examples: MySQL, Oracle, SQLite, PostgreSQL, MS-SQL.

### NoSQL Databases

* Also known as non-relational or distributed databases.
* Data is stored in various formats like key-value pairs, documents, graph structures, or wide-column stores.
* Dynamic schema allows for unstructured data.
* Horizontally scalable by adding more database servers.
* Queries are focused on collections of documents, with various query languages.
* Preferred for hierarchical data storage and large datasets.
* Examples: MongoDB, BigTable, Redis, RavenDB, Cassandra, HBase, Neo4j, CouchDB.

2. What kind of data is a good fit for an SQL database?

    - Structured data with well-defined relationships between entities is a good fit for an SQL database. 

3. Give a real world example.

    - An example of data that is a good fit for an SQL database is an e-commerce application that needs to store information about customers, orders, products, and inventory. The structured nature of the data and the relationships between entities can be easily represented using tables in an SQL database.

4. What kind of data is a good fit a NoSQL database?

    - Unstructured or semi-structured data that can vary in its schema or does not fit well into a tabular structure.

5. Give a real world example.

    - A real-world example of data that is a good fit for a NoSQL database is a social media platform that needs to store user profiles, posts, comments, and relationships between users. The flexibility of NoSQL databases allows for easy storage and retrieval of varying and evolving data structures.

6. Which type of database is best for hierarchical data storage?

    - NoSQL databases, particularly graph databases, are well-suited for hierarchical data storage. 

7. Which type of database is best for scalability?

    - NoSQL databases are typically better suited for scalability, particularly horizontal scalability

### SQL Database Examples

1. MySQL Community Edition:
Popular open-source database, often used with Apache and PHP.
Features replication, sharding, and Memcached for performance.
Available for multiple platforms and languages.
Cost-effective and stable.

2. MS-SQL Server Express Edition:
Powerful and user-friendly database with Microsoft support.
Integrated development environment (IDE) for developers.
Offers disaster recovery mechanisms and cloud backup.

3. Oracle Express Edition:
Free limited edition of Oracle Enterprise Edition.
Easy to upgrade and supports multiple platforms.
Reliable, secure, and easily manageable.

### NoSQL Database Examples

1. MongoDB:

* Document-based NoSQL database storing data in JSON-like documents.
* High performance for simple queries and scalability through horizontal scaling.
* Easy to use for developers and administrators, with dynamic schema support.

2. CouchDB:

* Document-based NoSQL database storing data in JSON documents.
* Schema-less and accessible through HTTP queries.
* Automatic conflict resolution and straightforward replication.

3. Redis:

* Open-source NoSQL database known for its speed.
* Provides efficient data structures and can be used as a cache.
* Works with in-memory datasets and considered one of the fastest NoSQL servers.

### Nosql v Sql Questions

1. An SQL database is a good fit for structured data that adheres to a predefined schema. It works well for applications where the data has a consistent structure and relationships between entities are clearly defined. A real-world example of data suitable for an SQL database is an e-commerce website.

2. A NoSQL database is a good fit for unstructured or semi-structured data that does not follow a rigid schema. It is suitable for scenarios where data is evolving, and the structure may vary between different documents or entities. A real-world example of data suitable for a NoSQL database is a social media platform.

3. For hierarchical data storage, NoSQL databases are generally considered a better fit. NoSQL databases, such as document-based or graph databases, can handle hierarchical data structures more naturally.

4. When it comes to scalability, NoSQL databases are typically preferred. NoSQL databases are designed to scale horizontally by distributing data across multiple servers, making them well-suited for handling large amounts of data and high traffic loads.
 	