// Change Navbar Background Color on Scroll! | HTML, CSS & jQuery:

// css-property-here>
.bgcolor{
    transition: 0.5s ease;
    background-color:green;
   
}
.bgcolor.scrolled{
    background-color: #edecf0;
}

// js-property_here>
$(window).scroll(function(){
        $('nav').toggleClass('scrolled',$(this).scrollTop() >50);
    });

// ====================================
note:1) Navbar tag-name must be "nav"

	2)'bgcolor' navbar className + 'fixed-top' Navbar className;