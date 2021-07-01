// Find div class: _3lhzE6Cg3SSeQGIHuLjILb GQV0F7lQiMOV6EofzopdJ
// insert new element inside
// div class: _1l7CTV4NjDjmzX8DiiSgTL
// which wraps a button w
// role: button
// tabindex: 0
// class: _2q1wcTx60QKM_bQ1Maev7b _2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8
// :: before
// the button wraps a span
// with the text Tip

const divs = document.getElementsByTagName("div");
let div = null;
[...divs].forEach(d => {
  if (d.className === "_3lhzE6Cg3SSeQGIHuLjILb GQV0F7lQiMOV6EofzopdJ") {
    div = d;
  }
});

div.innerHTML +=
  '<div class="_1l7CTV4NjDjmzX8DiiSgTL"><button role="button" tabindex="0" class="_2q1wcTx60QKM_bQ1Maev7b _2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8 "><span>Tip</span></button></div>';
console.log(div);
