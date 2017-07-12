// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

for (let i = 0; i < formData.length; i++) {

  if (formData[i]["type"] === "textarea") {
    let textarea = document.createElement('textarea');
    fields.appendChild(textarea);
    textarea.placeholder = formData[i].label;
    textarea.id = formData[i].id;
    textarea.type = formData[i].type;

  } else if (formData[i]["type"] === "select") {
    let select = document.createElement('select');
    select.placeholder = formData[i].label;
    select.id = formData[i].id;
    select.type = formData[i].type;
    fields.appendChild(select);

    for (let x = 0; x < formData[i].options.length; x++) {
      let options = document.createElement('option');

      select.appendChild(options);

      options.value = formData[i].options[x].value;
      options.text = formData[i].options[x].label;
    }
  } else {
    let ielement = document.createElement('input');
    ielement.placeholder = formData[i].label;
    fields.appendChild(ielement);
  }
}
