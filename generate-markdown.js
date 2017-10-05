const toMarkdown = require('to-markdown')
const fs = require('fs')
const slides = require('./slides')

const html = slides
  .map(slide => `<h3>${slide.title}</h3>\n<p>${slide.copy}</p>`)
  .join('\n')

fs.writeFileSync('SLIDES.md', toMarkdown(html))



