---
layout: page
title: Contact
permalink: /contact/
---

Do you have a job or project? Send me your job or project specification and description, i hope to hear from you. If you have a question or query that is not answered elsewhere on this website, you also can feel free to contact me.

Due to the amount of mail i'm receive, may take some time to get back to you. Thank you for your patience!

<meta name="referrer" content="origin">
<form id="contactform" role="form" method="POST">
	<div class="row">
	<input type="hidden" name="_subject" value="CONTACT - CREATORBE LINKS" />
		<div class="form-group col-lg-4">
			<label>Name</label>
			<input id="name" type="text" name="name" class="form-control">
		</div>
		<div class="form-group col-lg-4">
			<label>Email Address</label>
			<input id="email" type="email" name="_replyto" class="form-control">
			<input type="hidden" name="_subject" value="CREATORBE LINKS" />
		</div>
		<input type="text" name="_gotcha" style="display:none" />
		<div class="clearfix"></div>
		<div class="form-group col-lg-12">
			<label>Message</label>
			<textarea id="message" name="message" class="form-control" rows="6"></textarea>
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

