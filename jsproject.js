$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay:true,
        autoplaySpeed: 1000
    });

});
var $selectors= {
    name: $('#name'),
    email: $('#email'),
    subject: $('#subject'),
    yourmassage: $('#your-massage'),
    submit: $('#submit')
};
 $selectors.submit.on('click' , function (){
   // alert('ok')
     var n1= $selectors.name.val();
     var n2= $selectors.email.val();
     var n3= $selectors.subject.val();
     var n4= $selectors.yourmassage.val();
     var n5=$selectors.submit.val();
     console.log(n1,n2,n3,n4)

 });
 //slm ostad vaght bkhyr dakhele class b man goftid baraye ersal payam faghat consol log begir k bbinam code kar mikone