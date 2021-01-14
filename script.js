//dom is documnet object model which is API(application programming interface) for js ,in DOM our html elements are represented as objects
//dom is independent of any language so it acts as an interface for all the languages
//now any programming language can have access to my html elements through the interface which made those elements as objects 
/*
$(document).ready(function() { //$=alias for jquery, document is an object,ready is an event code included within this part will only be executed after the dom of the page is ready for js to use
    $(window).scroll(function() {
        //window is object scroll is event 
        //  similar to this $(window).on('scroll',function()
        //handler is a function which is executed each time an event occurs
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

    });
    //toggle menu/nav bar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});
*/
alert('Please give your feedback!')

function post() {
    if (window.confirm("Are you sure you want to submit?")) {
        window.open("https://formspree.io/thanks?next=https%3A%2F%2Fpriyanshi527.github.io%2Fhtml%2FPortfolio%2Fportfolio.html&language=en")
    } else {
        window.open("https://apoogupta.github.io/");
    }
}