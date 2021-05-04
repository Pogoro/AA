$('.online-button').on('click', function(e){
    e.preventDefault();
    $.ajax({
        url: $(this).attr('href'),
        type: 'GET',
        success: function(res){
            $('#target-online').html(res);
        }
    })
});

$('.meeting-button').on('click', function(e){
    e.preventDefault();
    $.ajax({
        url: $(this).attr('href'),
        type: 'GET',
        success: function(res){
            $('#target-meeting').html(res);
        }
    })
});

$('#target-meeting').on('click', '.map-button', function(e){
    var location = encodeURIComponent($(this).attr('location'));
    var google_key = $(this).attr('key');
    $('iframe').attr('src', `https://www.google.com/maps/embed/v1/search?key=${google_key}&q=${location}`);
    $('iframe').attr('height', '450');
    $('iframe').show();
});