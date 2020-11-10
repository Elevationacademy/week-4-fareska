
////////////////////AJAX & Intro to APIs/////////////////

//////////// Exercise 1
/*
const getBook = (bookNum) => {$.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${bookNum}`, function(result){
    console.log(result.items[0].volumeInfo.title)
})}

getBook(9782806269171) //9782806269171 - The Little Prince: Book Analysis

getBook(1440633908) //1440633908 - Of Mice and Men by John Steinbeck

getBook(9781945048470) // 9781945048470 - The Alchemist by Paulo Coelho

getBook(9780307417138)  // 9780307417138 - Hitchhiker's Guide to the Galaxy

//////////// Exercise 2

const getInfo = (queryType ,queryValue) => {$.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){
    if(queryType == "isbn" || "title"){
        if (queryType == "isbn"){console.log(result.items[0].volumeInfo.title)}
        else{console.log(`book by ${result.items[0].volumeInfo.authors}`)}
    }else {alert("you didn't enter what you looking for")}
})}

getInfo("isbn", 9789814561778)

getInfo("title", "How to Win Friends and Influence People")

getInfo( "How to Win Friends and Influence People") //// why it didn't alert ??????????
*/
//////////// Exercise 3

const getBookDetails = (queryType ,queryValue) => {$.get(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`, function(result){
    console.log(result.items[0].volumeInfo.title);                ////// return the title
    console.log(`book by ${result.items[0].volumeInfo.authors}`); ////// return the author name
    console.log(result.items)                                  /////// return the isbn number

    const dataArray= result.items
    dataArray.forEach(element => {
        console.log(element.volumeInfo.title)
        console.log(element.volumeInfo.authors)
        element.volumeInfo.industryIdentifiers.forEach(
            element => { console.log(element.type) }
        )
        element.volumeInfo.industryIdentifiers.forEach(
            element => { console.log(element.identifier) }
        )
    });
})}

getBookDetails("isbn", 9782806269171)
