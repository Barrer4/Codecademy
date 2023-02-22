//Generates random number
function getRandomNumber(num){
   return Math.floor(Math.random() * num)
}

//Array with the quote parts
const quoteParts = [
   start = ["Love", "Faith", "Hope", "Friendship"],
   middle = ['consists of', 'does not eliminate', 'is about doing'],
   end = ['good things','unbelievable actions', 'wonderful deeds']
]

const quote = []

quoteParts.forEach(part => {
   let index = getRandomNumber(part.length)
   quote.push(part[index])
})

function getQuote(){
   console.log(quote.join(' '))
}

getQuote()