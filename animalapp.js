window.onload = function () {
    $("button").on("click", function () {
        $("#gifs-appear-here").empty();
        // Grabbing and storing the data-animal property value from the button
        animal = $(this).attr("data-animal");
        // Constructing a queryURL using the animal name
        queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            animal +
            "&api_key=o2BMu32QNHXQZs2A5dgV6kntwDSDTrXU&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                // Creating and storing a div tag
                animalDiv = $("<div>");
                // Creating a paragraph tag with the result item's rating
                p = $("<p>").text("Rating: " + results[i].rating);
                // Creating and storing an image tag
                animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", results[i].images.fixed_height.url);
                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.prepend(animalImage);
                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(animalDiv);
            }
        });
    });

    function search() {
        event.preventDefault();
        $("#gifs-appear-here").empty();

        animalInput = $("input:text").val();
        console.log(animalInput);

        queryURL =
            "https://api.giphy.com/v1/gifs/search?q=" +
            animalInput +
            "&api_key=o2BMu32QNHXQZs2A5dgV6kntwDSDTrXU&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            results = response.data;
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                // Creating and storing a div tag
                animalDiv = $("<div>");
                // Creating a paragraph tag with the result item's rating
                p = $("<p>").text("Rating: " + results[i].rating);

                newAnimalBtnDiv = $("<button>", {
                    text: animalInput,
                    click: function () {
                        $("#gifs-appear-here").empty();
                        // Grabbing and storing the data-animal property value from the button
                        animal = $(this).attr("data-animal");
                        // Constructing a queryURL using the animal name
                        queryURL =
                            "https://api.giphy.com/v1/gifs/search?q=" +
                            animal +
                            "&api_key=o2BMu32QNHXQZs2A5dgV6kntwDSDTrXU&limit=10";

                        // Performing an AJAX request with the queryURL
                        $.ajax({
                            url: queryURL,
                            method: "GET"
                        }).then(function (response) {
                            console.log(queryURL);
                            console.log(response);
                            // storing the data from the AJAX request in the results variable
                            var results = response.data;
                            // Looping through each result item
                            for (var i = 0; i < results.length; i++) {
                                // Creating and storing a div tag
                                animalDiv = $("<div>");
                                // Creating a paragraph tag with the result item's rating
                                p = $("<p>").text("Rating: " + results[i].rating);
                                // Creating and storing an image tag
                                animalImage = $("<img>");
                                // Setting the src attribute of the image to a property pulled off the result item
                                animalImage.attr("src", results[i].images.fixed_height.url);
                                // Appending the paragraph and image tag to the animalDiv
                                animalDiv.append(p);
                                animalDiv.prepend(animalImage);
                                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                                $("#gifs-appear-here").prepend(animalDiv);
                            }
                        })
                    }
                }).attr("data-animal", animalInput);
                // Creating and storing an image tag
                animalImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                animalImage.attr("src", results[i].images.fixed_height.url);
                // Appending the paragraph and image tag to the animalDiv
                animalDiv.append(p);
                animalDiv.append(animalImage);
                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(animalDiv);
            }
            $("#newAnimalBtn").prepend(newAnimalBtnDiv);
        });
    }
    $("#animalBtn").on("click", search);
};
