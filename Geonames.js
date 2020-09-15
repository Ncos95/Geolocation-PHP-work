$('#button').click(function() {

    $.ajax({
        url: "libraries/PHP/Geonames.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#country').val(),
            lang: $('#language').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#Capital').html(result['data'][0]['capital']);
                $('#Population').html(result['data'][0]['population']);
                $('#Language').html(result['data'][0]['languages']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            Console.log('An error has occured, please try again.');
        }
    }); 


});