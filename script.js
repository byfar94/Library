/* DOM items */

let mainContainer = document.querySelector(".container-m");

let bookButton = document.querySelector(".book-btn");

let popUp = document.querySelector(".pop-up");

let background = document.querySelector(".background");

let titleInfo = document.querySelector("#title").value;

let authorInfo = document.querySelector("#author").value;

let pageNumberInfo = document.querySelector("#page-number").value;

let readInfo = document.querySelector("#read").checked;

let populateBook = document.querySelector(".populate-book");

/* main Array */
let myLibrary = [];


function book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


//default book for show
let HP = new book ("Title", "Author", "555", "Read" );

myLibrary.push(HP);



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
    //form values
    titleInfo = document.querySelector("#title").value;
    authorInfo = document.querySelector("#author").value;
    pageNumberInfo = document.querySelector("#page-number").value;
    readInfo = document.querySelector("#read").checked;
    function readOutPut(){
    if (readInfo == true){
        return "Read"
    }
    else {
        return "Not Read"
    }
    }
    //create book, push to array, and run render book function
    let newInput = new book (titleInfo, authorInfo, pageNumberInfo, readOutPut());
    myLibrary.push(newInput);
    event.preventDefault();
    renderBook();
})


/* function that will first clear innerHTML of main container (so that books arent duplicated) then add all array items to the main container*/
function renderBook (){
    mainContainer.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        //book div
        let bookContain = document.createElement("div");
        bookContain.dataset.index = [i];
        mainContainer.appendChild(bookContain);

        //delete button
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn");
        deleteButton.classList.add("delete-btn");
        deleteButton.dataset.index = [i];
        bookContain.appendChild(deleteButton);
        var img = document.createElement("img");
        img.setAttribute("src", "Images/trash-can.svg");
        img.classList.add("trash-img");
        deleteButton.appendChild(img);

        //title
        let titlePara = document.createElement("h2");
        titlePara.innerText = myLibrary[i].title;
        bookContain.appendChild(titlePara);

        //author
        let authorPara = document.createElement("i");
        authorPara.innerText = myLibrary[i].author;
        bookContain.appendChild(authorPara);

        //pages
        let pagesPara = document.createElement("p");
        pagesPara.innerText = `${myLibrary[i].pages} pages`
        bookContain.appendChild(pagesPara);

        //read btn
        let readButton = document.createElement('button');
        readButton.classList.add("btn");
        if (myLibrary[i].read == "Read") {
        readButton.innerText = myLibrary[i].read;
        readButton.classList.remove("red-btn");
        readButton.classList.add("green-btn");
        bookContain.appendChild(readButton);
        }
        else {
        readButton.innerText = myLibrary[i].read;
        readButton.classList.remove("green-btn");
        readButton.classList.add("red-btn");
        bookContain.appendChild(readButton);
        }
        
        //event listeners
        deleteButton.addEventListener("click", function(){
            myLibrary.splice(i, 1);
            renderBook();
            
        })
        console.log(myLibrary[i].read);

        readButton.addEventListener("click", function(){
            if (myLibrary[i].read == "Read"){
                myLibrary[i].read = "Not Read"
                readButton = document.createElement('button');
                readButton.innerText = myLibrary[i].read;
                bookContain.appendChild(readButton);
                renderBook();

            }
            else{
                myLibrary[i].read = "Read"
                readButton = document.createElement('button');
                readButton.innerText = myLibrary[i].read;
                bookContain.appendChild(readButton);
                renderBook();
            }
        })
            }
            

    }


renderBook();

function theClasses(){
    return "red-btn", "green btn"
}

console.log(myLibrary);

// use the i !!!!!
// need to make it so all book do not have to be refreshed each time set restriction for adding books to array if the title matches (use inlcudes or some method)
