$( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 0,
      max: 40,
      value: 8,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value * 25 +"$" );
        var urlVal = ui.value * 25;
        if(urlVal >= 200 && urlVal <= 250 ){
          $('.submit-btn').attr("href", "https://www.junction17cars.co.uk/stock/search/?finance[]=payment&payment-term[]=36&payment-deposit[]=2000&payment-annual-mileage[]=5000&payment-max-price[]=200"
          );
        } else if(urlVal > 250 ){
          $('.submit-btn').attr("href", "https://www.junction17cars.co.uk/stock/search/?finance[]=payment&payment-term[]=36&payment-deposit[]=2000&payment-annual-mileage[]=5000&payment-min-price[]=300"
          );
        } else{
          $('.submit-btn').attr("href", "#");
        }
      }
    });
    // $( "#amount" ).val(200);
    
  } );