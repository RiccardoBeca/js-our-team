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
  // {
  //   nome: "",
  //   foto: "img/wayne-barnett-founder-ceo.jpg",
  //   ruolo: "Founder & CEO"
  // },  {
  //   nome: "",
  //   foto: "img/wayne-barnett-founder-ceo.jpg",
  //   ruolo: "Founder & CEO"
  // },  {
  //   nome: "",
  //   foto: "img/wayne-barnett-founder-ceo.jpg",
  //   ruolo: "Founder & CEO"
  // },  {
  //   nome: "",
  //   foto: "img/wayne-barnett-founder-ceo.jpg",
  //   ruolo: "Founder & CEO"
  // },  {
  //   nome: "",
  //   foto: "img/wayne-barnett-founder-ceo.jpg",
  //   ruolo: "Founder & CEO"
  // },  {
  //   nome: "",
  //   foto: "img/wayne-barnett-founder-ceo.jpg",
  //   ruolo: "Founder & CEO"
  // }

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

addUserButton.addEventListener("click", addMember);

function addMember(nome, foto, ruolo) {
  const newUser = {
    nome: nome,
    foto: foto,
    ruolo: ruolo
  }

  memberCardArray.push(newUser);

}