const photo1 = "https://img11.postila.ru/data/1b/07/9b/88/1b079b88e73ecb06627110d958b516e6d32bfe6da361d6c73914da1eb8b57a7f.jpg",
      photo2 = "https://znaj.ua/images/2019/08/19/UGWoyg87BhwlANZiPRENsAh9c1iXu6uI2pxL0R5I.jpeg",
      photo3 = "https://avatars.mds.yandex.net/get-pdb/1923820/feb602b1-968b-4526-911e-407b624bd4d3/s1200?webp=false",
      photo4 = "https://avatars.mds.yandex.net/get-pdb/2501802/8acc63a1-4ad9-44ae-88c8-f0148953112b/s1200?webp=false",
      photo5 = "https://avatars.mds.yandex.net/get-pdb/1981950/e1cde115-ef16-445d-9901-4411ed57f1bf/s1200",
      photos = [photo1, photo2, photo3, photo4, photo5];

const start = document.querySelector('.start'),
      stop = document.querySelector('.stop'),
      wrapper = document.querySelector('.wrapper'),
      width = parseInt(window.getComputedStyle(wrapper).width),
      height = parseInt(window.getComputedStyle(wrapper).height),
      animationDuration = 2000; //duration in ms

let duration = false, // flag of process generation photos
    i = 0,
    int; //interval

start.addEventListener('click', function () {
    duration = true;
    start.style.display = 'none';
    stop.style.display = 'block';
    stop.textContent = 'Stop';

    int = setInterval(function () {
        let x = Math.round((Math.random() - 0.5) * width); //coordinate x
        let y = Math.round((Math.random() - 0.5) * height); //coordinate y
        let z = Math.random() + 0.3; //scale of the image
        let g = (Math.random() > 0.4) ? false : true; //grayscale
        let t = (Math.random() > 0.5) ? false : true; //wirrow  
        let elem = document.createElement('div');

        elem.style.backgroundImage = `url(${photos[i]})`;
        elem.className = "photo";
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        elem.style.transform = `scale(${z})`;
        if (g) { elem.style.filter = 'grayscale(100%)' };
        if (t) (elem.style.transform = `scale(-${z}, ${z})`);

        wrapper.append(elem);

        (i < photos.length - 1) ? i++ : i = 0; //photo changer
    }, animationDuration);
});

stop.addEventListener('click', () => {
    if (duration) {
        clearInterval(int);
        duration = false;
        stop.style.backgroundColor = 'green';
        stop.textContent = 'Again';
    } else {
        stop.style.backgroundColor = '#A0522D';
        start.click();
    };
});