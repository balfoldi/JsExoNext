const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

console.log("titles:")
let titles = books.map(function(book){
    return book.title
})
console.log(titles)

console.log('All books were renteds?')
let noRentedBooks = books.filter(function(book){
  return book.rented == 0
})
console.log(noRentedBooks.length +" book wasn't rented")
output = true
if(noRentedBooks.length > 0 ){ output = false }
console.log("it's " + output)

console.log("best renter boook.")
let bookRented = books.map(function(book){
  return book.rented
})
console.log(bookRented.sort().slice(-1)[0] )
var bestRented = bookRented.sort().slice(-1)[0] 
console.log(bestRented)
let bestRentedBook = books.filter(function(book){
  console.log(book.rented + " =? " + bestRented)
  return book.rented == bestRented
})
console.log(bestRentedBook)

console.log("worst renter boook.")
let bookRented2 = books.map(function(book){
  return book.rented
})
console.log(bookRented2.sort()[0] )
var worstRented = bookRented2.sort()[0] 
console.log(worstRented)
let worstRentedBook = books.filter(function(book){
  console.log(book.rented + " =? " + worstRented)
  return book.rented == worstRented
})
console.log(worstRentedBook)

var id = 133712
console.log(`With the book id:'${id}'`)
let filterIdBooks = books.filter(function(book){
  return book.id != id
})
console.log(filterIdBooks)
