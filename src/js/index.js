import Search from './models/Search';

/** Global State of the app
 * Search Object
 * Current Recipe Object
 * Shopping list object
 * Liked recipes
 */

const state = {};

const controlSearch = () => {
    // 1. Get query from view
    const query = 'pizza' 

    if (query) {
        
    }
}

document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
})

const search = new Search('pizza');
console.log(search);

search.getResults();
