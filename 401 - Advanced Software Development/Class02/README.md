## Read: Class 02

## [Unit Testing Best Practices](https://stackify.com/unit-testing-basics-best-practices/)

**Notes based on the content from the link:**

- Unit testing is a way of testing individual pieces of code (units) to make sure they work as expected and don't break other parts of the system.

- Unit testing can help developers find and fix bugs faster, improve code quality, and make changes easier and safer.

- Unit testing can be done using various tools and frameworks, such as NUnit, xUnit, MSTest, etc. These tools provide features such as assertions, test runners, test attributes, etc.

- **Unit testing best practices include:**

  - Writing testable code: code that is modular, loosely coupled, follows SOLID principles, and has clear inputs and outputs.

  - Writing clear and meaningful test names: test names should describe what the test does, what the expected result is, and under what conditions.

  - Writing one assertion per test: each test should have a single responsibility and a single reason to fail or pass.

  - Writing independent and isolated tests: tests should not depend on each other or on external factors such as databases, files, network, etc. Tests should be able to run in any order and in parallel.

  - Writing tests first: following the Test-Driven Development (TDD) approach, where tests are written before the code, can help design better code and drive the development process.

  - Refactoring tests: tests should be maintained and updated as the code changes. Tests should also follow coding standards and avoid duplication and complexity.

- **A sports analogy for unit testing is:**

  - Imagine you are a coach of a basketball team. You want to make sure your players are ready for the game and can perform well as a team.

  - Unit testing is like practicing individual skills and drills with your players. You want to test their shooting, passing, dribbling, defense, etc. You want to make sure they can execute each skill correctly and consistently.

  - Unit testing tools and frameworks are like the equipment and rules you use for practicing. You need a ball, a hoop, a court, a whistle, etc. You also need to follow some rules and guidelines for how to practice effectively.

  - Unit testing best practices are like the tips and strategies you use to improve your practice sessions. You want to write clear and specific goals for each drill, focus on one skill at a time, isolate each player from distractions, start with simple drills and then increase the difficulty, etc.

  - Practicing individual skills and drills can help your players improve their performance, find and fix their weaknesses, build confidence, and prepare for the game. However, practicing skills alone is not enough. You also need to practice as a team and play against other teams to test your overall strategy and teamwork. Similarly, unit testing alone is not enough. You also need to do integration testing and system testing to test how your units work together and how your system works as a whole.



## [XUnit Documentation](https://xunit.net/docs/getting-started/netcore/visual-studio)

Here are some notes based on the content from the link, with a cooking analogy:

- xUnit.net is a unit testing framework for .NET Core applications. It can be used with Visual Studio to write and run unit tests.
- To use xUnit.net with Visual Studio, you need to:
  - Create a new .NET Core project or open an existing one.
  - Add a reference to the xUnit.net NuGet package and the test runner package (such as xunit.runner.visualstudio) to the project.
  - Create a new class for writing test methods. The class name should end with "Tests" and the class should be public and have a public parameterless constructor.
  - Write test methods using the [Fact] or [Theory] attributes. The test methods should be public, return void, and have no parameters (unless using [Theory]).
  - Use assertions to verify the expected results of the test methods. Assertions are static methods of the Assert class, such as Assert.Equal, Assert.True, Assert.NotNull, etc.
  - Run the tests using the Test Explorer window in Visual Studio. You can see the test results, filter and group the tests, debug the tests, etc.

- A cooking analogy for using xUnit.net with Visual Studio is:
  - Imagine you are a chef who wants to test your recipes and make sure they taste good and meet your standards.
  - xUnit.net is like a cookbook that provides you with guidelines and tools for testing your recipes. It tells you what ingredients and equipment you need, how to write and organize your tests, how to check your results, etc.
  - Visual Studio is like your kitchen where you prepare and cook your recipes. It provides you with a workspace, a stove, an oven, a mixer, etc. It also provides you with a test explorer window where you can see your tests, run them, debug them, etc.
  - To use xUnit.net with Visual Studio, you need to:
    - Create a new recipe or open an existing one. This is like creating a new .NET Core project or opening an existing one.
    - Add the ingredients and equipment you need for testing your recipe. This is like adding a reference to the xUnit.net NuGet package and the test runner package to the project.
    - Create a new section for writing test steps. The section name should end with "Tests" and the section should be public and have a public parameterless constructor. This is like creating a new class for writing test methods.
    - Write test steps using the [Fact] or [Theory] attributes. The test steps should be public, return void, and have no parameters (unless using [Theory]). This is like writing test methods using the [Fact] or [Theory] attributes.
    - Use assertions to verify the expected results of the test steps. Assertions are static methods of the Assert class, such as Assert.Equal, Assert.True, Assert.NotNull, etc. This is like using assertions to verify the expected results of the test methods.
    - Run the tests using the Test Explorer window in Visual Studio. You can see the test results, filter and group the tests, debug the tests, etc. This is like running the tests using the Test Explorer window in Visual Studio.

- Testing your recipes using xUnit.net and Visual Studio can help you improve your cooking skills, find and fix errors in your recipes, ensure consistency and quality, and prepare for serving your customers. However, testing your recipes alone is not enough. You also need to taste them yourself and get feedback from others to see how they like them. Similarly, testing your code using xUnit.net and Visual Studio alone is not enough. You also need to do manual testing and user testing to see how your code works in real scenarios and how it meets user expectations.



## [Art of Readme](https://github.com/hackergrrl/art-of-readme)

Notes based on the content from the link, with a gymnastics analogy:

- A README is a file that provides information about a software project, such as what it does, how to use it, how to contribute to it, etc.
- A README is important because it is often the first thing that people see when they encounter a project. It can help them understand the project, get interested in it, and decide whether to use it or not.
- A README should be clear, concise, and comprehensive. It should answer the following questions:
  - What is the project and why does it exist?
  - How do I install and run it?
  - How do I use it and what are some examples?
  - How do I report issues and request features?
  - How do I contribute to the project and what are the guidelines?
  - Where can I find more information and resources?
- A README should also follow some best practices, such as:
  - Using a standard format and structure, such as Markdown or reStructuredText.
  - Using headings, lists, code blocks, images, links, etc. to make the text more readable and organized.
  - Using badges, logos, screenshots, gifs, etc. to make the text more attractive and engaging.
  - Using a friendly and respectful tone, avoiding jargon and acronyms, and explaining technical terms.
  - Updating the README regularly to reflect the current state of the project.

Here is an analogy for a README using an academic context:

- Imagine you are a researcher who wants to share your findings and methods with other scholars, such as peers, reviewers, or students.
- A README is like an abstract that provides information about your research project, such as what it is, how to conduct it, how to interpret it, etc.
- A README is important because it is often the first thing that people see when they encounter your research project. It can help them understand your project, get interested in it, and decide whether to read it or not.
- A README should be clear, concise, and comprehensive. It should answer the following questions:
  - What is your research project and why does it exist?
  - How do you design and execute your experiments or analyses?
  - How do you present and discuss your results and conclusions?
  - How do you address limitations and ethical issues?
  - How do you collaborate with other researchers and what are the guidelines?
  - Where can you find more information and resources?
- A README should also follow some best practices, such as:
  - Using a standard format and structure, such as APA or MLA.
  - Using headings, lists, tables, figures, citations, etc. to make the text more readable and organized.
  - Using keywords, acronyms, symbols, equations, etc. to make the text more precise and consistent.
  - Using a formal and objective tone, avoiding personal pronouns and opinions, and supporting claims with evidence.
  - Updating the README regularly to reflect the current state of your research project.

- Writing a README for your research project can help you share your findings and methods with other scholars, demonstrate your expertise and credibility, and invite them to join or cite your project. However, writing a README alone is not enough. You also need to conduct your experiments or analyses yourself and publish them in a journal or a conference to see how they work in real scenarios and how they meet scholarly standards.



## [ReadMe Best Practices](https://github.com/jehna/readme-best-practices)

Here are some brief reading notes based on the content from the link:

- The link provides a template and some tips for writing a good README file for a software project.
- The template consists of the following sections:
  - Project name and logo: a short and catchy name and an optional logo that describe the project.
  - Introduction: a brief summary of what the project does, why it is useful, and who it is for.
  - Table of contents: an optional list of links to the main sections of the README.
  - Installation: a step-by-step guide on how to install and run the project on different platforms and environments.
  - Usage: a detailed explanation of how to use the project, with examples, screenshots, code snippets, etc.
  - Support: a section that tells users how to get help or report issues, such as contact information, issue tracker, chat room, etc.
  - Roadmap: an optional section that outlines the future plans and goals of the project, such as features, milestones, releases, etc.
  - Contributing: a section that invites and guides users on how to contribute to the project, such as code of conduct, pull request process, testing guidelines, etc.
  - License: a section that specifies the license under which the project is released and the rights and obligations of users and contributors.
  - Authors and acknowledgment: a section that credits the authors and contributors of the project and acknowledges any sources or resources that helped with the project.
- The tips include some best practices and recommendations for writing a README file, such as:
  - Keep it short and simple: use clear and concise language, avoid unnecessary details, and break long paragraphs into bullet points or lists.
  - Be consistent and structured: use a standard format and layout, such as Markdown or reStructuredText, and follow a logical order and hierarchy for the sections.
  - Be informative and engaging: use descriptive and catchy titles, provide relevant and useful information, and use images, badges, emojis, etc. to add some flair and personality.
  - Be accurate and up-to-date: use correct spelling and grammar, check for errors and typos, and update the README regularly to reflect the current state of the project.

# Lab 2 Reading Material (Unit testing)

## [New XUnit Project](https://xunit.net/docs/getting-started/netcore/visual-studio)

&nbsp;

## Things I Want to Know More About