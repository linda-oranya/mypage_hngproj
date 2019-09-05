var x= document.getElementById("my_form");
//create new element form
var create_form=document.createElement('form');
create_form.setAttribute("action","");
create_form.setAttribute("method","post");
x.appendChild(create_form);

var header = document.createElement('h2');
header.innerHTML="Contact";
create_form.appendChild(header);

var line = document.createElement('hr');
create_form.appendChild(line);

var linebreak = document.createElement('br');
create_form.appendChild(linebreak)

var email_label= document.createElement('input');
email_label.innerHTML="Your email address: ";
create_form.appendChild(email_label);

var email_element= document.createElement('input');
email_element.setAttribute("type","text");
email_element.setAttribute("name","demail");
create_form.appendChild(email_element);

var email_break = document.createElement('br');
create_form.appendChild(email_break);

var message_label= document.createElement('label');
message_label.innerHTML= "Message: ";
create_form.appendChild(message_label);

var textarea_element = document.createElement('textarea');
textarea_element.setAttribute("name","dmessage");
create_form.appendChild(textarea_element);

var message_break = document.createElement('br');
create_form.appendChild(message_break);

var submit_element= document.createElement('input');
submit_element.setAttribute("type","submit");
submit_element.setAttribute("name","dsubmit");
submit_element.setAttribute("value","Submit");
create_form.appendChild(submit_element);