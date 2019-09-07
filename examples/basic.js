function longestWord() {
  var sen = document.changeform.sentence.value;
  let sentence = sen.split(" ");
  let res = sentence[0];
  for (i in sentence) {
    if (sentence[i].length > res.length) {
      res = sentence[i];
    }
  }
  document.getElementById('output').innerHTML = res;
}

function repetition() {
  var block = document.repetitionform.sentence.value;
  let rep = ['P tags'];
  for (var i = 0; i < 20; i++) {
    rep.push("<p>This is paragraph # " + (i + 1) + " " + block + "</p>")
  }
  document.getElementById('repetition').innerHTML = rep.join("");
}
