require([
     'jquery',
     'splunkjs/mvc',
     'splunkjs/mvc/simplexml/ready!'
 ], function($, mvc,) {
     var submittedTokens = mvc.Components.get('submitted');
     // Listen for a change to the token tokHTML value
     submittedTokens.on("change:emailbody", function(model, tokHTML, options) {
	//alert("GOT HERE");
	var tokHTMLJS=submittedTokens.get("emailbody");
         if (tokHTMLJS!==undefined)
         {
             $("#htmlPanelWithToken").html(tokHTMLJS);
         }
     });
 });
