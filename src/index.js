
fetch(`http://localhost:3000/ramens`)
.then(res=>res.json())
.then((data)=>{
    //console.log(data)
    data.forEach((ramenI) => {
        addRamenImg(ramenI)
    });
    ramenDetailDisplay(data[0])
})

function addRamenImg (ramenObj) {
    let ramenDiv = document.querySelector(`#ramen-menu`)
    let ramenImg = document.createElement('img')
    ramenImg.src = ramenObj.image
    ramenDiv.appendChild(ramenImg)
    ramenImg.addEventListener('click', (e)=>{
        ramenDetailDisplay(ramenObj)
    })
}

function ramenDetailDisplay (ramenObj) {
        let ramenDetailImage = document.querySelector(`img.detail-image`)
        let ramenDetailName = document.querySelector(`h2.name`)
        let ramenDetailRestaurant = document.querySelector(`h3.restaurant`)
        ramenDetailRating = document.querySelector(`#rating-display`)
        ramenDetailComment = document.querySelector(`#comment-display`)

        ramenDetailImage.src = ramenObj.image
        ramenDetailName.textContent = ramenObj.name
        ramenDetailRestaurant.textContent = ramenObj.restaurant
        ramenDetailRating.textContent = ramenObj.rating
        ramenDetailComment.textContent = ramenObj.comment
}

const newRamenForm = document.querySelector(`#new-ramen`)

newRamenForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let ramenInputName = document.querySelector(`#new-name`)
    let ramenInputRestaurant = document.querySelector(`#new-restaurant`)
    let ramenInputImage = document.querySelector(`#new-image`)
    let ramenInputRating = document.querySelector(`#new-rating`)
    let ramenInputComment = document.querySelector(`#new-comment`)
    
    const newRamenObj = {}
    
    newRamenObj['name'] = ramenInputName.value
    newRamenObj[`restaurant`] = ramenInputRestaurant.value
    newRamenObj[`image`] = ramenInputImage.value
    newRamenObj[`rating`] = ramenInputRating.value
    newRamenObj[`comment`] = ramenInputComment.value

    addRamenImg(newRamenObj)
})

const editRamenForm = document.querySelector(`#edit-ramen`)

editRamenForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let ramenEditRating = document.querySelector(`#edit-rating`)
    let ramenEditComment = document.querySelector(`#edit-comment`)

    ramenDetailRating.textContent=  ramenEditRating.value
    ramenDetailComment.textContent = ramenEditComment.value
})

