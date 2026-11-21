const quotes = [
    {
        text: "Believe in yourself.",
        author: "Unknown"
    },
    {
        text: "Never give up on your dreams.",
        author: "Nelson Mandela"
    },
    {
        text: "Every day is a new beginning.",
        author: "Unknown"
    },
    {
        text: "Stay positive and work hard.",
        author: "Unknown"
    },
    {
        text: "Success comes from hard work.",
        author: "Unknown"
    }
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        quotes[random].text;

    document.getElementById("author").innerText =
        "- " + quotes[random].author;
}