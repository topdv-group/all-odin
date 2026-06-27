
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
    return newBook
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

    const addDialog = document.getElementById("addDialog")
    const submitBookButton = document.querySelector("#addDialog button")

    addDialog.showModal()
    
    submitBookButton.addEventListener("click", ()=>{
        
        const userInputauthor = document.querySelector("#book-author")
        const userInputName = document.querySelector("#book-name")
        const userInputpages = document.querySelector("#book-pages")
        const checkbox = document.getElementById("book-read")

        const reponse = addBook(userInputauthor.value,userInputName.value,Number(userInputpages.value),checkbox.checked)

        upDateGui(reponse);

    })
  
})

function upDateGui(reponse){
    
}
