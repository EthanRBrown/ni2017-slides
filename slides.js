const q1copy = `Arrow functions are a little more than just syntactic sugar; yes, they make function declaration
a little more compact, but they also have some functional differences.  Most importantly, they
bind the "this" variable lexcially instead the context-dependent rules for regular functions or
methods.  To learn more, I recommend <a href="https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881">Mariya Diminsky's article</a>
on the subject and, of coruse, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN's documentation</a>.  The answer to the question in my presentation is: 1) if the body of the arrow function isn't a block statement (denoted by curly braces), the body must be an expression (which resolves to a value), and there is an implicit <code>return</code> statement (and it's a syntax error to provide a return statement in this case); 2) <code>this</code> is bound lexically (i.e. it takes on the value of <code>this</code> where the arrow function was declared, not determined at execution time like a normal function; and 3) the <code>arguments</code> variable isn't available like it is in a regular function (you can use argument rest parameters to get all arguments).`
const q2copy = `The <i>spread operator</i> provides a way to treat arrays as if they were individual values separated by commas (hence the
name: you are "spreading" the array values out with commas).  I recommend the David Walsh article,
<a href="https://davidwalsh.name/spread-operator">6 Great Uses of the Spread Operator</a>, and the
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">MDN documentation</a>.`
const q3copy = `The object spread operator is newer, and not yet standard, but I love how compoact it makes object composition.  I recommend
reading <a href="https://davidwalsh.name/merge-objects">Merge Object Properties with the Spread Operator</a>.`
const q4copy = `Axel Rauschmayer explains destructuring quite eloquently (and comprehensively) in his article
<a href="http://2ality.com/2015/01/es6-destructuring.html">Destructuring and Praameter Hnadling in ECMAScript 6</a>.  See also 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">MDN documentation</a>.`
const q5copy = `Computed property keys help make object construction code much more compact, and help make functional programming more smooth.
I recommend Ben Ilegbodu's <a href="http://www.benmvp.com/learning-es6-enhanced-object-literals/">Learning ES6: Enhanced Object Literals</a>
 (feel free to skip to the "Computed Property Keys" section).  See also MDN's <a href="">object initializer documentation</a>.`
const q6copy = `There are lots of good resources for learning about promises.  Among the best are 
Jecelyn Yeen's <a href="https://scotch.io/tutorials/javascript-promises-for-dummies">Promises for Dummies</a> and 
<a href="https://developers.google.com/web/fundamentals/primers/promises">JavaScript Promises: an Introduction</a> by
Jake Archibald of Google.  See also the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">MDN documentation</a>.`
const q7copy = `To learn about string templates, in addition to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">MDN documentation</a>, 
Keith Cirkel has a great introduction in <a href="https://www.keithcirkel.co.uk/es6-template-literals/">ES6 Template Literals, the Handlebars Killer?</a>.`
const q8copy = `Mostafa Gaafar makes a great case for async/await in <a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9">6 Reasons Why JavaScript's Async/Await Blows Promises Away (Tutorial)</a>,
and Nicolás Bevacqua's <a href="https://ponyfoo.com/articles/understanding-javascript-async-await">Understanding JavaScript's async await</a> offers a great history and introduction.  The
<a href="">MDN documentation</a> is excellent, as always.`
const q9copy = `For me, the biggest sell of class fields is making React code less cumbersome.  So if React is your jam, I would start with
Peter Bengtsson's <a href="https://www.peterbe.com/plog/public-class-fields">Public Class Fields Saves Sooo Many Keystrokes in React Code</a>.  For a general introduction, see
Axel Rauschmayer's <a href="http://2ality.com/2017/07/class-fields.html">ES Proposal: Class Fields</a>.`
const q10copy = `To get the real dirt on JavaScript's for...of statement, it's critcial to understand iterables in JavaScript, and for that it's
hard to beat Axel Rauschmayer's article <a href="http://2ality.com/2015/02/es6-iteration.html">Iterables and Iterators in ECMAScript 6</a>.
For a straightforward explanation with good examples, see the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">MDN documentation</a>.`
const q11copy = `For an excellent and very technical explanation of ECMASCript Modules (ESM) vs CommonJS Modules (CJS), see
James Snell's <a href="https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e">Node.js, TC-39, and Modules</a>.
It's also worth reading Axel Rauschmayer's take on the '.mjs' extension: <a href="http://2ality.com/2017/05/es-module-specifiers.html">Module Specifiers: What's New with ES Modules?</a>
For a practical introduction, see Jason Orendorff's <a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 In Depth: Modules</a>.`

module.exports = [
  { id: '45123041-9a4c-4035-9e69-4e82b3e4a926', name: 'Q1', title: 'Arrow Functions', copy: q1copy },
  { id: 'c8cfe426-8495-4e40-bc31-dd29991a4ccc', name: 'Q2', title: 'Array Spread / Rest Parameters', copy: q2copy },
  { id: '830acec0-c84a-4af1-8134-79be1b7d6469', name: 'Q3', title: 'Object Spread', copy: q3copy },
  { id: '3edd6c5c-4949-4154-bfe3-4fe94e45332f', name: 'Q4', title: 'Destructuring', copy: q4copy },
  { id: '41bd02ea-799d-4180-99ab-59ecafd17216', name: 'Q5', title: 'Computed Property Names / Property Shorthand', copy: q5copy },
  { id: 'dd76e23d-2b5a-4713-8bba-7a098ff7a925', name: 'Q6', title: 'Promises', copy: q6copy },
  { id: 'a5f57205-6f19-426a-8950-e07686c4a256', name: 'Q7', title: 'String Templates', copy: q7copy },
  { id: '33eaea79-a56a-4e24-b6db-1c96a3e18702', name: 'Q8', title: 'async / await', copy: q8copy },
  { id: '22ec7fb3-724a-4ea4-980c-c6e88296755a', name: 'Q9', title: 'Class Fields', copy: q9copy },
  { id: 'a4082215-de1d-4443-ac29-9c7a41441eb3', name: 'Q10', title: 'for...of', copy: q10copy },
  { id: '66040512-4f42-4afe-a65c-475e140c3052', name: 'Q11', title: 'export / import', copy: q11copy },
]
