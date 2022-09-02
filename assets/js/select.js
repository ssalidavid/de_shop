const textlist = document.querySelector(".text-list").children,
      txtslen = textlist.length;
let index = 0;
const txtInTimer = 3000, txtOutTimer = 2800;
// function to animate text upwards
function animatedText(){
  let i;
  for (i = 0; i < txtslen; i++) {
    textlist[i].classList.remove("active","active-out"); 
  }

  textlist[index].classList.add("active");
  // timeout func
  setTimeout(function(){
    textlist[index].classList.add("active-out");
  },txtOutTimer);

  setTimeout(function(){
    if (index == txtslen - 1) {
      index = 0;
    } else {
      index++;
    }
    animatedText();
  },txtInTimer);
}
// load func
window.onload = animatedText;
