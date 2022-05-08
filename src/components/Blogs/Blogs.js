import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
            <h2>Questions:  Difference between javascript and nodejs?</h2>
            <h3>Answer: </h3>
            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. On the other hand, Node JS is an interpreter or running environment for a JavaScript language. It requires libraries that can easily be accessed from JavaScript for better use.JavaScript is normally used for any client-side activity for one web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script is non-blocking on an operating system.JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific.But it supports the V8 engine, written JavaScript code can able to run in any environment.So there has no browser constraint on it. Node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.</p>
            <h2>Questions: When should you use nodejs and when should you use mongodb?</h2>
            <h3>Answer: </h3>
            <p>Nodejs is a Javascript engine that I can write any application you want with (by programming in the Javascript language).It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB.Some project needs a programming environment and a runtime library that offers you basic programming tools and can compile and interpret your code. Nodejs is such as tool for the Javascript programming language. As if your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.Different databases have different strengths.It's a whole different question to choose the right/best database for what you're doing.</p>
            <h2>Questions: Differences between sql and nosql databases.?</h2>
            <h3>Answer: </h3>
            <p>SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). SQL databases are best suited for complex queries,Vertically Scalable .NoSQL databases are not so good for complex queries,Horizontally scalable.</p>
        </div>
        </div>
    );
};

export default Blogs;