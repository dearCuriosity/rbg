/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

var quotes = [
    {
        quote: 'Women will have achieved true equality when men share with them the responsibility of bringing up the next generation.',
        source: 'Ruth Bader Ginsburg',
        citation: '',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: ''
    },
    {
        quote: 'When a thoughtless or unkind word is spoken, best tune out. Reacting in anger or annoyance will not advance one’s ability to persuade.',
        source: 'Ruth Bader Ginsburg',
        citation: 'La Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2016'
    },
    {
        quote: 'Women will have achieved true equality when men share with them the responsibility of bringing up the next generation.',
        source: 'Ruth Bader Ginsburg',
        citation: 'El Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2001'
    },
    {
        quote: 'If there was one decision I would overrule, it would be Citizens United. I think the notion that we have all the democracy that money can buy strays so far from what our democracy is supposed to be.',
        source: 'Ruth Bader Ginsburg',
        citation: 'La Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2014'
    },
    {
        quote: 'Fight for the things that you care about, but do it in a way that will lead others to join you.',
        source: 'Ruth Bader Ginsburg',
        citation: 'Le Google',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: '2015'
    },
    {
        quote: 'If you want to be a true professional, do something outside yourself.',
        source: 'Ruth Bader Ginsburg',
        citation: '',
        url: 'www.google.com/search?hl=en&as_q=Ruth+Bader+Ginsburg',
        year: ''
    },
];

//console.table(quotes);
let previousQuote = -1;
var timer = 100;

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let quotesCount = quotes.length;
    //console.log(quotesCount);
    //const randomNumber = Math.floor(Math.random() * quotesCount);
    const randomQuote = Math.floor(Math.random() * quotesCount);
    //const testQuote = Math.floor(Math.random() * quotesCount) - 1;
    //console.log(`Random Quote = ${randomQuote}, Test Quote = ${testQuote}, Random Number = ${randomNumber}`);
    //console.log(`Random Quote = ${randomQuote}, Previous Quote = ${previousQuote}`);
    return randomQuote;
}

function randomBackgroundColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    // To Do find a way to programmatically limit randomization to acceptable color bands that work will with rbg animation layer
}


// Timer functions used for changing quote/colors
function initiateTimer() {
    timer = setInterval(printQuote, 10000);
}

function clearTimer() {
    clearInterval(timer);
}

/***
 * `printQuote` function
***/

function printQuote() {

    // Make sure same quote doesn't repeat
    do {
        currentQuote = getRandomQuote();
    }
    while (currentQuote === previousQuote);

    // Update variable to catch repeats
    previousQuote = currentQuote;

    // Build HTML
    let html = `<p class="quote--text">${quotes[currentQuote].quote}</p> 
                <p class="quote--attribution">${quotes[currentQuote].source}`;
    //console.log(html);
    //console.log(`Year=${quotes[currentQuote].year}`);
    if (quotes[currentQuote].year >= 0 && quotes[currentQuote].year != '') {
        html += `, <span class="quote--year">${quotes[currentQuote].year}</span></p>`;
    }
    else {
        html += `</p>`;
    }

    if (quotes[currentQuote].citation != '') {
        if (quotes[currentQuote].url != '') {
            html += `<p class="quote--source">Source: <a href="https://${quotes[currentQuote].url}">${quotes[currentQuote].citation}</a> &#x1f9d0;</p>`;
        }
    }
    else {
        html += `<p class="quote--source">Source: Unknown &#x1f612;</p>`;
    }

    // Write HTML
    document.getElementById('testid').innerHTML = html;
    randomBackgroundColor();
    // TO DO rewrite using insertAdjacentHTML and some way to remove previously added nodes
    // document.getElementById('testid').insertAdjacentHTML('beforeend',html);

    // clear and set timers when function runs
    clearTimer();
    console.log(`Cleared Timer = ${timer}`);
    initiateTimer();
    console.log(`Initiating Timer = ${timer}`);
}

// fill empty div on initial page load
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

