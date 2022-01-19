console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getImagesFromServer(url) {
    return fetch(imgUrl)
        .then(r => r.json())
        .then(obj => obj.message)
}
// get rid of the chunk if it doesnt work 
// fetch(imgUrl).then(r => r.json()).then(obj => obj.message[0])


function putImgToDOM(arrayImgURLS){
    let placeForImgs = document.querySelector('#dog-image-container')


    let imageItem = document.createElement('img');
        imageItem.src = arrayImgURLS.message[0];
        placeForImgs.appendChild(imageItem);

    // arrayImgURLS.forEach(sURL => {
    //     let imageItem = document.createElement('img');
    //     imageItem.createAttribute('src').value = sURL;
    //     placeForImgs.appendChild(imageItem)
    // });


    
}

console.log(getImagesFromServer(imgUrl)[0]);


//works fine
// let placeForImgs = document.getElementById('dog-image-container')
// let sometext = document.createElement('h1');
// sometext.textContent = "blablabla";
// placeForImgs.appendChild(sometext);


// works fine 
// let  imgItem = new Image();
// imgItem.src="https://images.dog.ceo/breeds/puggle/IMG_080306.jpg";
// placeForImgs.appendChild(imgItem);

  // To pass the tests, don't forget to return your fetch!
  // let resp = fetch('https://anapioficeandfire.com/api/books')
  //   .then(r => r.json())
  //   .then(sObj => sObj.map(book => book.name));

