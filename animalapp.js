

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=parrrot&api_key=o2BMu32QNHXQZs2A5dgV6kntwDSDTrXU&limit=10");
xhr.done(function (data) { console.log("success got data", data); });



