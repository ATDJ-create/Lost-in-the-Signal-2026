
// ===================================
// LOST IN THE SIGNAL
// Homepage Interactions
// ===================================

// Find the Start Exploring button
const startButton =
  document.getElementById("startButton");

// Find the message paragraph
const message =
  document.getElementById("message");

// Respond when Start Exploring is clicked
startButton.addEventListener("click", function() {

  message.textContent =
    "Let's discover how GPS really works!";

  // Scroll down to the experiments
  document.getElementById("experiments")
    .scrollIntoView({
      behavior: "smooth"
    });

});


// Find all experiment buttons
const experimentButtons =
  document.querySelectorAll(".experiment-button");

// Find the experiment message paragraph
const experimentMessage =
  document.getElementById("experimentMessage");

// Make each experiment button respond
experimentButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Identify which experiment was selected
    const experiment =
      button.dataset.experiment;

    if (experiment === "satellites") {

      experimentMessage.textContent =
        "Coming next: our satellite positioning simulator!";

    }

    else if (experiment === "signals") {

      experimentMessage.textContent =
        "Coming next: our GPS signal accuracy experiment!";

    }

    else if (experiment === "navigation") {

      experimentMessage.textContent =
        "Coming next: our city navigation simulator!";

    }

  });

});
