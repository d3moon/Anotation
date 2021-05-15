$(()=>{
  $('.btn-add').click(()=>{
    var el =  '<div class="anotation"><textarea placeholder="Sua nova anotação..."></textarea></div>';
    $('.container').append(el)


    var textArea = $('.anotation').last().find('textarea')

    var date = new Date();
    var hh = date.getHours()
    var mm = date.getMinutes()
    var finalTime = hh+':'+mm;

    textArea.html('Nova anotação em: '+ finalTime);
  })
})