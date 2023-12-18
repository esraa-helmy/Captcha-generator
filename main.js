// ^ Element
var quoteButtonEl = document.getElementById("quoteButton");
var quoteTextEl = document.getElementById("quoteText");
var quoteAuthorEl = document.getElementById("quoteAuthor");


// & function

function generateQuote () {
    
    var quotes =[
        {
            text:"“Be yourself; everyone else is already taken.”",
            author:"― Oscar Wilde"
        },
        {
            text:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
            author:"― Marilyn Monroe"
        },
        {
            text:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            author:"― Albert Einstein"
        },
        {
            text:"“So many books, so little time.”",
            author:"― Frank Zappa"
        },
        {
            text:"““Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.””",
            author:"― Bernard M. Baruch"
        },
        {
            text:"“You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”",
            author:"― William W. Purkey"
        },
        {
            text:"“You only live once, but if you do it right, once is enough.”",
            author:"― Mae West"
        },

    ]
    var quotesText = "";
    var quotesAuthor = "";

    for (let i = 0; i <1; i++) {
        
        quotesText+=quotes[Math.trunc(Math.random(i)*quotes.length)].text
        console.log(quotesText)
        quotesAuthor+=quotes[Math.trunc(Math.random(i)*quotes.length)].author
        console.log(quotesAuthor)
    }
    quoteTextEl.innerHTML = quotesText
    quoteAuthorEl.innerHTML = quotesAuthor

}
quoteButtonEl.onclick=generateQuote