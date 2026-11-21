// General website interactions. Keep experiment maths in separate files.
document.querySelectorAll(".experiment-button").forEach(button=>{
  button.addEventListener("click",()=>{
    document.getElementById("experimentMessage").textContent=
      "City navigation is coming in our next experiment!";
  });
});
