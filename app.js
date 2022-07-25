// https://api.github.com

let url = 'https://api.github.com/users/';
const affichage  = document.querySelector('.affichage');
const form       = document.querySelector('.formulaire');
const input      = document.querySelector('.input');

document.querySelector('.box').style.display = 'block';


async function dataGithub(utilisateur){

    const reponse = await fetch(`${url}${utilisateur}`);
    const data    = await reponse.json();
    console.log(data);

    afficherData(data);
}
dataGithub('tkm02');


function afficherData(datas){

    const carteHTML = `

    <div class="carte">
    <div class="avatare">
        <img src="${datas.avatar_url}">
    </div>
    <h2>${datas.name}</h2>
    <hr>
    <div class="info">
        <p>Followers :  <span>${datas.followers}</span></p>
        <p>following :  <span>${datas.following}</span></p>
        <p>public_repos :  <span>${datas.public_repos}<span></p>
        <p>bio :  <span>${datas.bio}</span></p>
        <p>lieu :  <span>${datas.location}</span></p>
        <p>Compagny :  <span>${datas.company}</span></p>
        
    </div>
</div>

</div>
    
    
    
    `
    affichage.innerHTML = carteHTML;
document.querySelector('.box').style.display = 'none';

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if (input.value.length > 0) {
        dataGithub(input.value);
        input.value="";
    }
});
