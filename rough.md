# Intro

# About me

# Let's Learn ES6

# Let's Code along

# Talk break down
- Define what a design pattern is
- Look at an example pattern
- Pub/Sub
- Flux
- Redux

# What is a design pattern?

Design pattern is a reusable solution to a common problem. 

    "Each pattern describes a problem which occurs over and over again in our environment, and then describes the core solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice."

    - Christopher Alexander


Christopher Alexander is actually an Architect. We is considered to be the 
father of the pattern language movement.

# History of design patterns

Alexander introduced the idea of a Design Pattern. The concept of pattern languages and design patterns goes back to the 1960's. 

These patterns up us identify a problem and pick the appropriate solution. Understanding these patterns allows us to pick from a catalog of trusted abstractions.


    For instance, in Christopher Alexander's work, bus stops and waiting rooms in a surgery center are both within the context for the pattern "A PLACE TO WAIT".
    - Wikipedia



# Four Element of a pattern

1. Pattern Name
2. Problem
3. Solution
4. Consequences 

# Name spacing pattern

This is a simple pattern, and maybe one that you didn't know you have been using!

```js
const app = {};

app.events = function() {};
app.init = function() {};
```

Using a single object to contain our application, we have using a simple pattern to prevent pollution of the global scope. 

This pattern is simple but really solves some issues for us.

- Name clashes
- Pollution of global scope


# Module Pattern

The module pattern is a pattern specific to javascript that allows us to reduce global variables and contain the implementation of our code hidden from the outside world.

- Create privacy, allows us to hide how our module is implemented
- Allows us to create an interface for us to access the internals. 


```js
const person = (function() {
    let age = 31;
    return {
        getAge() {
            return age;
        }
        birthday() {
            age = age + 1;
            return age;
        }
    }
})();
```


```js
person.getAge();

person.birthday();
```


# Publish/Subscribe (Observer) basics



Break it down, introduce key players


# Diagram for pub sub

# Flux basics

Created at Facebook to help solve state issues in their.

Important to remember Flux isn't just for React, it is a pattern! Can be used anywhere

Dispatcher > Store > Component > Action

Component listens to store(reacts only to chosen event)
Component creates action

Dispatcher is like the pub/sub, however dispatcher sends all actions off instead of the one subscribed too.

Dispatcher is used to register listeners and passes all the actions to every listener. 

# Diagram

# Connection to Observer

# Redux basics

Important to remember Redux is just for React, it is a pattern! Can be used anywhere.

Reducer > One Store > Provider Component > Components > Actions

Store is a big object, immutable! Allows you to preserve state!

Reduces replace the stores from Flux, and each handles a certain portion of data. All reducers are called when an Action is fired.

# Diagram

# Connection to Observer
