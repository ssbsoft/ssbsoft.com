$(document).ready(function () {
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input input[name="description"]');
    var emailId = document.getElementById("email")
    var isEmailVaild = false;
    var isNameNotEmpty = false;
    var isDescriptionNotEmpty = false;

    $(name).on('keyup', function () {
        if ($(name).val().trim() == '') {
            $('.input-name label').addClass('show-label').removeClass('hide-label');
            isNameNotEmpty = false;
        } else {
            $('.input-name label').removeClass('show-label').addClass('hide-label');
            isNameNotEmpty = true;
        }
    })

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailId.addEventListener('input', function () {
        if (re.test(email.val().trim()) == false) {
            $('.input-email label').addClass('show-label').removeClass('hide-label');
            isEmailVaild = false;
        } else if($(email).val().trim() == '') {
            $('.input-email label').addClass('show-label').removeClass('hide-label');
            isEmailVaild = false;
        } else {
            $('.input-email label').removeClass('show-label').addClass('hide-label');
            isEmailVaild = true;
        }
    });

    $(message).on('keyup', function () {
        if ($(message).val().trim() == '') {
            $('.input-description label').addClass('show-label').removeClass('hide-label');
            isDescriptionNotEmpty = false;
        } else {
            $('.input-description label').removeClass('show-label').addClass('hide-label');
            isDescriptionNotEmpty = true;
        }
    })

    $('.validate-form').on('submit', function (e) {
        e.preventDefault();
        if (isEmailVaild && isDescriptionNotEmpty && isNameNotEmpty) {
            
        } else {
            if(!isEmailVaild) {
                $('.input-email label').addClass('show-label').removeClass('hide-label');
            }
             if(!isDescriptionNotEmpty) {
                $('.input-description label').addClass('show-label').removeClass('hide-label');
            } 
            if(!isNameNotEmpty) {
                $('.input-name label').addClass('show-label').removeClass('hide-label');
            }
            return;
        }
    })
});