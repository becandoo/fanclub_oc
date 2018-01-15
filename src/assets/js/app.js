import $ from "jquery";
import Popper from "popper.js";

window.$ = $;

import Bootstrap from "bootstrap";
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/custom.js';

$("document").ready(function() {

  function replaceOffsets(offsetColumns) {    
      $(".col-sm-offset-" + offsetColumns).each(function(i, el) {
        $(this).removeClass("col-sm-offset-" + offsetColumns);
        $(this).addClass("offset-sm-" + offsetColumns);
      });
      $(".col-md-offset-" + offsetColumns).each(function(i, el) {
        $(this).removeClass("col-sm-offset-" + offsetColumns);
        $(this).addClass("offset-sm-" + offsetColumns);
      });
      $(".col-lg-offset-" + offsetColumns).each(function(i, el) {
        $(this).removeClass("col-sm-offset-" + offsetColumns);
        $(this).addClass("offset-sm-" + offsetColumns);
      });
    };
    
    for (var i = 1; i < 13; i++) {
      replaceOffsets(i);
    };
    
});
