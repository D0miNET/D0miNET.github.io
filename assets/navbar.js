fetch('../elements/navbar.html')
.then(response => response.text())
.then(data => document.getElementById('navbar').innerHTML = data)
.catch(error => console.error('Eroare la încărcarea navbar-ului:', error));

