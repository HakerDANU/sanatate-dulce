var form = document.getElementById('mesaje');
form.addEventListener("submit", e => {
  e.preventDefault();
  let data = {
    Numele: document.getElementById('numele').value,
    Mesajul: document.getElementById('mesaj').value,
  }
  axios.post(form.action,{
    "data": data
}).then( response => {
    // form.reset();
    alert("Mesajul a fost trimis")
});
});

function show(){
  document.getElementById('descriere').style.display="inline-block"
  document.getElementById('show').style.display="none"
  document.getElementById('hide').style.display="inline-block"
  document.getElementById('img001').style.marginBottom= "200px"
}

function hide(){
  document.getElementById('descriere').style.display="none"
  document.getElementById('show').style.display="inline-block"
  document.getElementById('hide').style.display="none"
  document.getElementById('img001').style.marginBottom= "30px"
}