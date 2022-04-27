/* 

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.



1.creo array con oggetti
2.aggiungere chiavi e valori agli oggetti
3.stampa in pagina con template literal
4.collegare il bottone

*/

const memberCardArray = [

  {
    nome: "Wayne Barnett",
    foto: "img/wayne-barnett-founder-ceo.jpg",
    ruolo: "Founder & CEO"
  },
  {
    nome: "Angela Carroll",
    foto: "img/angela-caroll-chief-editor.jpg",
    ruolo: "Chief Editor"
  },
  {
    nome: "Angela Lopez",
    foto: "img/angela-lopez-social-media-manager.jpg",
    ruolo: "Social Media Manager"
  },
  {
    nome: "Barbara Ramos",
    foto:  "img/barbara-ramos-graphic-designer.jpg",
    ruolo: "Graphic Designer"
  },
  {
    nome: "Scott Estrada",
    foto: "img/scott-estrada-developer.jpg",
    ruolo: "Founder & CEO"
  },
  {
    nome: "Walter Gordon",
    foto: "img/walter-gordon-office-manager.jpg",
    ruolo: "Founder & CEO"
  }

];


//  ciclo for per stampare

for (let i in memberCardArray) {
  let cardContainer = document.querySelector(".team-container");
  cardContainer.innerHTML += 
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${memberCardArray[i].foto}"
        alt="${memberCardArray[i].nome}"
      />
    </div>
    <div class="card-text">
      <h3>"${memberCardArray[i].nome}"</h3>
      <p>"${memberCardArray[i].ruolo}"</p>
    </div>
  </div>
  `
}


// collego bottone

let addUserButton = document.getElementById("addMemberButton");
// devo usare una seconda funzione senza parametri per non ricevere errori undefined
addUserButton.addEventListener("click", aggiungiClick);

function addMember(nome, ruolo, foto) {
  const newUser = {
    nome: nome,
    ruolo: ruolo,
    foto: foto,
  }
  // pusho il nuovo oggetto nell'array
  memberCardArray.push(newUser);
  console.log(newUser,"nuovo-oggetto");
  console.log(memberCardArray, "array-oggetti");
  // ho reinserito tutto cio' che era nel ciclo per poterlo collegare alla funzione che poi evoco al click
  let cardContainer = document.querySelector(".team-container");
  cardContainer.innerHTML += 
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${foto}"
        alt=""
      />
    </div>
    <div class="card-text">
      <h3>"${nome}"</h3>
      <p>"${ruolo}"</p>
    </div>
  </div>
  `
}
// uso una nuova funzione per chiamare addMember nell'addeventlistner al click e vado a prendere il valore dall'input usando .value
function aggiungiClick() {
  let nomeAggiunto = document.getElementById("name").value;
  let ruoloAggiunto = document.getElementById("role").value;
  let fotoAggiunta = document.getElementById("image").value;
  console.log(nomeAggiunto, "valore nome");
  console.log(ruoloAggiunto, "valore ruolo");
  console.log(fotoAggiunta, "valore foto");

  addMember(nomeAggiunto, ruoloAggiunto, fotoAggiunta);
  
}