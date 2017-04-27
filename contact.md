---
layout: page
title: Contact
permalink: /contact/
---

If you have a job or project? Send me your job or project specification and description, i hope to hear from you.
Maybe it just a question or query that is not answered elsewhere on this website, you also can feel free to contact me.
Due to the amount of mail i'm receive, may take some time to get back to you. Thank you for your patience!

<form id='contact_form' method='POST'>
  <div class='large-12 columns'>
    <p id='thanks' style='display: none;'>
      Thanks for contacting me, we'll be in touch soon!
    </p>
  </div>
  <div class='medium-12 columns'>
    <input class='required' name='name' placeholder='NAME' type='text'>
    <input class='required email' name='email' placeholder='EMAIL' type='text'>
    <input class='required' name='subject' value='CREATORBE LINKS CONTACT' type='hidden'>
    <textarea class='required' name='message' placeholder='MESSAGE'></textarea>
    <input class='button white' type='submit'>
  </div>
</form>

<script>
$('form#contact_form').validate({
  messages: { },
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/creatorb45@gmail.com",
      method: "POST",
      data: $(form).serialize(),
      dataType: "json",
      success: function(data) {
          $("form#contact_form :input").prop("disabled", true);
          $('#thanks').show();
      }
    });
    return false;
  }
});
<script>