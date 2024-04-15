import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { objGallery } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { list } from "./js/render-functions";

const loaderElement = document.querySelector(".loader");
const formGallery = document.querySelector(".input-field");
const loadBtn = document.querySelector(".js-load-more");

loadBtn.addEventListener("click", loadFoto);
formGallery.addEventListener("submit", handleSubmit);

let maxPage;
let names;
let page;

loadBtn.classList.add("hidden");
loaderElement.classList.replace("loader", "hidden");
async function handleSubmit(event) {
    event.preventDefault();
    list.innerHTML = "";
  loaderElement.classList.replace("hidden", "loader");
    
    names = event.target.elements.designation.value.trim();
    page = 1;
    
    if (names === '') {
        loaderElement.classList.replace("loader", "hidden");
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'bottomCenter',
            iconColor: 'white'
        });
        return;
    }
    try {
        const data = await objGallery(page, names);
        if (data.totalHits === 0) {
            loaderElement.classList.replace("loader", "hidden");
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: 'white',
                backgroundColor: 'red',
                position: 'bottomCenter',
                iconColor: 'white'
            })
            return;
        } else if (data.totalHits < 15) {
            loaderElement.classList.replace("loader", "hidden");
              loadBtn.classList.replace("visible", "hidden");
            iziToast.show({
                message: "We`re sorry, but you've reached the end of search results.",
                messageColor: 'white',
                backgroundColor: 'green',
                position: 'bottomCenter',
                iconColor: 'white'
            })
            createMarkup(data);
            return;
        }
     
        iziToast.success({
            iconColor: 'yellow',
            message: 'Enjoy watching!',
            position: 'topRight',
            backgroundColor: 'blue',
            messageColor: 'yellow'
        });
        createMarkup(data);
      
        
       
    
    }
    catch(error){
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'bottomCenter',
            iconColor: 'white'
        });
    };
    
     event.target.reset();
    loadBtn.classList.replace("hidden", "visible");
    loaderElement.classList.replace("loader", "hidden");
    
};



async function loadFoto() {
    page += 1;
    
    try {
        const data = await objGallery(page, names);
       maxPage = Math.ceil(data.totalHits / 15);
        console.log(data);
        createMarkup(data);
         loaderElement.classList.replace("hidden", "loader");
        
        if (page >= maxPage) {
            loaderElement.classList.replace("loader", "hidden");
            loadBtn.classList.replace("visible", "hidden");
              iziToast.show({
            message: "We`re sorry, but you've reached the end of search results.",
            messageColor: 'white',
            backgroundColor: 'green',
            position: 'bottomCenter',
            iconColor: 'white'
        });
        }
       
    }
    catch (error) {
        alert(error.message)
    }
     const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        });
    loaderElement.classList.replace("loader", "hidden");
};
  