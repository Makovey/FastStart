document.addEventListener('DOMContentLoaded', function () {
    'use strict';


    //ANIMATIONS
    let motion = document.querySelectorAll('.motion');

    let visible = function (target) {
        let targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            //получаем размеры элемента
            windowPosition = {
                top: window.pageYOffset,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
        //получаем расположение окна браузера

        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
            target.classList.add('animation');
        }
        //если элемент виден, то применяется анимация
    };

    window.addEventListener('scroll', function () {
        motion.forEach((item) => {
            visible(item);
        });
    });

    setTimeout(() => {
        motion.forEach((item) => {
            visible(item);
        });
    }, 500);
    //TimeOut стоит, так как стоит прелоадер


//Анимация с задержкой для группы элементов
    let abilitiesItem = document.querySelectorAll('.abilities__item'),
        icons = document.querySelectorAll('.icon');
    icons.forEach((icon) => {
        icon.style.opacity = '0';
    });


    let linkBlock = document.querySelector('.links'),
        link = document.querySelectorAll('.links__block');
    link.forEach((link) => {
        link.style.opacity = '0';
    });


    let clientsBlock = document.querySelector('.clients__block'),
        clientsImg = document.querySelectorAll('.clients__img');
    clientsImg.forEach((img) => {
        img.style.opacity = '0';
    });


    let priceBlocks = document.querySelector('.prices'),
        prices = priceBlocks.querySelectorAll('.price-block');
    prices.forEach((priceItem) => {
        priceItem.style.opacity = '0';
    });
    //Выключаем opacity здесь, так как возможно у пользователя будет отключен JS

    let widthWindow = window.innerWidth,
        tabletWidth = 991;
    //На 991px срабатывает медиазапрос

    window.addEventListener('scroll', () => {
        let centerHeightTop = window.innerHeight / 1.5,
            centerHeightBottom = window.innerHeight / 4;
        if (widthWindow > tabletWidth) {
            abilitiesItem.forEach((block) => {
                if (block.getBoundingClientRect().top <= centerHeightTop
                    && block.getBoundingClientRect().bottom > centerHeightBottom) {
                    icons.forEach((item, i) => {
                        item.classList.add('animation');
                        item.style.animationDelay = i / 2 + 's';
                    });
                }
            });
        } else {
            icons.forEach((item) => {
                let centerHeightTop = window.innerHeight / 1.5;
                let centerHeightBottom = window.innerHeight / 2;
                if (item.getBoundingClientRect().top <= centerHeightTop
                    && item.getBoundingClientRect().bottom > centerHeightBottom) {
                    item.classList.add('animation');
                }
            });
        }
        //блок с иконками
        if (widthWindow > tabletWidth) {
            if (priceBlocks.getBoundingClientRect().top <= centerHeightTop
                && priceBlocks.getBoundingClientRect().bottom > centerHeightBottom) {
                prices.forEach((priceItem, i) => {
                    priceItem.classList.add('price-anim');
                    priceItem.style.animationDelay = i / 3 + 's';
                });
            }
        } else {
            prices.forEach((priceItem) => {
                let centerHeightTop = window.innerHeight / 1.5;
                let centerHeightBottom = window.innerHeight / 5;
                if (priceItem.getBoundingClientRect().top <= centerHeightTop
                    && priceItem.getBoundingClientRect().bottom > centerHeightBottom) {
                    priceItem.classList.add('price-anim');
                }
            });
        }
        //блок с прайслистом
        if (widthWindow > tabletWidth) {
            if (clientsBlock.getBoundingClientRect().top <= centerHeightTop
                && clientsBlock.getBoundingClientRect().bottom > centerHeightBottom) {
                clientsImg.forEach((item, i) => {
                    item.classList.add('animation');
                    item.style.animationDelay = i / 3 + 's';
                });
            }
        } else {
            clientsImg.forEach((item) => {
                let centerHeightTop = window.innerHeight / 1.5;
                let centerHeightBottom = window.innerHeight / 5;
                if (item.getBoundingClientRect().top <= centerHeightTop
                    && item.getBoundingClientRect().bottom > centerHeightBottom) {
                    item.classList.add('animation');
                }
            });
        }
        //блок с "наши клиенты"
        let centerHeightTopLink = window.innerHeight,
            centerHeightBottLink = window.innerHeight / 4;
        if (linkBlock.getBoundingClientRect().top <= centerHeightTopLink
            && linkBlock.getBoundingClientRect().bottom > centerHeightBottLink) {
            link.forEach((item, i) => {
                item.classList.add('animation');
                item.style.animationDelay = i / 3 + 's';
            });
        }
        //блок с ссылками
    });


    //PRELOADER
    let preloader = document.querySelector('.preloader');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        preloader.classList.add('op');
        document.body.style.overflow = 'auto';
    }, 600);
    setTimeout(() => {
        preloader.classList.add('start');
        preloader.style.display = 'none';
    }, 1100);


    //SCROLLING
    let links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let id = link.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    );


    //COMMENTS
    let commentIndex = 1,
        comments = document.querySelectorAll('.feedback__block'),
        dotsWrap = document.querySelector('.dots'),
        dots = document.querySelectorAll('.dot');

    function showComment(i) {
        if (i > comments.length) {
            commentIndex = 1
        }
        if (i < 1) {
            commentIndex = comments.length;
        }

        comments.forEach((value) => {
            return value.style.display = 'none';
        });

        dots.forEach((value) => {
            return value.classList.remove('dot-active');
        });
        comments[commentIndex - 1].style.display = 'flex';
        dots[commentIndex - 1].classList.add('dot-active');
    }

    showComment(commentIndex);

    comments.forEach((value) => {
        value.addEventListener('click', () => {
            plusComment(1);
        });
    });

    function plusComment(i) {
        showComment(commentIndex += i);
    }

    function currentComment(i) {
        showComment(commentIndex = i);
    }

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentComment(i);
            }
        }
    });


    //ARROW
    let arrow = document.querySelector('.arrow-up'),
        header = document.getElementById('header');

    function hidearrow() {
        let botSection = header.getBoundingClientRect().bottom;
        if (botSection <= 0) {
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    }

    window.addEventListener('scroll', () => {
        hidearrow();
    });
    hidearrow();


    //ANCHORS
    let aboutUs = document.getElementById('about-us'),
        advantages = document.getElementById('advantages'),
        question = document.getElementById('question'),
        price = document.getElementById('price'),
        feedback = document.getElementById('feedback'),
        contacts = document.getElementById('contacts');

    let ul = document.querySelector('.menu'),
        aboutButton = ul.querySelector('a[href="#about-us"]'),
        advButton = ul.querySelector('a[href="#advantages"]'),
        quesButton = ul.querySelector('a[href="#question"]'),
        priceButton = ul.querySelector('a[href="#price"]'),
        feedbackButton = ul.querySelector('a[href="#feedback"]'),
        contactsButton = ul.querySelector('a[href="#contacts"]');

    const sections = [
        {
            section: aboutUs,
            button: aboutButton
        },
        {
            section: advantages,
            button: advButton
        },
        {
            section: question,
            button: quesButton
        },
        {
            section: price,
            button: priceButton
        },
        {
            section: feedback,
            button: feedbackButton
        },
        {
            section: contacts,
            button: contactsButton
        },

    ];

    window.addEventListener('scroll', () => {
        const offsets = sections.map(section => {
            const rect = section.section.getBoundingClientRect();
            return {
                top: rect.top - menuHeight,
                bottom: rect.bottom - menuHeight,
            };
        });

        offsets.forEach((offset, key) => {
            if (offset.top <= 0 && offset.bottom > 0) {
                sections.forEach(section => section.button.classList.remove('blue'))
                sections[key].button.classList.add('blue');
            }
        })
    });


    //MAIN MENU
    let burger = document.querySelector('.burger'),
        navbar = document.getElementById('navbar'),
        navigation = document.getElementById('navigation'),
        menuHeight = navigation.offsetHeight;

    burger.addEventListener('click', () => {
        navbar.classList.remove('anim');
        navbar.classList.remove('anim-rev');

        if (navbar.classList.contains('flex')) {
            navbar.classList.add('anim-rev');
            setTimeout(() => {
                navbar.classList.remove('flex');
            }, 300);
        } else {
            navbar.classList.add('flex');
            navbar.classList.add('anim');
        }
        links.forEach((link) => {
            link.addEventListener('click', () => {
                navbar.classList.add('anim-rev');
                setTimeout(() => {
                    navbar.classList.remove('flex');
                }, 300);
            });
        });
    });


    window.addEventListener('scroll', () => {
        let botSection = header.getBoundingClientRect().bottom;
        if (botSection <= 0) {
            navigation.style.position = 'fixed';
            header.style.marginBottom = '53px';
        } else {
            navigation.style.position = 'relative';
            header.style.marginBottom = '0px';
        }
    });


    //AJAX
    let forms = document.querySelectorAll('.forms');
    forms.forEach((val) => {
        val.addEventListener('submit', (e) => {
            e.preventDefault();
            let name = val.querySelector('[name=name]').value;
            let email = val.querySelector('[name=email]').value;
            let request = new XMLHttpRequest();
            request.open('POST', './form.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            if (val.classList.contains('top')) {
                request.send('name=' + name + '&email=' + email);
            } else {
                let text = val.querySelector('[name=text]').value;
                request.send('name=' + name + '&email=' + email + '&text=' + text);
            }
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status == 200) {
                    if (request.responseText == 'yes') {
                        let accept = document.querySelector('.message-accept');
                        accept.style.display = 'flex';
                        setInterval(() => {
                            accept.style.display = 'none'
                        }, 3000);
                    }
                } else {
                    if (request.responseText == 'nope') {
                        let failure = document.querySelector('.message-failure');
                        failure.style.display = 'flex';
                        setInterval(() => {
                            failure.style.display = 'none';
                        }, 3000);
                    }
                }
            });
        });
    });


    //PARALLAX
    window.addEventListener("scroll", () => {
        let scrolledHeight = window.pageYOffset;
        header.style.backgroundPositionY = (scrolledHeight - header.offsetTop) / 1.5 + "px";
        question.style.backgroundPositionY = (scrolledHeight - question.offsetTop) / 1.5 + "px";
        contacts.style.backgroundPositionY = (scrolledHeight - contacts.offsetTop) / 1.5 + "px";
    });
});


