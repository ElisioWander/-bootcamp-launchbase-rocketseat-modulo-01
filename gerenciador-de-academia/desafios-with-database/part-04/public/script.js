const currentPage = window.location.pathname
const menuItems = document.querySelectorAll("header .links a")

for(let item of menuItems) {
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add('active')
    }
}

let totalPage = 20,
    selectedPage = 15,
    oldPage,
    pages = []

    for(let currentPage = 1; currentPage <= totalPage; currentPage++) {
        const firstAndLastPage = currentPage == 1 || currentPage == totalPage
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
        

        if(firstAndLastPage || pagesAfterSelectedPage & pagesBeforeSelectedPage) {
            if(oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }

            if(oldPage & currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }
            
            pages.push(currentPage)

            oldPage = currentPage
        }

    }


const pagination = document.querySelector(".pagination")

let elements = ""

for (let page of pages) {
    elements = `<a href="">${page}</>`
}

pagination.innerHTML = elements

    
    