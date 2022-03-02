//mărturi

var p002 = localStorage.getItem('p002');
var val002 = localStorage.getItem('val002');
if (val002 == null){
  val002 = 0;
  localStorage.setItem('val002', val002);
}
if (val002 == NaN){
  val002 = 0;
  localStorage.setItem('val002', val002);
}
if (val002 == undefined){
  val002 = 0;
  localStorage.setItem('val002', val002);
}
if(p002 == NaN){
  p002 = 1;
}
if(p002 == undefined){
  p002 = 1;
}
if (p002 == null){
  p002 = 1;
}
if(p002 == undefined){
  p002 = 1;
}
localStorage.setItem('p002', p002);
p002 = Number(p002);
document.getElementById("ex002").value = p002;
document.getElementById("tot002").value = p002 * 1  ;

function add002() {
  p002 = p002 + 1;
  if (p002 >= 100){
    p002 = 99;}
  document.getElementById("ex002").value = p002;
  localStorage.setItem('p002', p002);
  document.getElementById("tot002").value = p002 * 1  ;
}

function rev002() {
    p002 = p002 - 1;
    if (p002 <= 0){
        p002 = 1}
  document.getElementById("ex002").value = p002;
  localStorage.setItem('p002', p002);
  document.getElementById("tot002").value = p002 * 1 ;
}

if(val002 == 0){
  document.getElementById('co002').style.display = "none"
}
else if(val002 == 1){
  document.getElementById('co002').style.display = ""
}

function pa002(){
  val002 = 1
  localStorage.setItem('val002', val002);


if(val002 == 0){
  document.getElementById('co002').style.display = "none"
}
else if(val002 == 1){
  document.getElementById('co002').style.display = ""
}
}

function pd002(){
  val002 = 0
  localStorage.setItem('val002', val002);


if(val002 == 0){
  document.getElementById('co002').style.display = "none"
}
else if(val002 == 1){
  document.getElementById('co002').style.display = ""
}
}