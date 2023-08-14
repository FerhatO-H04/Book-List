// variables
const saveButton = document.querySelector("#save-el")
const bookInputEl = document.querySelector("#book-input-el")
const authorsInputEl = document.querySelector("#authors-input-el")
const bookList = document.querySelector("#bookList")
const erorEl = document.querySelector("#eror")

// click function
saveButton.addEventListener("click", function(){

  if(!erorEl.textContent){

    //alert if nothing is written
        if( bookInputEl.value === "" ){
          alert("You must write something")
        } 
    //if there is an error do not save anything to the list
        else if(erorEl.textContent){
          let li = document.createElement("li");
          li.textContent = "";
        }
      
        else{
        let li = document.createElement("li");
        li.textContent =  bookInputEl.value;
        bookList.appendChild(li);

      //create button
        let button = document.createElement("button");
        button.innerHTML = "Remove"
        button.className = "removeButton"
        li.appendChild(button); 

        }
      }
  bookInputEl.value = "";
  authorsInputEl.value ="";
})


//remove book list if clicked items tag nmae is button
bookList.addEventListener("click",function(e){
  if(e.target.tagName === "BUTTON")
  {e.target.parentElement.remove()}
  else{false}
})




bookInputEl.addEventListener("input", (event) => {

//check if book name is valid clear the eror element
  if (!checkFormData(event.target.value)) return
  erorEl.textContent = ""
})


// function checks if user entered a valid book name.

function checkFormData(data) {
  if (data.length < 2) {
     erorEl.textContent = "Please enter a valid book name."
     return
   
  }
  

  return true
}













