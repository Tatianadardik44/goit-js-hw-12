import axios from 'axios';

export async function objGallery(page, names) {
    const  path = `https://pixabay.com/api/`;
    const API_KEY = `43257905-28a3b58ba6106b31a5e4f67d7`;
    const params = new URLSearchParams({
        key: API_KEY,
        q: names,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true,
        page,
        per_page: 15
    })
    const {data} = await axios(`${path}?${params}`); 
   
    return data;
    

    
}
