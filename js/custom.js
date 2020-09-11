(function($){
    $(document).ready(function(){
        new WOW().init({
            mobile: false,
        });

       $('.nav').hide(function(){
           $('.menu0').click(function(){
               $('.nav').show(function(){
                   $('.menu0').click(function(){
                       $('.nav').hide();
                   });
               });
           });
       });
    });
   
   })(jQuery)