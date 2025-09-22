function updateClock(){
const date=new Date()
const day=date.getDate()
const month=date.getMonth()
const year=date.getFullYear()
const hours=date.getHours()
const minutes=date.getMinutes()
const second=date.getSeconds()
const currentDateParagraph = document.querySelector(".time");
const formattedDate =`${hours}:${minutes}:${second} | ${day}-${month}-${year}`
currentDateParagraph.textContent=formattedDate
}
setInterval(updateClock, 1000);