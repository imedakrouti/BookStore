$(document).ready(function(){
    lightbox.option({
        'wrapAround': true
      });
      $('.accordin-writers').click(function(event) {
        
          if(event.target.id.split('-')[0] === 'button') {
           $('#book-1').attr('src', 'images/img/writers/' + event.target.id[1] + '-book1.jpg');
          $('#book-2').attr('src', 'images/img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
          }
        console.log(event.target.id+ '-book1.jpg');

      });
});

