# Reading 11

## [Data Models (Review the DB Schema) Tutorial: Create a complex data model - ASP.NET MVC with EF Core](https://learn.microsoft.com/en-us/aspnet/core/data/ef-mvc/complex-data-model?view=aspnetcore-2.0)

1. A database schema is a blueprint or plan for how data is organized in a database. It defines the structure of the database by describing the tables, fields, relationships, and constraints that make up the database.

> a. A schema is a collection of database objects that are logically grouped together.

> b. We use schemas to organize and manage database objects and to control access to them.

> c. Schemas can be represented as diagrams that show the relationships between tables and other objects in the database.

2. There are several types of database keys:

> a. A primary key is a column or group of columns in a table that uniquely identifies each row in that table.

> b. A foreign key is a column or group of columns in one table that refers to the primary key of another table.

> c. A composite key is a combination of two or more columns in a table that uniquely identifies each row in that table.

> d. The primary key is used to enforce entity integrity, while foreign keys are used to enforce referential integrity. Composite keys are used when no single column can uniquely identify each row in a table.

Key points and notes:

- This tutorial teaches how to create a complex data model in ASP.NET Core MVC with Entity Framework (EF) Core.
- The tutorial covers how to customize the data model by specifying formatting, validation, and database mapping rules.
- The tutorial also covers how to add more entities and relationships.
- The completed data model is shown in an entity diagram.
- The tutorial is composed of several sections that build on each other.
- The tutorial assumes that you have some experience with EF Core migrations.


## [DBMS](https://www.tutorialspoint.com/dbms/dbms_overview.htm)

1. What are Relationships in a relational database?

> relationships in a relational database are situations that exist between relational database tables through foreign keys. A Foreign Key (FK) is a column or combination of columns that is used to establish and enforce a link between the data in two tables. There are three types of relationships between tables and the relationship between different tables depends on how the related columns are defined:

a. What is a 1:1 relationship?

> One-to-Many Relationship: A one-to-many relationship is the most common type of relationship. In this type of relationship, a row in table A can have many matching rows in table B, but a row in table B can have only one matching row in table A. The foreign key is defined in the table that represents the many end of the relationship.

b. What is a Many:Many relationship?

> Many-to-Many Relationship: In many-to-many relationship, a row in table A can have many matching rows in table B, and vice versa. You can create such a relationship by defining a third table, called a junction table, whose primary key consists of the foreign keys from both table A and table B.

c. How about a 1: Many or a Many:1?

> One-to-One Relationship: In this type of relationship, each row in table A is linked to no more than one row in table B and vice versa.

&nbsp;

## Things I Want to Know More About

