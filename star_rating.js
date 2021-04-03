const wrapper = document.getElementById("wrapper");
const resultWrapper = document.createElement("div");
resultWrapper.id="result";
document.body.appendChild(resultWrapper);
let selectedIndex = -1;

function createStars(starCount = 5) {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('input');
        star.setAttribute('type', 'radio');
        star.id = i;
        star.className = "rating-star";
        star.addEventListener('mouseenter', function (event) {
            giveRating(parseInt(event.target.id));
        });
        star.addEventListener('mouseleave', function(event){
            console.log(selectedIndex);
            if(selectedIndex===-1)resetRating();
            else {giveRating(selectedIndex)}
            console.log(selectedIndex);
        })
        wrapper.appendChild(star);
    }
}

function resetRating() {
    selectedIndex=-1;
    const ratingStars = document.getElementsByClassName('rating-star');
    for (let i = 0; i < ratingStars.length; i++) {
        ratingStars[i].checked = false;
    }
}

window.onload = function () {
    createStars();
    wrapper.addEventListener('click', function (e) {
        const id = parseInt(e.target.id);
        if(!id || typeof id!=="number") return;
        const result = document.getElementById('result');
        result.innerHTML = `Rating is ${id + 1}`;
        resetRating();
        selectedIndex=id;
        giveRating(id);
    })
}

function giveRating(index){
    const ratingStars = document.getElementsByClassName('rating-star');
    for (let i = 0; i <= index; i++) {
        ratingStars[i].checked = true;
    }
}
