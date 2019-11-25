document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const username = document.getElementById('name-input')
  let joke;
  
  
  
  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      joke = jokeData.joke
      const newJokeLi = document.createElement('li')
      const deleteBtn = deleteAJoke()

      newJokeLi.innerHTML = `
      <span class="username">${username.value} says:</span> ${joke} "🤣"
      `

      newJokeLi.append(deleteBtn)
      jokeList.appendChild(newJokeLi)
      
      console.log(deleteBtn)
    })
  }

  
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    /*this states if the username.value is equal to an empty string
    (meaning user did not enter anything for their name, then return empty)
    I added .value so that the value of the input is not equal to empty, which allows
    me to bypass the return
    */
    if(username.value === "") return;

    fetchJoke()
  })

//create delete button



 



  function deleteAJoke(){
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML= "Delete"
    deleteBtn.setAttribute('class','delete-btn')

    deleteBtn.addEventListener("click",(evt) => {
     let theParentOfDeleteButton = evt.target.parentElement
      theParentOfDeleteButton.remove()
    })
    return deleteBtn //return delete , must return or the delete button will be undefined
  }


  



})
