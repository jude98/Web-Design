let filterName = document.getElementById('filterInput');

filterName.addEventListener('keyup', filterNames);

function filterNames(){
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');
    let searchName = filterName.value.toUpperCase();
    li.forEach( val => {
        let a = val.getElementsByTagName('a')[0];
        if(a.textContent.toUpperCase().indexOf(searchName) > -1){
            val.style.display = '';
        }else{
            val.style.display = 'none';
        }
    })
}