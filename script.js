const sidebar = document.querySelector('.sticky-column');
        const header = document.getElementsByTagName('header')[0]
        const menuToggle = document.getElementById('menuToggle')
        const hamburger = document.querySelector('.hamburger')
        const menu = document.getElementById('menu');
        window.addEventListener('scroll', function () {
            if (pageYOffset > 115 && document.body.clientWidth > 1090) {
                sidebar.classList.add('is_stuck')
            } else {
                sidebar.classList.remove('is_stuck')
            }
        });

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active')
            header.classList.toggle('open-menu')

        }, false)
        menu.addEventListener('click', (e) => {
            if (header.classList.contains('open-menu')) {
                header.classList.toggle('open-menu')
                hamburger.classList.toggle('is-active')
            }
        }, false)
