var looker_for_code_preview_element_interval = setInterval(() => {
    if ( document.querySelectorAll('section[data-framer-name="Transition"]').length > 0 ) {
        clearInterval(looker_for_code_preview_element_interval);
        remove_unnecessary_item();
    }
}, 0)


setTimeout(() => {
    clearInterval(looker_for_code_preview_element_interval)
}, 8000)


function remove_unnecessary_item() {
    document.querySelectorAll('section[data-framer-name="Transition"]')[0].remove();


    document.querySelectorAll('[data-framer-name="icon-links"] > a').forEach((e, index) => {
        if ( e.getAttribute('href') !== undefined ) {
            e.setAttribute("href", "")
        }
    })

}