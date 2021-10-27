const pieces = document.querySelectorAll(".piece");

pieces.forEach(function (piece) {
  //console.log(piece);

  piece.addEventListener("click", function () {
    piece.classList.toggle("show-text");
  });
});
