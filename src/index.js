console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
        .then(r => r.json())
        .then(obj => {
            obj.message.forEach(imgUrl => {

                const newImg = document.createElement('img')

                newImg.src = imgUrl

                const imgContainer = document.querySelector('#dog-image-container')
                imgContainer.append(newImg)
            })
        })


const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
    .then(r => r.json())
    .then( (m) => {
        // the promise returns an object so we need to turn the object into an array with 'Object.keys'. Then we can iterate throught the data
        const breedArray = Object.keys(m.message)
        // we dont need to assign dogList for every iteration of the array so we can define dogList outside of the forEach loop
        const dogList = document.querySelector('#dog-breeds')

        breedArray.forEach(string => {


            const addDogs = document.createElement('li')

            addDogs.textContent = string 

            addDogs.addEventListener('click', () => {
                addDogs.style.color = 'red'
            })
            
            dogList.append(addDogs)
        })
    } )


