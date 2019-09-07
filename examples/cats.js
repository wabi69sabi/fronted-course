function repetition() {
  let rep = [];
  for (var i = 1; i < 5; i++) {
    rep.push(`<img src="images/cat${i}.jpeg" alt="cat${i}">`)
  }
  document.getElementById('repetition').innerHTML = rep.join("");
}
