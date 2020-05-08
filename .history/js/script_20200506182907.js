$(document).ready(function(){
    lightbox.option({
        'wrapAround': true
      });
      $('.accordin-writers').click(function(event) {
        
         if(event.target.id.split('-')[0] === 'button') {
           $('#book1').attr('src', 'images/img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
          $('#book2').attr('src', 'images/img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
          }
        console.log(event.target.id.split('-')[1] + '-book1.jpg');

      });
});

