const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box'); // Pastikan elemen cube ada dan hanya satu yang dipilih
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// Fungsi untuk menangani navigasi yang diklik
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        // Hapus class "active" dari semua nav item
        document.querySelector('.nav-list li.active')?.classList.remove('active');
        nav.classList.add('active');

        // Rotasi cube ketika navbar diklik
        cube.style.transform = `rotateY(${idx * -90}deg)`;

        // Hapus class "active" dari section yang sedang aktif
        document.querySelector('.section.active')?.classList.remove('active');
        // Tambahkan class "active" ke section yang sesuai dengan index
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSec => {
            if (arrSec.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
        });
        if (sections[0].classList.contains('active')) {
            sections[4].classList.remove('action-contact');
        }
    });
});

resumeLists.forEach((list, index) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active')?.classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active')?.classList.remove('active');
        resumeBoxs[index].classList.add('active');
    });
});

portfolioLists.forEach((list, index) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active')?.classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active')?.classList.remove('active');
        portfolioBoxs[index].classList.add('active');
    });
});
