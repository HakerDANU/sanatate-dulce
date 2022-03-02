//cioco miere
var form = document.getElementById('form001');
form.addEventListener("submit", e => {
  e.preventDefault();
  let data001 = {
    Nume: document.getElementById('nume').value,
    Email: document.getElementById('email').value,
    Telefon: document.getElementById('telefon').value,
    Adresa: document.getElementById('adresa').value,
    Produs: document.getElementById('pr001').value,
    Cantitatea: document.getElementById('ex001').value,
    Preț: document.getElementById('tot001').value,
  }
  form.reset();
  axios.post(form.action,{
    "data001": data001
}).then( response => {
    alert("Comanda a fost trimisă!")
    window.location.href = "../produse/cioco_miere.html";
});
});
