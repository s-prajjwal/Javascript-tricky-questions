const wrapper = document.getElementById("wrapper");
wrapper.style.display = 'flex';
document.body.style.backgroundColor = 'black';
const images = ['https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png', 'https://homepages.cae.wisc.edu/~ece533/images/barbara.png'];

function createImageCards() {
    const imageCardsArr = [];
    images.forEach(image => {
        const imgWrapper = document.createElement('div');
        const img = document.createElement('img');
        img.src = image;
        img.width = 200;
        imgWrapper.appendChild(img)
        imageCardsArr.push(img);
        wrapper.appendChild(imgWrapper);
    });
    return imageCardsArr;
}

function animateCards() {
    const imgs = wrapper.childNodes;
    console.log(imgs);
    for(let i=0;i<imgs.length;i++) {
        const curr = imgs[i];
        setTimeout(function(){
            
        })
    }
}


window.onload = function () {
    const imageCardsArr = createImageCards();
    animateCards();
}