$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:[],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        scrollOverflowOptions: null,
        touchSensitivity: 18,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : [],
        paddingTop: '',
        paddingBottom: '',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        afterLoad: function(anchorLink, index){
          $(this).find('.collection-image').addClass('active');
          animateActors($(this));
        },

        onLeave: function(index, nextIndex, direction){
          //$(this).next().find('.actor').addClass('active');
          //$(this).find('.actor').removeClass('active');
          if (direction === 'down') {
            animateActors($('.section')[index]);
          }
        },

        afterRender: function(){
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    function animateActors(target){

      $(target).find('.actor').each(function(index, value){
        if($(this).hasClass('instant')){
          $(this).delay(200).queue(function(next){
            $(this).addClass('active');
            next();
          });
        }
        else{
          $(this).delay(200 * (index + 1)).queue(function(next){
            $(this).addClass('active');
            next();
          });
        }
      });
    }
});
