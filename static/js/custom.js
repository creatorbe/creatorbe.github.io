// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Validates the contact form and submits it using Formspree.
$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/austin.zentz@gmail.com", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();        
      }
    });
  }
});

// This function allows images with the 'click-gif' tag to toggle between gif and png.
// There must be two images in the same directory with the same name (except extensions)
$(".click-gif").click(function () {
  var source = $(this).attr("src").split('.').shift();
  var extension = $(this).attr("src").split('.').pop();
  if (extension == "png") {
    $(this).attr("src", source + '.gif');
  } else {
    $(this).attr("src", source + '.png');
  }
});