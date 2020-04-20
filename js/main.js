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


document.querySelector('.close').onclick = navBar;

    function navBar() {
        let bar = document.querySelector('.links');
        
            if ( bar.className === 'links') {
                bar.className += ' active';
            } else {
                bar.className = 'links';
            }
    }
// Sticky NAV bar

    window.onscroll = () => {
        let c = window.scrollY;
        let lett = document.querySelectorAll('a');

        for (let i=0; i < 7; i++) {
          lett[i].style.color = '';

        
      
        if (c > window.innerHeight - 1) {
          document.querySelector("#x").className = "fixed-nav";
          document.querySelector(".logo").style.color = 'black';
          document.querySelector(".close").style.color = 'black';
        lett[i].style.color = 'black';
        lett[i].classList.add('hover');
    
        } else {
          document.querySelector("#x").className = "";
          document.querySelector(".logo").style.color = 'white';
          document.querySelector(".close").style.color = 'white';
            lett[i].style.color = 'white';
            lett[i].style.borderBottom = '';
            lett[i].classList.remove('hover');
        }
        
        
      }
    }



