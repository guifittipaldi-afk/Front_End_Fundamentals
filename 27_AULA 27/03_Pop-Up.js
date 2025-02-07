function openCenteredPopup(url, width, height) {
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  var options = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
  window.open(url, '_blank', options);
}

document.getElementById("openPopup").addEventListener("click", function() {
  var popupURL = "https://bras.sp.senai.br/";
  var popupWidth = 800;
  var popupHeight = 600;
  openCenteredPopup(popupURL, popupWidth, popupHeight);
});
