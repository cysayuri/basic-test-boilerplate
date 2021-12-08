let filterSelect = document.querySelectorAll('.filter__item-select')

window.onclick = function(event) {
    filterSelect.forEach(elem => {
        let select = elem.querySelector('select')
        
        if ((event.target != elem) && (event.target != select)) {
            elem.classList.remove('active')
        } else if (event.target == select) {
            elem.classList.toggle('active')
        }
    })
}