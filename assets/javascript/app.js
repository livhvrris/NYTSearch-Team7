  var search;
  var numYears;
  var start;
  var endYear;

    // This is our API Key
    var APIKey = "c28997d55be149309192c6510de93e20";

    // Here we are building the URL we need to query the database
    

    // Here we run our AJAX call to the OpenWeatherMap API

        search = $('#searchTerm').val();
        numYears = $('#numRecords').val();
        start = $('#startYear').val();
        end = $('#endYear').val();


  var queryURL =  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=" + APIKey + "&q= search";

    $('#search').on('click', function() {

      $.ajax({url: queryURL, method: 'GET'})

    // We store all of the retrieved data inside of an object called "response"
      .done(function(result) {

      // Log the queryURL
       console.log(queryURL);

      // Log the resulting object
       console.log(result);

        var results = result.data;


        // $( "form" ).submit(function( event ) 
        // {
        //   console.log( $( this ).serializeArray() );
        //  event.preventDefault();
        //   });

    }); 



      }); 

     



    // // .fail(function(err) {
    // //       throw err;

    //   });