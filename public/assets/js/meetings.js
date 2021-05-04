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
    e.preventDefault();
});