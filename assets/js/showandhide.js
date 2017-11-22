function showENG() {
  hideAllContents();
  document.getElementById("bodyENG").style.display = "block";
  document.getElementById("bodyINA").style.display = "none";
}

function showINA() {
  hideAllContents();
  document.getElementById("bodyINA").style.display = "block";
  document.getElementById("bodyENG").style.display = "none";
}

window.onload = function() {
  document.getElementById("showEN").addEventListener('click', showENG);
  document.getElementById("showID").addEventListener('click', showINA);
}

function hideAllContents() {
  document.getElementById("bodyENG").style.display = "none";
  document.getElementById("bodyINA").style.display = "none";
}
