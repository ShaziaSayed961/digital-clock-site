function updateClock(){
const date=new Date()
const day=date.getDate()
const month=date.getMonth()+1
const year=date.getFullYear()
const hours=date.getHours()
const minutes=date.getMinutes()
const second=date.getSeconds()
const currentDateParagraph = document.querySelector(".time");
const formattedDate =`${hours}:${minutes}:${second} | ${day}-${month}-${year}`
currentDateParagraph.textContent=formattedDate
}
setInterval(updateClock, 1000);
const quoteButton=document.getElementById('quote-btn')
const quoteGenerated=document.querySelector('.quote')
const quotesArray= [
  "Believe you can and you're halfway there.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t limit your challenges. Challenge your limits.",
  "Dream it. Wish it. Do it.",
  "Sometimes later becomes never. Do it now.",
  "The way to get started is to quit talking and begin doing.",
  "If you can dream it, you can do it.",
  "Your only limit is your mind.",
  "Doubt kills more dreams than failure ever will.",
  "Success is not for the lazy."
];

function randomQuote(){
    let randomIndex=Math.floor(Math.random()*quotesArray.length);
    return quotesArray[randomIndex]
}
quoteButton.addEventListener('click',()=>{
    quoteGenerated.innerText=randomQuote()
})
