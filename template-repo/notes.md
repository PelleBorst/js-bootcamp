# Notes



## Chapter 1
Values
To be able to work with such quantities of bits without getting lost, we must separate them into chunks that represent pieces of information. In a JavaScript environment, those chunks are called values. Every value has a type that determines its role.
To create a value, you must merely invoke its name.

Numbers
JavaScript uses a fixed number of bits, 64 of them, to store a single number value. There are only so many patterns you can make with 64 bits, which means that the number of different numbers that can be represented is limited. 

Arithmetic
The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them. The % symbol is used to represent the remainder operation.

Special numbers
There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers. The first two are Infinity and -Infinity, which represent the positive and negative infinities. Infinity - 1 is still Infinity, and so on.
NaN stands for “not a number”, even though it is a value of the number type.

Strings
Strings are used to represent text. They are written by enclosing their content in quotes. When an n character occurs after a backslash, it is interpreted as a newline. Similarly, a t after a backslash means a tab character.

Unary operators
Not all operators are symbols. Some are written as words. One example is the typeof operator, which produces a string value naming the type of the value you give it.

Boolean values
It is often useful to have a value that distinguishes between only two possibilities, like “yes” and “no” or “on” and “off”. For this purpose, JavaScript has a Boolean type, which has just two values, true and false, which are written as those words.

Logical operators
The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.
The || operator denotes logical or. It produces true if either of the values given to it is true. Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.



Empty values
There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information. The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time.

Automatic type conversion
When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called type coercion. When you do not want any type conversions to happen, there are two additional operators: === and !==.

Short-circuiting of logical operators
The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.


## Chapter 2
Expressions and statements
A fragment of code that produces a value is called an expression. If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements.

Bindings
To catch and hold values, JavaScript provides a thing called a binding, or variable. After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds.

The environment
The collection of bindings and their values that exist at a given time is called the environment.

Functions
A lot of the values provided in the default environment have the type function. A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program. Executing a function is called invoking, calling, or applying it.

The console.log function
In the examples, I used console.log to output values. Most JavaScript systems (including all modern web browsers and Node.js) provide a console.log function that writes out its arguments to some text output device.

Return values
Showing a dialog box or writing text to the screen is a side effect. A lot of functions are useful because of the side effects they produce. Functions may also produce values, in which case they don’t need to have a side effect to be useful. When a function produces a value, it is said to return that value.

Control flow
When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom.

Conditional execution
Not all programs are straight roads. We may, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called conditional execution. Conditional execution is created with the if keyword in JavaScript.

While and Do loops
Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state. A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like if. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.
Breaking out of a loop
Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

Updating bindings succinctly
Especially when looping, a program often needs to “update” a binding to hold a value based on that binding’s previous value.

Dispatching on a value with switch
There is a construct called switch that is intended to express such a “dispatch” in a more direct way. You may put any number of case labels inside the block opened by switch. The program will start executing at the label that corresponds to the value that switch was given, or at default if no matching value is found.


## Chapter 3
Defining a function
A function is created with an expression that starts with the keyword function. Functions have a set of parameters and a body, which contains the statements that are to be executed when the function is called. A function can have multiple parameters or no parameters at all.

A return statements determines the value returned. Some functions produce a value, and some don’t. 

Bindings and scopes
The scope of a binding is the part of the program in which the binding is visible. Bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings.

Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. The var keyword is visible throughout the whole function and the global scope.
Each scope can look around in the scope around it.

Nested scope
Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality. 

Functions as values


Declaration notation
When the function keyword is used at the start of a statement, it works differently. This is a function declaration. The statement defines the binding square and points it at the given function.

Arrow funtions
Instead of the function keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character. The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

The call stack
The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”.


Optional arguments
JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.

The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it.

The upside is that this behavior can be used to allow a function to be called with different numbers of arguments.

Closure
What happens to local bindings when the function call that created them is no longer active? This feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure.

Recursion
A function that calls itself is called recursive.
But this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than the looping version. Running through a simple loop is generally cheaper than calling a function multiple times.

Growing functions
Extend a function based on the customers needs. 


## Chapter 4
Data sets
The notation for getting at the elements inside an array also uses square brackets.
The first index of an array is zero, not one. So the first element is retrieved with listOfNumbers[0].

Properties
Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. So if you know that the property you are interested in is called color, you say value.color. If you want to extract the property named by the value held in the binding i, you say value[i].

Methods
The push method adds values to the end of an array, and the pop method does the opposite, removing the last value in the array and returning it.

Objects
To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names. There’s an Object.assign function that copies all properties from one object into another.

Mutability
The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable—it is impossible to change values of those types. Objects work differently. You can change their properties, causing a single object value to have different content at different times.

The lycanthrope’s log
Correlation is a measure of dependence between statistical variables. Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related.

Array loops
When a for loop looks like this, with the word of after a variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures.

Further arrayology
To search for a specific value, arrays provide an indexOf method. Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching. Another fundamental array method is slice, which takes start and end indices and returns an array that has only the elements between them. The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

Strings and their properties
The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string. The zeroPad function from the previous chapter also exists as a method. It is called padStart and takes the desired length and padding character as arguments. You can split a string on every occurrence of another string with split and join it again with join.

The Math object
As we’ve seen, Math is a grab bag of number-related utility functions, such as Math.max (maximum), Math.min (minimum), and Math.sqrt (square root). If we want a whole random number instead of a fractional one, we can use Math.floor (which rounds down to the nearest whole number) on the result of Math.random.

Json
What we can do is serialize the data. That means it is converted into a flat description. A popular serialization format is called JSON (pronounced “Jason”), which stands for JavaScript Object Notation. JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.


## Chapter 5
Abstractions
Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level. When programming, we can’t rely on all the words we need to be waiting for us in the dictionary.

Higher order functions
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. Higher-order functions allow us to abstract over actions, not just values. They come in several forms. You can write functions that change other functions.

Script data set
One area where higher-order functions shine is data processing. 
Such an object tells us the name of the script, the Unicode ranges assigned to it, the direction in which it is written, the (approximate) origin time, whether it is still in use, and a link to more information. The direction may be "ltr" for left to right, "rtl" for right to left (the way Arabic and Hebrew text are written), or "ttb" for top to bottom (as with Mongolian writing).

Filtering array’s
Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is pure. It does not modify the array it is given. Like forEach, filter is a standard array method. The example defined the function only to show what it does internally.

Transforming with map
The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.

Summarizing with reduce
The higher-order operation that represents this pattern is called reduce (sometimes also called fold). It builds a value by repeatedly taking a single element from the array and combining it with the current value.

Composability
Higher-order functions start to shine when you need to compose operations.

Strings and character codes
The some method is another higher-order function. It takes a test function and tells you whether that function returns true for any of the elements in the array. 
JavaScript’s charCodeAt method gives you a code unit, not a full character code. The codePointAt method, added later, does give a full Unicode character.


## Chapter 6
Encapsulation
The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state. Separating interface from implementation is a great idea. It is usually called encapsulation.

Methods
Methods are nothing more than properties that hold function values. Usually a method needs to do something with the object it was called on. When a function is called as a method—looked up as a property and immediately called, as in object.method()—the binding called this in its body automatically points at the object that it was called on.

Prototype
A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on. As you guess, Object.getPrototypeOf returns the prototype of an object.
Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. 

Classes
JavaScript’s prototype system can be interpreted as a somewhat informal take on an object-oriented concept called classes. A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class. JavaScript provides a way to make defining this type of function easier. If you put the keyword new in front of a function call, the function is treated as a constructor. 

Class notation
The class keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place. Any number of methods may be written inside the declaration’s braces.

Overriding derived properties
When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.

Maps
A map (noun) is a data structure that associates values (the keys) with other values. Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—such as objects—you cannot use an object as your map.
Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.


Polymorphism
When you call the String function (which converts a value to a string) on an object, it will call the toString method on that object to try to create a meaningful string from it. 
When a piece of code is written to work with objects that have a certain interface—in this case, a toString method—any kind of object that happens to support this interface can be plugged into the code, and it will just work. This technique is called polymorphism.

Symbols
It is possible for multiple interfaces to use the same property name for different things. It would not be possible for an object to conform to both that interface and the standard use of toString. When I claimed that property names are strings, that wasn’t entirely accurate. They usually are, but they can also be symbols. Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

The iterator interface
The object given to a for/of loop is expected to be iterable. This means it has a method named with the Symbol.iterator symbol (a symbol value defined by the language, stored as a property of the Symbol function).

Getters, setters and statics
Even properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing get in front of the method name in an object expression or class declaration.
Whenever someone reads from this object’s size property, the associated method is called. You can do a similar thing when a property is written to, using a setter.
Inside a class declaration, methods that have static written before their name are stored on the constructor.

Inheritance
JavaScript’s prototype system makes it possible to create a new class, much like the old class, but with new definitions for some of its properties. The prototype for the new class derives from the old prototype but adds a new definition for, say, the set method.
In object-oriented programming terms, this is called inheritance. The new class inherits properties and behavior from the old class. The use of the word extends indicates that this class shouldn’t be directly based on the default Object prototype but on some other class. This is called the superclass. The derived class is the subclass.

The instanceof operator
It is occasionally useful to know whether an object was derived from a specific class. For this, JavaScript provides a binary operator called instanceof. The operator will see through inherited types, so a SymmetricMatrix is an instance of Matrix. The operator can also be applied to standard constructors like Array.


## Chapter 8
Language
There are some things that JavaScript does complain about. Writing a program that does not follow the language’s grammar will immediately make the computer complain.
The process of finding mistakes—bugs—in programs is called debugging.

Strict mode
JavaScript can be made a little stricter by enabling strict mode. This is done by putting the string "use strict" at the top of a file or a function body.
Normally, when you forget to put let in front of your binding, as with counter in the example, JavaScript quietly creates a global binding and uses that. In strict mode, an error is reported instead. Another change in strict mode is that the this binding holds the value undefined in functions that are not called as methods.

Types
types provide a useful framework for talking about programs. A lot of mistakes come from being confused about the kind of value that goes into or comes out of a function. If you have that information written down, you’re less likely to get confused.

Testing
Computers are good at repetitive tasks, and testing is the ideal repetitive task. Automated testing is the process of writing a program that tests another program.

Debugging
An alternative to using console.log to peek into the program’s behavior is to use the debugger capabilities of your browser. Browsers come with the ability to set a breakpoint on a specific line of your code. When the execution of the program reaches a line with a breakpoint, it is paused, and you can inspect the values of bindings at that point.

Error propagation
In many situations, mostly when errors are common and the caller should be explicitly taking them into account, returning a special value is a good way to indicate an error. It does, however, have its downsides. First, what if the function can already return every possible kind of value?

Exceptions
Exceptions are a mechanism that makes it possible for code that runs into a problem to raise (or throw) an exception. An exception can be any value. You may remember the stack of function calls that was mentioned in Chapter 3. An exception zooms down this stack, throwing away all the call contexts it encounters. The throw keyword is used to raise an exception. Catching one is done by wrapping a piece of code in a try block, followed by the keyword catch. When the code in the try block causes an exception to be raised, the catch block is evaluated, with the name in parentheses bound to the exception value.



Cleaning up after exceptions
This means when code has several side effects, even if its “regular” control flow looks like they’ll always all happen, an exception might prevent some of them from taking place.

Selective catching
When a catch body is entered, all we know is that something in our try body caused an exception. But we don’t know what did or which exception it caused.

Assertions
Assertions are checks inside a program that verify that something is the way it is supposed to be. They are used not to handle situations that can come up in normal operation but to find programmer mistakes. I do not recommend trying to write assertions for every possible kind of bad input.


## Chapter 9
Modules
A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).
The relations between modules are called dependencies. When a module needs a piece from another module, it is said to depend on that module.

Packages
A package is a chunk of code that can be distributed (copied and installed). It may contain one or more modules and has information about which other packages it depends on. A package also usually comes with documentation explaining what it does so that people who didn’t write it might still be able to use it.

Improvised modules
Until 2015, the JavaScript language had no built-in module system. Yet people had been building large systems in JavaScript for more than a decade, and they needed modules.

Evaluating data as code
The most obvious way is the special operator eval, which will execute a string in the current scope. This is usually a bad idea because it breaks some of the properties that scopes normally have, such as it being easily predictable which binding a given name refers to.
A less scary way of interpreting data as code is to use the Function constructor. It takes two arguments: a string containing a comma-separated list of argument names and a string containing the function body.

CommonJS
The most widely used approach to bolted-on JavaScript modules is called CommonJS modules. Node.js uses it and is the system used by most packages on NPM.
The main concept in CommonJS modules is a function called require. When you call this with the module name of a dependency, it makes sure the module is loaded and returns its interface.
To avoid loading the same module multiple times, require keeps a store (cache) of already loaded modules. When called, it first checks if the requested module has been loaded and, if not, loads it.

ECMAScript modules
An ES module’s interface is not a single value but a set of named bindings. The preceding module binds formatDate to a function. When you import from another module, you import the binding, not the value, which means an exporting module may change the value of the binding at any time, and the modules that import it will see its new value.
Another important difference is that ES module imports happen before a module’s script starts running. That means import declarations may not appear inside functions or blocks, and the names of dependencies must be quoted strings, not arbitrary expressions.



Building and bundeling
Including a modular program that consists of 200 different files in a web page produces its own problems. If fetching a single file over the network takes 50 milliseconds, loading the whole program takes 10 seconds, or maybe half that if you can load several files simultaneously. Apart from the number of files, the size of the files also determines how fast they can be transferred over the network. Thus, the JavaScript community has invented minifiers. These are tools that take a JavaScript program and make it smaller by automatically removing comments and whitespace, renaming bindings, and replacing pieces of code with equivalent code that take up less space.


## Chapter 10
Asynchronicity
In a synchronous programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. This stops your program for the time the action takes.
An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run.

Callbacks
One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a callback function. The action is started, and when it finishes, the callback function is called with the result.
The defineRequestType function defines a new type of request. The example adds support for "note" requests, which just sends a note to a given nest.

Promises
A promise is an asynchronous action that may complete at some point and produce a value. It is able to notify anyone who is interested when its value is available.
The easiest way to create a promise is by calling Promise.resolve. This function ensures that the value you give it is wrapped in a promise. If it’s already a promise, it is simply returned—otherwise, you get a new promise that immediately finishes with your value as its result. To get the result of a promise, you can use its then method. To create a promise, you can use Promise as a constructor. It has a somewhat odd interface—the constructor expects a function as argument, which it immediately calls, passing it a function that it can use to resolve the promise.

Failure
One of the most pressing problems with the callback style of asynchronous programming is that it makes it extremely difficult to make sure failures are properly reported to the callbacks.

Networks are hard
To build an asynchronous loop, for the retries, we need to use a recursive function—a regular loop doesn’t allow us to stop and wait for an asynchronous action. The attempt function makes a single attempt to send a request.

