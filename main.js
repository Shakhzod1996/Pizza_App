let arr = [

    {
        imgUrl: '../img/one.jpg',
        name: 'Pepperoni',
        price: 2.23,
        id: 0
    },

    {
        imgUrl: '../img/two.jpg',
        name: 'cheesy',
        price: 5.99,
        id: 1
    },
    {
        imgUrl: '../img/three.jpg',
        name: 'Margarita',
        price: 7.48,
        id: 2
    },

    {
        imgUrl: '../img/four.jpg',
        name: 'Hawailan',
        price: 9.32,
        id: 3
    }
];


// Evaluate quantity
let ul = document.querySelector('.ul');

arr.forEach((ar) => {
    let li1 = document.createElement('li')
    li1.classList.add('li')
    ul.appendChild(li1)

    li1.innerHTML = `
    <div class="img-div">
    <img src="${ar.imgUrl}" alt="img">
    </div>
    <div class="desc">
    <h3>${ar.name}</h3>
    <p class="price">$${ar.price}</p>
    <button class="btn one-btn" id=${ar.id}>Add to Card</button>
    </div>
    `
})

// arrNew New Array
let ul2 = document.querySelector('.ul2')
let arrNew = []
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        ul2.innerHTML = ''
        arrNew[arrNew.length] = arr[e.target.id]

        // price evaluate
        let subtotal = document.querySelector('.subtotal')
        let tax = document.querySelector('.tax')
        let total = document.querySelector('.total')


        arrNew.forEach(each => {
            let li2 = document.createElement('li')
            li2.classList.add('li-card')
            ul2.appendChild(li2)
            
            li2.innerHTML = `
                <div class="img-div">
                    <img src="${each.imgUrl}" alt="img">
                </div>
            
                <div class="desc">
                    <h3>${each.name}</h3>
                    <p class="price">$${each.price}</p>
                    <button class="minus" id='${each.id}'>-</button>
                    <input type='number' class='quantity' value='1'>
                </div>
                `
        })

        // Delete Btn
        let delLis = document.querySelectorAll('.minus')
        let delArr = [];

        delLis.forEach(del => {
            del.addEventListener('click', (e) => {
                arrNew.splice(e.target.id, 1)
                ul2.innerHTML =''
                arrNew.forEach(each => {
                    let li2 = document.createElement('li')
                    li2.classList.add('li-card')
                    ul2.appendChild(li2)
                    li2.innerHTML = `
                        <div class="img-div">
                            <img src="${each.imgUrl}" alt="img">
                        </div>
                
                        <div class="desc">
                            <h3>${each.name}</h3>
                            <p class="price">$${each.price}</p>
                            <button class="minus" id='${each.id}'>-</button>
                        </div>
                        `
                })
            })
        })
    })
})











