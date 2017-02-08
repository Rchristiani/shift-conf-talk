# Intro

# About me

# Let's Learn ES6

# Let's Code along

# Talk break down

# What is a design pattern?

    "Each pattern describes a problem which occurs over and over again in our environment, and then describes the core solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice."

    - Christopher Alexander

# History of design patterns

# Four Element of a pattern

1. Pattern Name
2. Problem
3. Solution
4. Consequences 

# Module Pattern

Show as an example

# Publish/Subscribe (Observer) basics

Break it down, introduce key players


# Diagram for pub sub

# Flux basics

Important to remember Flux is just for React, it is a pattern! Can be used anywhere

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
