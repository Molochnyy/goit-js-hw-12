import axios from 'axios';

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

export async function searchPhotos(query, page = 1) {
    showLoader();

    const searchParams = new URLSearchParams({
        key: '44066114-c3ff57994064ae6e377a0cfb1',
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    try {
        const response = await axios.get(url);
        totalHits = response.data.totalHits;
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        hideLoader();
    }
}

export function resetPage() {
    currentPage = 1;
}

export function incrementPage() {
    currentPage += 1;
}

export function getCurrentPage() {
    return currentPage;
}

export function setCurrentQuery(query) {
    currentQuery = query;
}

export function getCurrentQuery() {
    return currentQuery;
}

export function getTotalHits() {
    return totalHits;
}