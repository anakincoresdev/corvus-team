$('#free_button').magnificPopup({
    items: {
        src: '#free_training',
        type: 'inline'
    },
    closeBtnInside: false
});

$('#tricking_button').magnificPopup({
    items: {
        src: '#tricking',
        type: 'inline'
    },
    closeBtnInside: false
});

$('#acrobatics_button').magnificPopup({
    items: {
        src: '#acrobatics',
        type: 'inline'
    },
    closeBtnInside: false
});

$('#gym_button').magnificPopup({
    items: {
        src: '#gym',
        type: 'inline'
    },
    closeBtnInside: false
});

$('#trainer_button').magnificPopup({
    items: {
        src: '#trainer',
        type: 'inline'
    },
    closeBtnInside: false
});

$('.begin1_button').magnificPopup({
    items: {
        src: '#begin1',
        type: 'inline'
    },
    closeBtnInside: false
});

$('.begin2_button').magnificPopup({
    items: {
        src: '#begin2',
        type: 'inline'
    },
    closeBtnInside: false
});

$('.begin3_button').magnificPopup({
    items: {
        src: '#begin3',
        type: 'inline'
    },
    closeBtnInside: false
});

$( ".begin_form" ).on("submit", function() {
    var querieString = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: querieString,
        success: function () {
            window.location.href="thanks.html";
        }
    });
    return false;
});