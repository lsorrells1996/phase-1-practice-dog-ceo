console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getImagesFromServer(url) {
    return fetch(imgUrl)
        .then(r => r.json())
        .then(obj => obj.message)
}


// get rid of the chunk if it doesnt work 


// fetch(imgUrl).then(r => r.json()).then(obj => obj.message[0])