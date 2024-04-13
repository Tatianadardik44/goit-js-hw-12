import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export const list = document.querySelector(".gallery-nav");
export function createMarkup(data) {
    const markup = data.hits
    .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
    }) => {
        return `
        <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img 
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"/>
        <div class="image-information">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
        </div>
        
        </a>
        </li>`;
       
    })
    .join("");
    list.insertAdjacentHTML("beforeend", markup); 

const lightbox = new SimpleLightbox('.gallery a', {  captionsData: `alt`,
  captionDelay: 250,
});
    lightbox.refresh(); 
};