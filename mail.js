// document.getElementById("btn-click").addEventListener("click", function(event) {
  // event.preventDefault(); // Prevents form submission

//   alert("Sending Email...");

//   let parms = {
//       from_name: document.getElementById("fname").value, // Corrected ID
//       from_email: document.getElementById("email").value,
//       message: document.getElementById("message").value
//   };

//   emailjs.send("service_1jvbg2i", "template_kaz28gg", parms)
//       .then(() => {
//           alert("Email Sent!!");
//       })
//       .catch((error) => {
//           alert("Error Sending Email: " + JSON.stringify(error));
//           console.error("EmailJS Error:", error);
//       });
// });

// 

const btn = document.getElementById('btn-click');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Form validation
  const name = document.getElementById('fname');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const name_error = document.getElementById('name_error');
  const email_error = document.getElementById('email_error');
  const message_error = document.getElementById('message_error');

  let name_check = /^[a-zA-Z\s]+$/;
  let email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  // Reset error messages
  name_error.innerHTML = '';
  email_error.innerHTML = '';
  message_error.innerHTML = '';

  let valid = true;

  // Name validation
  if (name.value === '' || name.value == null) {
    name_error.innerHTML = "Name is Required";
    valid = false;
  } else if (!name_check.test(name.value)) {
    name_error.innerHTML = "Name Should not contain Numbers";
    valid = false;
  }

  // Email validation
  if (!email.value.match(email_check)) {
    email_error.innerHTML = "Valid Email is Required";
    valid = false;
  }

  // Message validation
  if (message.value.length <= 15) {
    message_error.innerHTML = "Message must be above 15 characters";
    valid = false;
  }

  if (!valid) {
    return;
  }

  // Sending email
  btn.value = 'Sending...';



  emailjs.sendForm('service_1jvbg2i', 'template_kaz28gg', this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Successfully Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



// you installed the email js code , and put the public key in that and then in js you made the code and set the serviceid and template id

