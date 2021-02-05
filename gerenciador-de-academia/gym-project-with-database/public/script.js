const currentPage = document.location.pathname

const menuItems = document.querySelectorAll("header .links a")

for(item of menuItems) {
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add('active')
    }
}

//totalPages = 20
//selectedPage = 15
//[1...13, 14, 15, 16, 17...20]

let totalPages = 20,
    selectedPage = 1,
    pages = []

for(let currentPage = 1; currentPage <= totalPages; currentPage++) {
    pages.push(currentPage)
}

console.log(pages)



