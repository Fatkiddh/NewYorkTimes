// alert('hello world');

var apiKey ='422850d133204b6abca2dbf77df77480';

$("#btn1").on('click', function(){
  var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+
  apiKey +'&q=';
  $.ajax({
    url:url,
    method:"GET",
  }).done(function(result){
  console.log(result);
  }).fail(function(err){
    throw err;
  })
});
