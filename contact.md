---
layout: page
title: Contact
permalink: /contact/
---

If you have a job or project? Send me your job or project specification and description, i hope to hear from you.
Maybe it just a question or query that is not answered elsewhere on this website, you also can feel free to contact me.
Due to the amount of mail i'm receive, may take some time to get back to you. Thank you for your patience!

<form id="contactform" role="form">
	<div class="row">
	<input type="hidden" name="_subject" value="CONTACT - CREATORBE LINKS" />
		<div class="form-group col-lg-4">
			<label>Name</label>
			<input id="name" type="text" name="name" class="form-control">
		</div>
		<div class="form-group col-lg-4">
			<label>Email Address</label>
			<input id="email" type="email" name="_replyto" class="form-control">
		</div>
		<input type="text" name="_gotcha" style="display:none" />
		<div class="clearfix"></div>
		<div class="form-group col-lg-12">
			<label>Message</label>
			<textarea id="message" name="message" class="form-control" rows="6"></textarea>
		</div>
		<div class="form-group col-lg-12">
			<button id="submitForm" class="btn btn-default">Submit</button>
		</div>
	</div>
</form>

<script>
	     $("#submitForm").on("click", function() {
        if ($.trim($("#email").val()) === "" || $.trim($("#name").val()) === "" || $.trim($("#message").val()) === "") {
            swal({   title: "Missing Information", text: "Please fill in each field before submiting.", type: "error", confirmButtonText: "Back" });
            return false;
        }
       else{
           message = $("#contactform").serializeArray();
           var o = {};
           var submitTime = new Date();
           $.each(message, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
           $.ajax({
               url: "http://formspree.io/creatorb45@gmail.com", 
               data: {o,submitTime},
               header{

               }
           });
           swal({   title: "Success", text: "Thank you for your enquiry", type:"success", confirmButtonText: "Close" });
           document.getElementById('contactform').reset();
           return false;
       }
   });
</script>