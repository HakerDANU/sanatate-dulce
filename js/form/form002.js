//marturi
var form = document.getElementById('form002');
form.addEventListener("submit", e => {
  e.preventDefault();
  let data002 = {
    Nume: document.getElementById('nume').value,
    Email: document.getElementById('email').value,
    Telefon: document.getElementById('telefon').value,
    Adresa: document.getElementById('adresa').value,
    Produs: document.getElementById('pr002').value,
    Cantitatea: document.getElementById('ex002').value,
    Preț: document.getElementById('tot002').value,
  }
  form.reset();
  axios.post(form.action,{
    "data002": data002
}).then( response => {
    alert("Comanda a fost trimisă!")
    window.location.href = "../produse/marturi.html";
});
});