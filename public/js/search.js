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

document.querySelectorAll('.restaurant-description').forEach(el => {
    if (el.innerText.length > 512) {
        // split out text and add into span element
        let text = el.innerText;
        let short = el.innerText.substr(0, 512);
        let long  = el.innerText.substr(512);
        el.innerHTML = short + `<span class="dots" style="color: #333;">. . .</span><span class="long-text" style="display: none">${long}</span>`
        // change cursor to show text is clickable
        el.style.cursor = "pointer";
        el.title = 'Expand text';
        // add an event listener to show/hide span on click
        el.addEventListener('click', function() {
            // get the span
            let dots = el.querySelector('span.dots');
            let span = el.querySelector('span.long-text');
            // toggle the span
            if (span.style.display == '') {
                dots.style.display = '';
                span.style.display = 'none';
            } else {
                dots.style.display = 'none';
                span.style.display = '';
            }
        });

    }
});
