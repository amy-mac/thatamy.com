function bodyDrag(e) {
  e.stopPropagation();
  e.preventDefault();
  $("#dropzone").css("border", "3px dashed #000");
  $("#dropzone p").show();
}

function bodyDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  $("#dropzone").css("border", "3px dashed #CCC");
  $("#dropzone p").hide();
}

function bodyEnter(e) {
  $("#dropzone").css("border", "3px dashed #CCC");
  $("#dropzone p").hide();
}

var page = document.getElementsByTagName("body")[0];

page.addEventListener("dragover", bodyDrag, false);
page.addEventListener("drop", bodyDrop, false);
page.addEventListener("mouseenter", bodyEnter, false);