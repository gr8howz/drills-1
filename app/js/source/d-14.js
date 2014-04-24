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
      var $div1 = $('#quote').text(data.Symbol);
      var $div2 = $('#quote').text(data.Name);
      var $div3 = $('#quote').text('$' + data.LastPrice);

      $('#quote').append($div1);
      $('#quote').append($div2);
      $('#quote').append($div3);

    });
  }






})();
