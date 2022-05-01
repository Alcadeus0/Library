//Book Class
class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

//UI class
class UI{
    static displayBooks(){
        const storedBooks = [
            {
                title:  'Book-1',
                author: 'Random-1',
                pages:  '100',
                read:   'Yes'
            },
            {
                title:  'Book-2',
                author: 'Random-2',
                pages:  '200',
                read:   'No'
            }
    
        ];
        const books = storedBooks;
        books.forEach((book) => UI.addBooktoList(book));
    }
    
    static addBooktoList(book){
        const bookList = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href='#' class="read">${book.read}</a></td>
        <td><a href="#" class="delete">X</a></td>
        `;
        bookList.appendChild(row);
    }

    static clearfields(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#pages').value = "";
        document.querySelector('#read').checked = false;

    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static changeStatus(el){
        if(el.classList.contains('read')){
            if(el.innerHTML == "Yes"){
                el.innerHTML = "No";
            }
            else{
                el.innerHTML = "Yes";
            }
        }
    }
    
};


//Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

//Form Values

document.querySelector('#book-form').addEventListener('submit', (e) => 
{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = checked();

    const book = new Book(title,author,pages,read);
    UI.addBooktoList(book);
    UI.clearfields();
});

function checked(){
    const check = document.querySelector('#read');
    if(check.checked){
        return "Yes"
    }
    else{
        return "No"
    }
}

//Remove Book

document.querySelector('#book-list').addEventListener('click', (e) =>
{
    UI.deleteBook(e.target);
    UI.changeStatus(e.target);
    
})
