document.addEventListener("DOMContentLoaded", () => {
  // your code here
const listContainer = document.querySelector('#tasks')
const form = document.querySelector("#create-task-form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const selectedColor = event.target.priority.value 
  const task = event.target["new-task-description"].value 
  const date = event.target.date.value 
  const listTag = document.createElement('li')
  listTag.innerHTML = `${task} - Deadline: ${date}  <span>X</span>`
  listTag.style.color = selectedColor 

  if(selectedColor == "red"){
    listTag.dataset.order = 1
  } else if (selectedColor == "yellow"){
    listTag.dataset.order = 2
  } else [
    listTag.dataset.order = 3
  ]
  

  listContainer.append(listTag)
  //listItem.dataset.value = task 

  

  const deleteBtn = listTag.querySelector('span')
  deleteBtn.addEventListener('click', (e) => {
    listTag.remove()
  })

})


const sortBtn = document.querySelector("#sort")

  sortBtn.addEventListener("click", (e) => {
    var elements = [].slice.call(listContainer.children)
    let newSort = elements.sort(compare)
    
    listContainer.innerHTML = ""

    newSort.forEach((item) => {
        listContainer.append(item)
    })


  })


  function compare(a, b){
    if(a.dataset.order > b.dataset.order){
      return 1
    } else {
      return -1 
    }
  }

});


