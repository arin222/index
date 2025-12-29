
$(function () {

    let imgBtn = document.querySelectorAll('.se03 .btn li');
    let list = document.querySelectorAll('.se03 .vp-raw .grid');
    for (let i = 0; i < imgBtn.length; i++) {
        imgBtn[i].onclick = function () {
            imgBtn.forEach(function (item) {
                item.classList.remove('on1');
            })
            list.forEach(function (item) {
                item.classList.remove('on1');
            })
            imgBtn[i].classList.add('on1');
            list[i].classList.add('on1');
        }
    }

    let imgBtn2 = document.querySelectorAll('.se04 .btn2 li');
    let list2 = document.querySelectorAll('.se04 .vp-raw2 .grid2');
    for (let i = 0; i < imgBtn2.length; i++) {
        imgBtn2[i].onclick = function () {
            imgBtn2.forEach(function (item2) {
                item2.classList.remove('on2');
            })
            list2.forEach(function (item2) {
                item2.classList.remove('on2');
            })
            imgBtn2[i].classList.add('on2');
            list2[i].classList.add('on2');
        }
    }

    let imgBtn3 = document.querySelectorAll('.se05 .btn3 li');
    let list3 = document.querySelectorAll('.se05 .vp-raw3 .grid3');
    for (let i = 0; i < imgBtn3.length; i++) {
        imgBtn3[i].onclick = function () {
            imgBtn3.forEach(function (item3) {
                item3.classList.remove('on3');
            })
            list3.forEach(function (item3) {
                item3.classList.remove('on3');
            })
            imgBtn3[i].classList.add('on3');
            list3[i].classList.add('on3');
        }
    }


})