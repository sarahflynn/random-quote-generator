/******************************************
A Random Quote Generator
******************************************/

// Quotes array

let quotes = [
  {
    quote: 'Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.',
    source: 'Grace Hopper',
    citation: 'Code Like a Girl',
    tags: ['science', 'humor']
  },
  {
    quote: 'They never asked me to go back over (my calculations) because when I did it, I had done my best, and it was right.',
    source: 'Katherine Coleman Goble Johnson',
    tags: ['science', 'NASA']
  },
  {
    quote: 'When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline.',
    source: 'Margaret Hamilton',
    year: 2014,
    tags: ['science', 'engineering', 'software']
  },
  {
    quote: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
    source: 'Marie Curie',
    tags: ['science', 'fear']
  },
  {
    quote: 'The quality, relevance, and impact of the products and services output by the technology sector can only be improved by having the people who are building them be demographically representative of the people who are using them.',
    source: 'Tracy Chou',
    tags: ['technology', 'business'],
  }
];

// Random quote generator function

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to generate random individual color value for RGB
function randomColorValue() {
  return Math.floor(Math.random() * 256);
}

// Function to create random RGB value using randomColorValue()
function randomRgbCode() {
  return `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
}

// Print quote funciton calls getRandomQuote function, conditionally adds quote values to an html string, and changes the inner HTML of the quote-box div

function printQuote() {
  let html = '';
  let quoteBox;
  let quote = getRandomQuote();

  html += `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;

  if(quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`
  } 
  
  if(quote.year) {
    html += `<span class="year">${quote.year}</span>`
  }
  
  if(quote.tags) {
    html += `<p class="tags">Tags: `
    for(let i = 0; i < quote.tags.length; i++) {
      html += `${quote.tags[i]}`
      if(i !== (quote.tags.length - 1)) {
        html += ', ';
      }
    }
    html += `</p>`
  }

  html += `</p>`;

  document.body.style.backgroundColor = randomRgbCode();
  quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = html;
}

// Calls printQuote() to update page every 2 seconds

setInterval(function() {
  printQuote();
}, 2000);

// Calls printQuote() in response to button click event

document.getElementById('loadQuote').addEventListener("click", printQuote, false);