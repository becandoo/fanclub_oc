import $ from 'jquery';
import Popper from 'popper.js';

window.$ = $;

import Bootstrap from 'bootstrap';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

//replace class
function replaceClass(vintageClass, newClass) {
    var vintageEls = document.querySelectorAll('.' + vintageClass);
    Array.prototype.forEach.call(vintageEls, function(elements, index) {
        vintageEls[index].classList.add(newClass);
        vintageEls[index].classList.remove(vintageClass);
    });
};

//boostrap v3 to v4 functions
replaceClass('pull-right', 'float-right');
replaceClass('pull-left', 'float-left');
