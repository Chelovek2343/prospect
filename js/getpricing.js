$(document).on('click', '.pricingemail', function (e) {
    e.preventDefault();
    $(this).text('Sending..');
    var data = JSON.stringify({
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        no_of_students: $('#no_of_students').val(),
        use_case: $('#use_case').val()
    });

    var bodydata = JSON.stringify({ body: data });
    console.log(bodydata);

    $.ajaxSetup({
        headers: {
        }
    });

    $.ajax({
        type: "POST",
        url: "https://oxlgrqvtkc.execute-api.eu-west-1.amazonaws.com/prod",
        data: bodydata,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            response = JSON.stringify(response);
            console.log('success : ' + response);
            $('#response_message').html("");
            $('#response_message').addClass('alert alert-success');
            $('#response_message').text("Thank you for requesting price details, We will get back to you shortly");
            $('.pricingemail').text('send message');
            $(".pricing_form").trigger("reset");
        },
        error: function (response, status) {
            response = JSON.stringify(response);
            console.log('error : ' + response);
            $('#response_message').html("");
            $('#response_message').addClass('alert alert-danger');
            $('#response_message').text(response.message);
            $(".pricing_form").trigger("reset");
        }
    });
});

