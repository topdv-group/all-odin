
const bookName = document.querySelector(".bookName")
const addBookBtn = document.querySelector(".addBook-btn")

const NOT_FOUND = 'NOT_FOUND'
const SUCCESS = 'SUCCESS'

function getUniqueId(){
    return crypto.randomUUID()
}

const library = [
    {
        bookId:getUniqueId(),
        author:"mark",
        name:"python",
        pages: 48,
        read:false
    },

    {
        bookId:`${getUniqueId()}`,
        author:"sams",
        name:"javascript",
        pages: 50,
        read:true
    }
];

function addBook(author,name , pages, read = false){
    const newBook = 
    {
        bookId:getUniqueId(),
        author:author,
        name:name,
        pages:pages,
        read:read
    }

    library.push(newBook)
}

function showLibrary(){
    library.forEach(element => {
    console.log(`${element.bookId} ${element.author} ${element.name} - ${element.pages}  read: ${element.read}`)
   
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

addBook("moms","Eric's tricks", 55 , true)
addBook("karions","immaginations", 45 , true)

addBookBtn.addEventListener("click",function(){
    const book_name = prompt("book name")

    const userAddedBook = document.createElement("div")
    userAddedBook.classList.add("userAddedBookName")

    userAddedBook.append(book_name)
    bookName.append(userAddedBook);

    console.log(book_name)
})
