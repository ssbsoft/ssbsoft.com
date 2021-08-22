$(function () {
    window.verifyRecaptchaCallback = function (response) {
        $('input[data-recaptcha]').val(response).trigger('change');
    }

    window.expiredRecaptchaCallback = function () {
        $('input[data-recaptcha]').val("").trigger('change');
    }

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var x = document.getElementById("snackbar");
            name = document.getElementById("form_name").value;
            email = document.getElementById("form_email").value;
            number = document.getElementById("form_phone").value;
            message = document.getElementById("form_message").value;
            var arr = { name: name, email: email, number: number, message: message };
            $.ajax({
                type: "POST",
                url: "/enquire",
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    x.className = "show";
                    x.style.background = "green";
                    x.innerHTML = "Message sent successfully"
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    $('#contact-form')[0].reset();
                    grecaptcha.reset();
                },
                error: function (result) {
                    x.className = "show";
                    x.style.background = "red";
                    x.innerHTML = "Please try again later"
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                },
                data: JSON.stringify(arr),
            });
            return false;
        }
    })
});