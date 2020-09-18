function getInput() {
  var inputText = document.getElementById('input_text').value;
  console.log(inputText);
  var textColor = document.getElementById('text_color').value;
  //alert(textColor);
  var imageUrl = document.getElementById('image_url').value;
  //alert(imageUrl);
  var fontSize = document.getElementById('font_size').value;
  // alert(fontSize);
  // var opj = document.getElementById('op').innerHTML;
  //alert(op);
  document.getElementById('op').innerHTML = inputText;
  document.getElementById('op').style.color = textColor;
  document.getElementById('opimg').src = imageUrl;
  document.getElementById('op').style.fontSize = fontSize;
}
