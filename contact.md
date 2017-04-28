---
layout: page
title: Contact
permalink: /contact/
---

Do you have a job or project? Send me your job or project specification and description, i hope to hear from you. If you have a question or query that is not answered elsewhere on this website or just interested in talking? Just fill out the form below with a brief message, and I'll get back to you soon.

Due to the amount of mail i'm receive, may take some time to get back to you. Thank you for your patience!

<!-- 
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

 -->
<meta name="referrer" content="origin">
<div class="row">
 	<div class="col-lg-6 col-lg-offset-3">

 		<div id="submit-success" class="alert alert-success alert-dismissible collapse" role="alert">
 			<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
 			Your message received! I'll be in touch soon.
 		</div>

 		<div id="submit-errors" class="alert alert-danger alert-dismissible collapse" role="alert">
 			<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
 			It looks like there was an error submitting the form. Please try again later.
 		</div>

 		<form id="contact-form" class="form" action="/">
 			<div class="form-group">
 				<label for="name">Name</label>
 				<input class="form-control" type="text" name="name" required placeholder="Name">
 			</div>
 			<div class="form-group">
 				<label for="email">Email</label>
 				<input class="form-control" type="email" name="_replyto" required placeholder="email@address.com">
 				<input type="hidden" name="_subject" value="CREATORBE LINKS" />
 			</div>
 			<div class="form-group">
 				<label for="message">Message</label>
 				<textarea class="form-control" name="message" placeholder="Message" required rows="5"></textarea>
 			</div>
 			<input class="btn btn-primary" type="submit" value="Send">
 		</form>

 	</div>
 </div>

<!--  <meta name="referrer" content="origin">
 <form method="POST" action="http://formspree.io/creatorb45@gmail.com">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form> -->