/* DOM items */

let MainContainer = document.querySelector(".container-m");

let bookButton = document.querySelector(".book-btn");

let popUp = document.querySelector(".pop-up");

let background = document.querySelector(".background");

let titleInfo = document.querySelector("#title").value;

let authorInfo = document.querySelector("#author").value;

let pageNumberInfo = document.querySelector("#page-number").value;

let populateBook = document.querySelector(".populate-book");

console.log(titleInfo);

/* main Array */
let myLibrary = [];

function book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

book.prototype.info = function(){
    return `<p>${this.title}<p> `+ `<p>${this.author}<p>` + `<p>${this.pages} pages<p>` + `<p>${this.read}<p>`
}

let HP = new book ("Harry Potter", "J.K. Rowling.", "202", "I have read this" );

let CS = new book ("javascript tutorial", "John Smith", "300", "i have read this book");

myLibrary.push(HP);

myLibrary.push(CS);

console.log(myLibrary)

console.log(HP.info());


/* <----------------------eventListeners---------------------------->*/

/*pop-up and background */
bookButton.addEventListener("click", function() {
    popUp.classList.toggle("pop-up-in");
    background.classList.toggle("background-active");
});


background.addEventListener("click", function() {
    popUp.classList.toggle("pop-up-in");
    background.classList.toggle("background-active");
});

/* event listen that will add info from form to array and then run addBook function*/
populateBook.addEventListener("click", function(){
    titleInfo = document.querySelector("#title").value;
    authorInfo = document.querySelector("#author").value;
    pageNumberInfo = document.querySelector("#page-number").value;
    let newInput = new book (titleInfo, authorInfo, pageNumberInfo, "Read it");
    myLibrary.push(newInput);
    addBook();
    event.preventDefault();
})




/* function that will first clear innerHTML of main container (so that books arent duplicated) then add all array items to the main container*/
function addBook (){
    MainContainer.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let bookContain = document.createElement("div");
        bookContain.innerHTML = myLibrary[i].info();
        MainContainer.appendChild(bookContain);
    }
}

addBook();
