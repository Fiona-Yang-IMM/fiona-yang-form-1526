// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let subscription = document.getElementById('submit-butto');

// <input type="text" id="fullname">,
let fn = document.getElementById('fullname');
let fnPattern = /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/;

// <input type="text" id="email">
let em = document.getElementById('email');
let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// <textarea id="message"></textarea>
let msg = document.getElementById('message');

// Declare variable that will 

// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function handleForm() {       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let uinput = {};
	let errors = [];


   /* 
   +-----------+    
    | FULL NAME |
    +-----------+
    */
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    if (fn.value !== '') {if (fnPattern.test(fn.value)) {
			uinput.fullname = fn.value;
		} else {
			errors.push('Invalid Full Name!');
		}
		
	} else {
		errors.push('Full Name is missing!');
	}
/*
    +-------+    
    | EMAIL | 
    +-------+*/
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    if (em.value !== '') {
        if (pattern.test(em.value)) {
			uinput.email = em.value;
		} else {
			errors.push('Invalid email!');
		}
		
	} else {
		errors.push('Email is missing!');
	}
    

  /*  +---------+    
    | MESSAGE | 
    +---------+*/
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
    if (msg.value !== '') {
        if (fnPattern.test(fn.value)) {
			uinput.message = msg.value;}
        } else {errors.push('Message is missing!');
    }

/*    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+*/
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if (errors.length === 0) {
		console.log('user input', uinput);
	} else {
		console.log('errors', errors);
	}


// Close your function here
}
// Register your form to "click" event.
subscription.addEventListener('click', handleForm);
