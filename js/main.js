const heroAnime = ['Larry Daniels', 'Developer', 'Designer'];
// HERO ANIMATION
function heroAnimation( list, wordIndex, letterIndex, actionType ) {
    const target = document.querySelector('.hero-anime');
    const timeStep = 40;
    const delayAfter = 500;
    const deleteTimeStep = 50;
    const delayBefore = 1000;

    if ( actionType === 'add' ) {
        target.classList.add('anime');
        setTimeout(() => {
            target.textContent += list[wordIndex][letterIndex];
            if ( list[wordIndex].length > letterIndex + 1 ) {
                heroAnimation( list, wordIndex, letterIndex+1, actionType )
            } else {
                heroAnimation( list, wordIndex, letterIndex, 'delayAfter' )
            }
        }, timeStep);
    }
    if ( actionType === 'delayAfter' ) {
        setTimeout(() => {
            heroAnimation( list, wordIndex, letterIndex, 'remove' )
        }, delayAfter);
    }
    if ( actionType === 'remove' ) {
        setTimeout(() => {
            const word = list[wordIndex];
            target.textContent = word.slice(0, letterIndex);
            if ( 0 <= letterIndex - 1 ) {
                heroAnimation( list, wordIndex, letterIndex-1, actionType )
            } else {
                heroAnimation( list, wordIndex, letterIndex, 'delayBefore' )
            }
        }, deleteTimeStep);
    }
    if ( actionType === 'delayBefore' ) {
        setTimeout(() => {
            if ( wordIndex+1 === list.length ) {
                heroAnimation( list, 0, 0, 'add' )
            } else {
                heroAnimation( list, wordIndex+1, 0, 'add' )
            }
        }, delayBefore);
    }
}

heroAnimation( heroAnime, 0, 0, 'add' );


// NAV menu



window.onscroll = function() {nav_position()};

let header = document.querySelector('header').offsetHeight;
let nav = document.querySelector('nav');

function nav_position() {
  if (window.pageYOffset > header - 1) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


/// Scroll spy 

$(document).ready(function () {

    $(document).on("scroll", onScroll);
  
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
          $(document).off("scroll");
           $('a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
           var target = this.hash,
           menu = target;
           $target = $(target);
         $('html, body').stop().animate({
              'scrollTop': $target.offset().top+2
          }, 600, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });
  
  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('nav a').each(function () {
          var currLink = $(this);
         var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('#home a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }



  // tap tap tap :D


  let close = document.querySelector('.close').onclick = tapClose;


    function tapClose() {

            let tap = document.querySelector('.links');
            
                if ( tap.className === 'links') {
                    tap.className += ' tap';
                } else {
                    
                }
        
    }
    tapClose();




    let tap = document.querySelector('body');

    let links = document.querySelectorAll('.links a');
    
    for (let i=0; i < links.length; i++) {
        links[i].addEventListener('click', click) 
    }
    function click() {
        document.querySelector('.links').classList.add('tap');
        console.log(this);
        
    }
       

    