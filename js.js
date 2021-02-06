// ...........random fun.............


$(document).ready(function () {
  document.getElementById("file").onchange = function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
      console.log(this.result);
      var lines = this.result.split("\n");
      var list = [];
      for (var line = 0; line < lines.length; line++) {
        list.push(lines[line]);
      }

      var r = (document.getElementById("showmain").innerHTML =
        list[Math.floor(Math.random() * list.length)]);
    };
    reader.readAsText(file);
  };
});
// ..............modal....... 

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}



