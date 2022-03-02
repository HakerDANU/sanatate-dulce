//cioco miere
var p001 = localStorage.getItem('p001');
var val001 = localStorage.getItem('val001');
if (val001 == null){
  val001 = 0;
  localStorage.setItem('val001', val001);
}
if (p001 == null){
  p001 = 1
  localStorage.setItem('p001', p001);
}
if(p001 == NaN){
  p001 = 1
  localStorage.setItem('p001', p001);
}
if(p001 == undefined){
  p001 = 1
  localStorage.setItem('p001', p001);
}
p001 = Number(p001);
document.getElementById("ex001").value = p001;
document.getElementById("tot001").value = p001 * 65  ;

function add001() {
  p001 = p001 + 1;
  if (p001 >= 100){
    p001 = 99;}
  document.getElementById("ex001").value = p001;
  localStorage.setItem('p001', p001);
  document.getElementById("tot001").value = p001 * 65  ;
}

function rev001() {
    p001 = p001 - 1;
    if (p001 <= 0){
        p001 = 1}
  document.getElementById("ex001").value = p001;
  localStorage.setItem('p001', p001);
  document.getElementById("tot001").value = p001 * 65 ;
}

if(val001 == 0){
  document.getElementById('co001').style.display = "none"
}
else if(val001 == 1){
  document.getElementById('co001').style.display = "null"
}

function pa001(){
  val001 = 1
  localStorage.setItem('val001', val001);


if(val001 == 0){
  document.getElementById('co001').style.display = "none"
}
else if(val001 == 1){
  document.getElementById('co001').style.display = "null"
}
}

function pd001(){
  val001 = 0
  localStorage.setItem('val001', val001);


if(val001 == 0){
  document.getElementById('co001').style.display = "none"
}
else if(val001 == 1){
  document.getElementById('co001').style.display = "null"
}
}
