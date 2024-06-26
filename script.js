/* carousel */
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true , 
  wrapAround: true
});

/* Button colour */
function changeColor(button) {
  button.style.color = "#4C482F";
}

/* list for project */
function filterCategory(filterBy, buttonClicked){
  let itemsToFilter = Array.from(document.getElementsByClassName("RecipeBox"));
  for(let listItem of itemsToFilter){
    if(listItem.classList.contains(filterBy)){
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }

  let filterButtonsArray = Array.from(document.getElementsByClassName("FilterButton"));
  for(let filterButton of filterButtonsArray){
    if(filterButton === buttonClicked){
      filterButton.classList.add("SelectedFilter");
    } else {
      filterButton.classList.remove("SelectedFilter");
    }
  }
}
