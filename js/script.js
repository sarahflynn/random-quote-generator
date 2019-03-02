/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote: 'Humans are allergic to change.They love to say, ‘We’ve always done it this way.’ I try to fight that.That’s why I have a clock on my wall that runs counterclockwise.',
    source: 'Grace Hopper',
    citation: 'Code Like a Girl'
  },
  {
    quote: 'They never asked me to go back over (my calculations) because when I did it, I had done my best, and it was right.',
    source: 'Katherine Coleman Goble Johnson'
  },
  {
    quote: 'When I first started using the phrase software engineering, it was considered to be quite amusing. They used to kid me about my radical ideas. Software eventually and necessarily gained the same respect as any other discipline.',
    source: 'Margaret Hamilton',
    year: 2014
  },
  {
    quote: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.',
    source: 'Marie Curie'
  },
  {
    quote: 'The quality, relevance, and impact of the products and services output by the technology sector can only be improved by having the people who are building them be demographically representative of the people who are using them.',
    source: 'Tracy Chou'
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/


function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

console.log('random quote', getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let html = '';
  let quoteBox;
  let quote = getRandomQuote();

  html += `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`
  if(quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`
  } else if(quote.year) {
    `<span class="year">${quote.year}</span>`
  }
  html += `</p>`;
  quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = html;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.