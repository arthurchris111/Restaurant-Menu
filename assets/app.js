const menu = [{
        id: 1,
        title: ' ButterMilk Pancakes',
        category: 'breakfast',
        price: 6.99,
        img: "./assets/images/pancake.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 2,
        title: ' Dream Oreo',
        category: 'shake',
        price: 15.99,
        img: "./assets/images/dream.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 3,
        title: 'Country Delight',
        category: 'lunch',
        price: 10.99,
        img: "./assets/images/country.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 4,
        title: 'American Special',
        category: 'lunch',
        price: 15.99,
        img: "./assets/images/america.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 5,
        title: 'Special Pizza',
        category: 'lunch',
        price: 15.99,
        img: "./assets/images/pizza.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`

    },

    {
        id: 6,
        title: 'Burger',
        category: 'lunch',
        price: 13.99,
        img: "./assets/images/burger.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 8,
        title: 'Samosa',
        category: 'lunch',
        price: 6.99,
        img: "./assets/images/samosa.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 8,
        title: 'French Rice',
        category: 'lunch',
        price: 7.99,
        img: "./assets/images/america.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 9,
        title: 'German Chicken',
        category: 'lunch',
        price: 6.99,
        img: "./assets/images/country.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },

    {
        id: 10,
        title: 'Godzilla Milks',
        category: 'lunch',
        price: 6.29,
        img: "./assets/images/dream.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco`
    },
]

const sectionCenter = document.getElementById("sectionCenter")
const filterButtons = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", () => {
    menuItems();

})

filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.id)

    })
})


const menuItems = () => {
    let displayMenu = menu.map((item) => {
        // console.log(item)
        return `<div id="sectionCenter"
                    class = "col col-lg-6 col-md-12 col-sm-12 d-flex justify-content-md-center justify-content-sm-center" >
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <a href="#"><img src=${item.img} class="img-fluid h-100 rounded-start"
                                        alt="${item.title}"></a>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h6>${item.title}</h6>
                                        <h6 class="amount">$${item.price }</h6> 
                                    </div>
                                    <hr class="mt-0 ">
                                    <p class="text-start">${item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu
    // console.log(displayMenu)
}