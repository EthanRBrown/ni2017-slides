### Arrow Functions

Arrow functions are a little more than just syntactic sugar; yes, they make function declaration a little more compact, but they also have some functional differences. Most importantly, they bind the "this" variable lexcially instead the context-dependent rules for regular functions or methods. To learn more, I recommend [Mariya Diminsky's article](https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881) on the subject and, of coruse, [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Array Spread / Rest Parameters

The _spread operator_ provides a way to treat arrays as if they were individual values separated by commas (hence the name: you are "spreading" the array values out with commas). I recommend the David Walsh article, [6 Great Uses of the Spread Operator](https://davidwalsh.name/spread-operator), and the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).

### Object Spread

The object spread operator is newer, and not yet standard, but I love how compoact it makes object composition. I recommend reading [Merge Object Properties with the Spread Operator](https://davidwalsh.name/merge-objects).

### Destructuring

Axel Rauschmayer explains destructuring quiet eloquently (and comprehensively) in his article [Destructuring and Praameter Hnadling in ECMAScript 6](http://2ality.com/2015/01/es6-destructuring.html). See also [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Computed Property Names / Property Shorthand

Computed property keys help make object construction code much more compact, and help make functional programming more smooth. I recommend Ben Ilegbodu's [Learning ES6: Enhanced Object Literals](http://www.benmvp.com/learning-es6-enhanced-object-literals/) (feel free to skip to the "Computed Property Keys" section). See also MDN's <a href="">object initializer documentation</a>.

### Promises

There are lots of good resources for learning about promises. Among the best are Jecelyn Yeen's [Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies) and [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises) by Jake Archibald of Google. See also the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### String Templates

To learn about string templates, in addition to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), Keith Cirkel has a great introduction in [ES6 Template Literals, the Handlebars Killer?](https://www.keithcirkel.co.uk/es6-template-literals/).

### async / await

Mostafa Gaafar makes a great case for async/await in [6 Reasons Why JavaScript's Async/Await Blows Promises Away (Tutorial)](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9), and Nicolás Bevacqua's [Understanding JavaScript's async await](https://ponyfoo.com/articles/understanding-javascript-async-await) offers a great history and introduction. The <a href="">MDN documentation</a> is excellent, as always.

### Class Fields

For me, the biggest sell of class fields is making React code less cumbersome. So if React is your jam, I would start with Peter Bengtsson's [ES Proposal: Class Fields](Public Class Fields Saves Sooo Many Keystrokes in React Code</a>.  For a general introduction, see
Axel Rauschmayer's <a href=).

### for...of

To get the real dirt on JavaScript's for...of statement, it's critcial to understand iterables in JavaScript, and for that it's hard to beat Axel Rauschmayer's article [Iterables and Iterators in ECMAScript 6](http://2ality.com/2015/02/es6-iteration.html). For a straightforward explanation with good examples, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

### export / import

For an excellent and very technical explanation of ECMASCript Modules (ESM) vs CommonJS Modules (CJS), see James Snell's [Node.js, TC-39, and Modules](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e). It's also worth reading Axel Rauschmayer's take on the '.mjs' extension: [Module Specifiers: What's New with ES Modules?](http://2ality.com/2017/05/es-module-specifiers.html) For a practical introduction, see Jason Orendorff's [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/).
