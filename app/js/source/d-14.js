(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getQuote);

  }

  function getQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' +symbol+'&callback=?';
    $.getJSON(url, function(data){
    var $div = $('#quote').text('$' + data.LastPrice);
    $('#quote').append($div);
    });
  }






})();
