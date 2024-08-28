### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for JSON Web Token, it is a compact URL-safe means of representing claims between two parties. It is used for authentication in web applications

- What is the signature portion of the JWT?  What does it do?
Is the result of digital signing the header and playload using a hashing alogarithm. Its purpuse is tro verify the origins and integrity of the token, ensuring that it hasn't been tempered with.

- If a JWT is intercepted, can the attacker see what's inside the payload?
No, if a JWT is intercepted, the attacker cannot see what's inside the payload. The payload of a JWT is encoded, not encrypted. It can be easily decoded, but it cannot be decrypted without the secret key.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
User logs in with their credentials (username and password).
The server verifies the credentials and generates a JWT for the user.
The server sends the JWT to the client as a response.
The client stores the JWT securely, usually in local storage or a cookie.
For subsequent requests, the client includes the JWT in the Authorization header.
The server verifies the JWT and grants access to protected resources if the token is valid.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests: Unit tests are focused on testing individual units or components of the code in isolation. These tests are typically written by developers and are used to verify that each unit of code (such as functions or methods) behaves as expected.

Integration tests: Integration tests are designed to test the interaction between different components or modules of the code. These tests ensure that the integrated system works as expected and that the components are able to communicate and function together correctly.

End-to-end tests: End-to-end tests are high-level tests that simulate real user scenarios and test the entire system from start to finish. These tests validate the system's behavior and functionality as a whole, including the user interface, backend processes, and external integrations

- What is a mock? What are some things you would mock?
mock is a simulated object that mimics the behavior of a real object. It is used for testing purposes, allowing developers to isolate and test specific components of a system without relying on the actual dependencies. Some things that can be mocked include external APIs, databases, network requests, and user input.

- What is continuous integration?
is a software development practice where developers frequently integrate their code changes into a shared repository.The goal of continuous integration is to catch and resolve integration issues early in the development process.


- What is an environment variable and what are they used for?
is a dynamic value that can affect the behavior of a running process or program. It is a key-value pair that is stored in the operating system's environment and can be accessed by programs to retrieve configuration settings or other important information. Environment variables are used to provide flexibility and customization to software applications, allowing them to adapt to different environments or user preferences.

- What is TDD? What are some benefits and drawbacks?
TDD stands for Test-Driven Development. It is a software development approach where tests are written before the actual code.TDD include improved code quality, faster feedback loop, better design, and increased confidence in the code. However, there are also some drawbacks to consider. TDD can be time-consuming, especially in the beginning when writing tests for every small piece of code. TDD may not be suitable for all types of projects or teams with tight deadlines.

- What is the value of using JSONSchema for validation?
JSONSchema provides a standardized way to define the structure and constraints of JSON data. It allows for validation of JSON data against a schema, ensuring that the data is in the expected format and meets the specified criteria. This helps in maintaining data integrity, improving data quality, and preventing errors in data processing and integration.


- What are some ways to decide which code to test?
Criticality: Test the code that is critical to the functionality of the application or system.

Complexity: Test the code that is complex and has a higher chance of containing bugs.

Dependencies: Test the code that has dependencies on other modules or components.

Error-prone areas: Test the code that is more likely to have errors or bugs based on past experiences or known issues.

Business logic: Test the code that implements the core business logic of the application.

Input validation: Test the code that handles user input and performs validation.

Edge cases: Test the code that handles edge cases or boundary conditions.

Code changes: Test the code that has been recently modified or added.


- What does `RETURNING` do in SQL? When would you use it?
RETURNING is a clause in SQL that allows you to retrieve the data that was affected by an INSERT, UPDATE, or DELETE statement. It is commonly used when you want to retrieve the values of specific columns after performing a modification operation. This can be useful in scenarios where you need to retrieve the auto-generated primary key value after inserting a new row into a table, or when you want to retrieve the updated values of certain columns after performing an update operation. By using the RETURNING clause, you can avoid making an additional query to fetch the affected data, thus improving performance and reducing network traffic.

- What are some differences between Web Sockets and HTTP?
Web Sockets and HTTP are both protocols used for communication over the internet, but they have some key differences.
Connection: HTTP is a request-response protocol, which means that the client sends a request to the server and the server responds with a single response. On the other hand, Web Sockets provide a full-duplex communication channel between the client and the server, allowing for real-time, bidirectional communication.

Statelessness: HTTP is a stateless protocol, which means that each request is independent and does not maintain any state between requests. Web Sockets, on the other hand, maintain a persistent connection, allowing for continuous communication and the ability to maintain state.

Overhead: HTTP has more overhead compared to Web Sockets. HTTP requests and responses include headers and other metadata, which can increase the size of the data being transmitted. Web Sockets have a smaller overhead since they only require a minimal amount of data to establish and maintain the connection.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Express is very interesting,but compare to Flask, which is in my opinio n "lightweight (is a bit less complicated than Express) is more flexible however we need to add more tools depending on the application. So I thnk FLask id preferible.
