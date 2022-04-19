document.querySelectorAll('.restaurant-award').forEach(el => {
    if (el.innerText == '3 MICHELIN Stars') {
        el.innerText = '⭐⭐⭐';
    } else if (el.innerText == '2 MICHELIN Stars') {
        el.innerText = '⭐⭐';
    } else if (el.innerText == '1 MICHELIN Star') {
        el.innerText = '⭐';
    } else if (el.innerText == 'Bib Gourmand') {
        el.innerText = '😋';
    }
});
