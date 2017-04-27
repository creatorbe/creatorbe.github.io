---
layout: page
title: Contact
permalink: /contact/
---

If you have a job or project? Send me your job or project specification and description, i hope to hear from you. 
Maybe it just a question or query that is not answered elsewhere on this website, you also can feel free to contact me. 
Due to the amount of mail i'm receive, may take some time to get back to you. Thank you for your patience!

<form id="contactform" method="POST">
	<div class="row">
	<input type="hidden" name="_subject" value="CONTACT - CREATORBE LINKS" />
		<div class="form-group col-lg-4">
			<label>Name</label>
    		<input type="text" name="name">
		</div>
		<div class="form-group col-lg-4">
			<label>Email Address</label>
			<input type="email" name="_replyto">
			<input type="hidden" name="_subject" value="CREATORBE LINKS" />
		</div>
		<input type="text" name="_gotcha" style="display:none" />
		<div class="clearfix"></div>
		<div class="form-group col-lg-12">
			<label>Message</label>
			<textarea name="message" rows="6"></textarea>
			<input type="text" name="_gotcha" style="display:none" />
		</div>
		<div class="form-group col-lg-12">
    		<input type="submit" value="Send">
		</div>
	</div>
</form>
<script>
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'creatorb45' + '@' + 'gmail' + '.' + 'com');
</script>