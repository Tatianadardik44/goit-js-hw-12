import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { objGallery } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { list } from "./js/render-functions";
import { page } from "./js/pixabay-api";

console.log(page);
const loaderElement = document.querySelector(".loader");
const formGallery = document.querySelector(".input-field");
const loadBtn = document.querySelector(".js-load-more");
loadBtn.addEventListener("click", loadFoto);
formGallery.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//     event.preventDefault();
//     list.innerHTML = "";
//     loaderElement.classList.remove(".hidden")
//     const names = event.target.elements.designation.value.trim();
    
//     objGallery(names, page)
//         .then(data, page => {
           
//             if (data.totalHits === 0 ||names === '') {
//                 loaderElement.classList.add(".hidden");
//                 iziToast.show({
//                     message: 'Sorry, there are no images matching your search query. Please try again!',
//                     messageColor: 'white',
//                     backgroundColor: 'red',
//                     position: 'bottomCenter',
//                     iconColor: 'white'
//                 });
//             } else if (page <= total_pages){
//                 loaderElement.classList.add(".hidden");
//                 iziToast.success({
//                     iconColor: 'yellow',
//                     message: 'Enjoy watching!',
//                     position: 'topRight',
//                     backgroundColor: 'blue',
//                     messageColor: 'yellow'
//                 });
//                 createMarkup(data);
//                 loadBtn.classList.replace("load-more-hidden", "load-more")
//                 loadBtn.addEventListener("click", loadElements);
//                async function loadElements() {
//                    page += 1;
//                    loadBtn.disabled = true;
//                    try {
//                        const data = await objGallery(page);
//                        createMarkup(data);
//                        loadBtn.disabled = false;

//                        if (data.page >= data.total_pages) {
//                            loadBtn.classList.replace("load-more", "load-more-hidden");
//                        }
//                    }
//                    catch (error) {
//                        alert(error.message)
//                    }
//                }
//             }
//         })
   
        
    
//     event.target.reset();
// }
function handleSubmit(event) {
    event.preventDefault();
    list.innerHTML = "";
    loaderElement.classList.remove(".hidden")
    const names = event.target.elements.designation.value.trim();
    objGallery(names, page)
       
        .then(data => {
            console.log(data);
            if (data.totalHits === 0 ||names === '') {
                loaderElement.classList.add(".hidden");
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: 'white',
                    backgroundColor: 'red',
                    position: 'bottomCenter',
                    iconColor: 'white'
                });
            } else  {
               
                loaderElement.classList.add(".hidden");
                iziToast.success({
                    iconColor: 'yellow',
                    message: 'Enjoy watching!',
                    position: 'topRight',
                    backgroundColor: 'blue',
                    messageColor: 'yellow'
                });
                createMarkup(data);  
            }
        });
    event.target.reset();
}

// async function loadFoto() {
//     page = page + 1;
//     console.log(page);
//     loadBtn.classList.add(".hidden");
//     try {
//         const data = await objGallery(page);
//         list.insertAdjacentHTML("beforeend", createMarkup(data));
//        loadBtn.classList.add(".hidden");
//         if (data.page >= data.totalHits) {
//             loadBtn.classList.replace("load-more", "load-more-hidden");
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// };
  