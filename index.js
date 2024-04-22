var tall = Math.round(Math.random() * 100);
var tall = Math.round(Math.random() * 100);
var guess = 1;

console.log(tall);

document.getElementById("checkBtn").addEventListener("click", function () {
  var mittTall = document.getElementById("inputBox").value;

  if (tall == mittTall) {
    test();
  } else if (tall < mittTall) {
    guess++;
    document.getElementById("txt").innerHTML = "Nummer er for stort";
  }
  if (tall > mittTall) {
    guess++;
    document.getElementById("txt").innerHTML = "Nummer er for lite";
  }
});

document.getElementById("luckyBtn").addEventListener("click", function () {
  var tall2 = Math.round(Math.random() * 100);
  document.getElementById("inputBox").value = tall2;

  if (tall == tall2) {
    test();
  } else if (tall < tall2) {
    guess++;
    document.getElementById("txt").innerHTML = "Nummer er for stort";
  }
  if (tall > tall2) {
    guess++;
    document.getElementById("txt").innerHTML = "Nummer er for lite";
  }
});

function test() {
  alert("Du gjettet riktig på " + guess + " gjett");
  let text = `vil du spille igjen?`;
  if (confirm(text) == true) {
    location.reload();
  } else {
    window.close();
  }
}
