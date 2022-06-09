const menuItem = document.querySelectorAll('#nav a');

menuItem.forEach(el => {
    // current
    if (el.getAttribute('href') === (location.path || '#home')) {
        el.classList.add("active")
    }

    // handle click
    // el.addEventListener("click", e => {
    //     // remove others
    //     menuItem.forEach(el => el.classList.remove("active"))
    //     // set active
    //     e.target.classList.add("active")
    // })
})