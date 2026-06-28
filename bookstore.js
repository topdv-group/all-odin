const addBookBtn = document.querySelector(".addBook-btn")
const submitBookButton = document.querySelector("#addDialog button")
const deleteBookButton = document.querySelector("#removeDialog button")
const removeBookBtn = document.querySelector(".removeBook-btn")

const NOT_FOUND = 'NOT_FOUND'
const SUCCESS = 'SUCCESS'

function getUniqueId(){
    return crypto.randomUUID()
}

const library = [ ];

function loadDefaultBooks(){
    // FIXED: Clear the main column containers instead of non-existent individual divs
    document.querySelector(".bookName-list").innerHTML = '';
    document.querySelector(".reads-list").innerHTML = '';
    document.querySelector(".pages-list").innerHTML = '';
    document.querySelector(".authors-list").innerHTML = '';

    library.forEach(element => {
        updateGui(element)
    });
}

function addBook(author,name , pages, read = false){
    const newBook = {
        bookId:getUniqueId(),
        author,
        name,
        pages,
        read
    }
    library.push(newBook)
    return newBook
}

function showLibrary(){
    library.forEach(element => {
        console.log(`${element.bookId} ${element.author} ${element.name} - ${element.pages} read: ${element.read}`)
    });
}

function removeBook(bookName){
    let found = library.findIndex(element => element.name === bookName )
    if(found === -1){
        return NOT_FOUND
    }
    library.splice(found,1)
    return SUCCESS
}

// Default books added first
addBook("moms","Eric's tricks", 55 , true)
addBook("karions","immaginations", 45 , true)
addBook("ons","nations", 5 , true)
addBook("kk2","CULTURE", 50 , false)

// Load event listeners
addBookBtn.addEventListener("click",()=>{
    addDialog.showModal()
})

submitBookButton.addEventListener("click", ()=>{
    const userInputauthor = document.querySelector("#book-author")
    const userInputName = document.querySelector("#book-name")
    const userInputpages = document.querySelector("#book-pages")
    const checkbox = document.getElementById("book-read")
    
    const response = addBook(userInputauthor.value, userInputName.value,Number(userInputpages.value),checkbox.checked)
    updateGui(response);
    addDialog.close();
})

removeBookBtn.addEventListener("click",()=>{
    removeDialog.showModal()
})

deleteBookButton.addEventListener('click',()=>{
    const _bookname = document.getElementById("bookname")
    var response = removeBook(_bookname.value)
    removeDialog.close()
    loadDefaultBooks()
    console.log(response)
})

function updateGui(response){
    const bookName = document.querySelector(".bookName-list");
    const author = document.querySelector(".authors-list");
    const pages = document.querySelector(".pages-list");
    const readStatus = document.querySelector(".reads-list");

    const addedBookName = document.createElement("div");
    const addedBookAuthor = document.createElement("div");
    const addedBookPages = document.createElement("div");
    const addedBookReadStatus = document.createElement("div");

    addedBookName.classList.add("addedBookNameDiv")
    addedBookAuthor.classList.add("addedBookAuthorDiv")
    addedBookPages.classList.add("addedBookPagesDiv")
    addedBookReadStatus.classList.add("addedBookReadStatus")

    addedBookName.textContent = response.name
    addedBookAuthor.textContent = response.author
    addedBookPages.textContent = response.pages
    addedBookReadStatus.textContent = response.read ? "Yes" : "No" // Cleans up true/false display

    bookName.append(addedBookName)
    author.append(addedBookAuthor)
    pages.append(addedBookPages)
    readStatus.append(addedBookReadStatus)
}

// Runs perfectly now without throwing errors
loadDefaultBooks();
