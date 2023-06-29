import axios from 'axios';

const BASIC_URL = 'https://pixabay.com/api/';
const API_KEY = '35896260-91a07da99bea408579985ab29';

export const getImages = async (searchQuery, page) => {
    const currentImages = await axios.get(`${BASIC_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`).catch(error => {
        return new Error(error);
    });
    return currentImages.data.hits;
};