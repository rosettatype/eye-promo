/*!
 *
 *  Project:  Type Specimen
 *  Author:   Petr Urbanek - www.r4ms3s.cz
 *  Twitter:  @r4ms3scz
 *
 * @param {Object} window, document, undefined
 *
 */

 (function(window, document, undefined) {
    
    // Defaults
    // =====================================
   
    var r4 = window.r4 = {
        utils : {},
        cache : {}
    };
  

    // Methods
    // =====================================

    r4.utils.init = function() {
        r4.cache.window                = $(window);
        r4.cache.document              = $(document);
        r4.cache.html                  = $('html');
        r4.cache.body                  = $('body');

        r4.cache.header                = r4.cache.body.find('header');
        r4.cache.footer                = r4.cache.body.find('footer');
        r4.cache.section               = r4.cache.body.find('section');
        r4.cache.article               = r4.cache.section.find('article');

        $('.img.first').cycle({ 
            fx:'scrollLeft', 
            speed:500,
            timeout:4000, 
            pause:1,
            containerResize: false,
            slideResize: false,
            fit: 1
        });
        $('.img.last').cycle({ 
            fx:'fade', 
            speed:500,
            timeout:4000, 
            pause:0,
            containerResize: false,
            slideResize: false,
            fit: 1
        });
    };


    // Initialize Events
    // =====================================

    r4.utils.init();

})(window, document);
