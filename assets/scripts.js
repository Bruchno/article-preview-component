const btnShare = document.querySelector('.btn-share');
const author = document.querySelector('.author');
const overlay = document.querySelector('.overlay-block');
const image_div = document.querySelector('.contntent__image');
const content_div = document.querySelector('.article');

window.onload = function(){
    btnShare.addEventListener('click', function() {
        if (overlay.classList.contains('hide-el')) { 
            overlay.classList.remove('hide-el');
        }  else {
            overlay.classList.add('hide-el');
        }     
    });
    let h_content = content_div.offsetHeight;
    let style_obj = window.getComputedStyle(image_div, null).getPropertyValue("overflow");
    if(style_obj !== 'visible') {
        image_div.style.height = h_content + 'px';        
        image_div.style.width = '100%'; 
    } else {
        const clon = btnShare.cloneNode(true);
        clon.classList.remove('btn-share');
        clon.style.marginRight = '-0.5rem';
        clon.style.marginLeft = 'auto';
        overlay.appendChild(clon);
    }    
    document.addEventListener('click', function(event) {
        if (!btnShare.contains(event.target) && !author.contains(event.target)) {
            overlay.classList.add('hide-el');
        }
    });
}