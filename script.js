let count = 0;

document.getElementById("increaseBTN").onclick = function () {
  count += 1;
  document.getElementsByTagName("h1")[0].innerHTML = count;
};

document.getElementById("resetBTN").onclick = function () {
  count = 0;
  document.getElementsByTagName("h1")[0].innerHTML = count;
};

document.getElementById("decreaseBTN").onclick = function () {
  count -= 1;
  document.getElementsByTagName("h1")[0].innerHTML = count;
};

