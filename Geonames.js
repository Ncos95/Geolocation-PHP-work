$('#button').click(function() {

    $.ajax({
        url: "Geonames.php",
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

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            Console.log('An error has occured, please try again.');
        }
    }); 


});
