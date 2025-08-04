function detectEmotion() {
  const text = document.getElementById("inputText").value.toLowerCase().trim();
  const resultBox = document.getElementById("result");

  if (!text) {
    resultBox.innerText = "Please enter some text.";
    resultBox.style.color = "#dc2626"; // red for error
    return;
  }

  let emotion = "Neutral 😐";

  // Simulated keyword-based logic
  if (/happy|joy|great|love|excited|awesome|delight/.test(text)) {
    emotion = "Happy 😊";
  } else if (/sad|depressed|down|unhappy|cry|miserable/.test(text)) {
    emotion = "Sad 😢";
  } else if (/angry|mad|furious|irritated|rage/.test(text)) {
    emotion = "Angry 😠";
  } else if (/scared|afraid|fear|nervous|anxious|worried/.test(text)) {
    emotion = "Fear 😨";
  } else if (/surprised|shocked|wow/.test(text)) {
    emotion = "Surprised 😲";
  }

  resultBox.innerText = `Detected Emotion: ${emotion}`;
  resultBox.style.color = "#0f172a"; // dark neutral text
}
