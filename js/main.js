
$(function () { 

    let imgBtn = document.querySelectorAll('.se03 .btn li');
    let list = document.querySelectorAll('.se03 .vp-raw .grid');
    for (let i = 0; i < imgBtn.length; i++) {
        imgBtn[i].onclick = function () {
            imgBtn.forEach(function (item) {
                item.classList.remove('on');
            })
            list.forEach(function (item) {
                item.classList.remove('on');
            })
            imgBtn[i].classList.add('on');
            list[i].classList.add('on');
        }
    }

    let imgBtn2 = document.querySelectorAll('.se04 .btn li');
    let list2 = document.querySelectorAll('.se04 .vp-raw .grid');
    for (let i = 0; i < imgBtn2.length; i++) {
        imgBtn2[i].onclick = function () {
            imgBtn2.forEach(function (item) {
                item.classList.remove('on');
            })
            list2.forEach(function (item) {
                item.classList.remove('on');
            })
            imgBtn2[i].classList.add('on');
            list2[i].classList.add('on');
        }
    }
   

})