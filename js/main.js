// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}

// Section Two //
let tabs = document.querySelectorAll('.tab-box button');
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll('.section-3-box');
let divsArray = Array.from(divs);

const filtercards = e => {
  document.querySelector(".activated").classList.remove("activated");
  e.target.classList.add("activated");
  divs.forEach(card => {
    card.classList.add("hide");
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      card.classList.remove("hide");
    };
  });

};
tabs.forEach(button => button.addEventListener("click",filtercards));

// Section Four //
$('.responsive0').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    dots:true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// Section Five //
$('.responsive').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    dots:true,
    autoplay:true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// Course Details //
let onTab = document.querySelectorAll('.course-buttons button');
let onTabArray = Array.from(onTab);

let content = document.querySelectorAll('.course-desription > div');
let contentArray = Array.from(content);

onTabArray.forEach((ele) => {
  ele.addEventListener("click" , function (event) {
    onTabArray.forEach((ele) => {
      ele.classList.remove("active_button");
    });
    event.currentTarget.classList.add("active_button");
    contentArray.forEach((div) => {
      div.style.display = 'none';
    });
    document.querySelector(event.currentTarget.dataset.cont).style.display = 'block';
  });
});