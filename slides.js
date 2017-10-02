const q1copy = `
Arrow functions are a little more than just syntactic sugar; yes, they make function declaration
a little more compact, but they also have some functional differences.  Most importantly, they
bind the "this" variable lexcially instead the context-dependent rules for regular functions or
methods.  To learn more, I recommend <a href="https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881">Mariya Diminsky's article</a>
on the subject and, of coruse, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN's documentation</a>.
`

const q2copy = `
The <i>spread operator</i> provides a way to treat arrays as if they were individual values separated by commas (hence the
name: you are "spreading" the array values out with commas).  I recommend the David Walsh article,
<a href="https://davidwalsh.name/spread-operator">6 Great Uses of the Spread Operator</a>, and the
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">MDN documentation</a>.
`

module.exports = [
  { 
    id: '45123041-9a4c-4035-9e69-4e82b3e4a926', 
    name: 'Q1',
  },
  { id: 'c8cfe426-8495-4e40-bc31-dd29991a4ccc', name: 'Q2' },
  { id: '830acec0-c84a-4af1-8134-79be1b7d6469', name: 'Q3' },
  { id: '3edd6c5c-4949-4154-bfe3-4fe94e45332f', name: 'Q4' },
]
