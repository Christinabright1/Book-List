//create a book constructor

function Book(title, author, isbn){
    this.title= title;
    this.author= author;
    this.isbn = isbn;
  }
  
  function UI(){
  
  }
  
  //create a prototype

  UI.prototype.addBooktoList = function (book) {
    //console.log(book);
    const list = document.getElementById("book-list");
    //create tr
    const rows = document.createElement('tr');
    //console.log(rows);
    //insert colunm
    rows.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="" class="delete">X</a></td>
    `;
    list.appendChild(rows);
  }
   //show  alert 
     UI.prototype.showAlert = function (message, className) {
        //create div
        const div= document.createElement('div');
        //add className
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        const container= document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        //timeout after 3 s
        setTimeout(function(){
          document.querySelector(".alert").remove();
        }, 3000);
     }
  //clearfiels
  UI.prototype.clearFields = function (){
     document.getElementById('title').value = "";
     document.getElementById('author').value = "";
     document.getElementById('isbn').value = "";
  }

  //delete book
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
          target.parentElement.parentElement.remove();
        }
    }
  //create event Listener
  document.getElementById('book-form').addEventListener('submit', function(e){
     //Get form values
    const title= document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
     //console.log('text');
    //console.log(title,author,isbn);
    //instantiate book
    const book = new Book (title, author, isbn);

    //instantiate UI
    const ui = new UI ();

    //Validate
      if(title === "" || author === "" || isbn === ""){
        ui.showAlert('Please fill all fields', "error");
      }else {
              
    //Add book to list
    //console.log(ui);
       ui.addBooktoList(book);
     //show success
     ui.showAlert('Book added!', "success");
       //clear field
       ui.clearFields();
      }
       
    e.preventDefault();
  });

  //event listener delete

  document.getElementById('book-list').addEventListener('click', function(e){
    
    //instantiate UI
    const ui = new UI ();
    ui.deleteBook(e.target);
    e.preventDefault();
  })

