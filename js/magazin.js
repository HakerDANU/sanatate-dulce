// filtrare produse
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => { 
    filterItem.onclick = (selectedItem) => { 
      if (selectedItem.target.classList.contains("item")) { 
        filterItem.querySelector(".active").classList.remove("active"); 
        selectedItem.target.classList.add("active"); 
        let filterName = selectedItem.target.getAttribute("data-name"); 
        filterImg.forEach((image) => {
          let filterImges = image.getAttribute("data-name"); 
          if ((filterImges == filterName) || (filterName == "all")) {
            image.classList.remove("hide"); 
            image.classList.add("show"); 
          } else {
            image.classList.add("hide"); 
            image.classList.remove("show"); 
          }
        });
      }
    }
    for (let i = 0; i < filterImg.length; i++) {
      filterImg[i].setAttribute("onclick", "preview(this)"); 
    }
  
  
  }
