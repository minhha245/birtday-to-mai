
$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});


$(document).ready(function () {
    $("#gift-img").on("click", function () {
        const $img = $(this);

        $img.addClass("shake");

        $img.on("animationend", function () {
            $img.removeClass("shake");
        });
    });
});

const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const replay = document.querySelector('#replay');

runAnimation()
function resetDOM() {
    counter.classList.remove('hide')
    $('.main-2').hide();

    nums.forEach((num) => {
        num.classList.value = '';
    })

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast ) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                $('.counter').hide();
                $('.main-2').show();
            }
        })
    })
}

