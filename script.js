// Show spinner for Freelancers dropdown
const freelancersSpinner = document.getElementById("freelancers-spinner");
freelancersSpinner.style.display = "block";

// Fetch the JSON Freelancers data
fetch(
  "https://script.google.com/macros/s/AKfycbxzL7hxMUZy_POfKPqiJtQNrupSBqD3gvVuYYZ4AVziS22eaUt4jZ5N1wU0PKIptQnI/exec"
)
  .then((response) => response.json())
  .then((data) => {
    const dropdown = document.getElementById("freelancers");
    data.forEach((freelancer) => {
      const option = document.createElement("option");
      option.text = freelancer.Freelancers;
      option.value = freelancer.Freelancers;
      dropdown.add(option);
    });

    // Hide spinner for Freelancers dropdown
    freelancersSpinner.style.display = "none";
  });

// Show spinner for Project Code dropdown
const projectSpinner = document.getElementById("project-spinner");
projectSpinner.style.display = "block";

//Fetch the JSON Project Code data
fetch(
  "https://script.google.com/macros/s/AKfycbzFQAkPPBCz3xjDwPd5U1u5m_emhY6ULKhefnzb_pi5vtWlWLMMt6tTjpd5QM16ecaG/exec"
)
  .then((response) => response.json())
  .then((data) => {
    const dropdown = document.getElementById("project-code");
    data.forEach((projects) => {
      const option = document.createElement("option");
      option.text = projects.Project_Codes;
      option.value = projects.Project_Codes;
      dropdown.add(option);
    });

    // Hide spinner for Project Code dropdown
    projectSpinner.style.display = "none";
  });

// Responsibility slider
$("#responsibility-slider").slider({
  value: 5,
  min: 1,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#responsibility-value").text(ui.value);
  },
});
$("#responsibility-value").text($("#responsibility-slider").slider("value"));

// Communication slider
$("#communication-slider").slider({
  value: 5,
  min: 1,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#communication-value").text(ui.value);
  },
});
$("#communication-value").text($("#communication-slider").slider("value"));

// Professionalism slider
$("#professionalism-slider").slider({
  value: 5,
  min: 1,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#professionalism-value").text(ui.value);
  },
});
$("#professionalism-value").text($("#professionalism-slider").slider("value"));

// Platform Knowledge slider
$("#platform-knowledge-slider").slider({
  value: 5,
  min: 1,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#platform-knowledge-value").text(ui.value);
  },
});
$("#platform-knowledge-value").text(
  $("#platform-knowledge-slider").slider("value")
);

// Critical Thinking slider
$("#critical-thinking-slider").slider({
  value: 5,
  min: 1,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#critical-thinking-value").text(ui.value);
  },
});
$("#critical-thinking-value").text(
  $("#critical-thinking-slider").slider("value")
);

// Proactiveness slider
$("#proactiveness-slider").slider({
  value: 5,
  min: 1,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#proactiveness-value").text(ui.value);
  },
});
$("#proactiveness-value").text($("#proactiveness-slider").slider("value"));

function resetValues() {
  document.getElementById("freelancers").selectedIndex = 0;
  $("#responsibility-slider").slider("value", 5);
  $("#responsibility-value").text($("#responsibility-slider").slider("value"));
  $("#communication-slider").slider("value", 5);
  $("#communication-value").text($("#communication-slider").slider("value"));
  $("#professionalism-slider").slider("value", 5);
  $("#professionalism-value").text(
    $("#professionalism-slider").slider("value")
  );
  $("#platform-knowledge-slider").slider("value", 5);
  $("#platform-knowledge-value").text(
    $("#platform-knowledge-slider").slider("value")
  );
  $("#critical-thinking-slider").slider("value", 5);
  $("#critical-thinking-value").text(
    $("#critical-thinking-slider").slider("value")
  );
  $("#proactiveness-slider").slider("value", 5);
  $("#proactiveness-value").text($("#proactiveness-slider").slider("value"));
  document.getElementById("normal").checked = true;
  document.getElementById("feedback").value = "";
}

// Add event listener for the submit button
window.onload = function () {
  const submitSpinner = document.getElementById("submit-spinner");
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission if dropdowns are empty
    submitSpinner.style.display = "block";
    let freelancer = document.getElementById("freelancers").value;
    let project_codes = document.getElementById("project-code").value;

    // Check if dropdowns have a selected value
    if (freelancer === "" || project_codes === "") {
      alert(
        "Please make sure you have selected both your Freelancer and the Project Code!"
      );
      submitSpinner.style.display = "none";
      return;
    }

    let responsibility = $("#responsibility-value").text();
    let communication = $("#communication-value").text();
    let professionalism = $("#professionalism-value").text();
    let platform_knowledge = $("#platform-knowledge-value").text();
    let critical_thinking = $("#critical-thinking-value").text();
    let proactiveness = $("#proactiveness-value").text();
    let selectedDifficulty = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value;

    //check if feedback is a "number" in which case convert to string
    let feedback = document.getElementById("feedback").value;
    const numRegex = /^\d+(\.\d+)?$/;
    if (numRegex.test(feedback)) {
      if (feedback % 1 === 0) {
        feedback = parseInt(feedback);
      } else {
        feedback = parseFloat(feedback);
      }
      if (feedback != "" && typeof feedback === "number") {
        feedback = "=TO_TEXT(" + feedback + ")";
      }
    }

    const url =
      "https://script.google.com/macros/s/AKfycby9k2Djv-buqZ9D9fUcr410q_7EUEG19cZqdEBfzu6ckMKhPzWwNfT99UGWRYSeS8lf/exec" +
      `?freelancer=${encodeURIComponent(freelancer)}` +
      `&project_codes=${encodeURIComponent(project_codes)}` +
      `&responsibility=${encodeURIComponent(responsibility)}` +
      `&communication=${encodeURIComponent(communication)}` +
      `&professionalism=${encodeURIComponent(professionalism)}` +
      `&platform_knowledge=${encodeURIComponent(platform_knowledge)}` +
      `&critical_thinking=${encodeURIComponent(critical_thinking)}` +
      `&proactiveness=${encodeURIComponent(proactiveness)}` +
      `&selectedDifficulty=${encodeURIComponent(selectedDifficulty)}` +
      `&feedback=${encodeURIComponent(feedback)}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Form submitted successfully:", result);
        resetValues();
        submitSpinner.style.display = "none";
        setTimeout(function () {
          alert("Your submission has been recorded!");
        }, 100); // 100ms delay
      })
      .catch((error) => {
        console.error("Form submission failed:", error);
        submitSpinner.style.display = "none";
        setTimeout(function () {
          alert(
            "ERROR! If the issues still persists, please reach out to Sankarshan Ghosh on Slack for help."
          );
        }, 100); // 100ms delay
      });
  });
};
