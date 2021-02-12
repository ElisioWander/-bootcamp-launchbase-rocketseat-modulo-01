const currentPage = window.location.pathname
const menuItems = document.querySelectorAll("header .links a")

for(let item of menuItems) {
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add('active')
    }
}

let totalPage = 20,
    selectedPage,
    pages = []

    for(let currentPage = 1; currentPage <= totalPage; currentPage++) {
        pages.push(currentPage)
    }

    console.log(pages)

    
    