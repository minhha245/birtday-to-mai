const count = document.getElementById('count');
const head = document.getElementById('head');
const giftbox = document.getElementById('merrywrap');
const canvasC = document.getElementById('c');

const countdownConfig = {
    birthdate: 'Nov 24, 2024',
    name: 'MaiMai'
};

function hideEverything() {
    head.style.display = 'none';
    count.style.display = 'none';
    giftbox.style.display = 'none';
    canvasC.style.display = 'none';
}

hideEverything();

const confettiSettings = { target: 'confetti' };
const confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date(`${countdownConfig.birthdate} 00:00:00`).getTime();
x = setInterval(function() {
    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById('day').innerText = Math.floor(distance / day);
    document.getElementById('hour').innerText = Math.floor(
        (distance % day) / hour
    );
    document.getElementById('minute').innerText = Math.floor(
        (distance % hour) / minute
    );
    document.getElementById('second').innerText = Math.floor(
        (distance % minute) / second
    );

    window.addEventListener('resize', function() {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;

        hw = w / 2;
        hh = h / 2;

        ctx.font = opts.charSize + 'px Verdana';
    });

    if (distance > 0) {
        head.style.display = 'initial';
        count.style.display = 'initial';
    } else {
        head.style.display = 'none';
        count.style.display = 'none';
        giftbox.style.display = 'initial';
        clearInterval(x);
    }
}, second);