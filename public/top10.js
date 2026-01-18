const startGuessing = document.getElementById("guess10Btn");
const steamId = document.getElementById("guessSteamId");

let userinfo = {};
const userName = document.getElementById("userName");
const userImage = document.getElementById("userImage");

startGuessing.addEventListener("click", () => {

    console.log("Nå starter det!");
    console.log(steamId.value);

    startGuessing.remove();
    steamId.remove();

    userImage.style.display = "block";
    userName.style.display = "block";

    userName.innerText = userinfo.personaname.toUpperCase();
    userImage.src = userinfo.avatarfull;


});

async function getUserInfo() {

    try {

        const response = await fetch("/api/data/steamUser");
        const data = await response.json();

        //console.log(data.response.players[0]);
        userinfo = data.response.players[0];
        console.log(userinfo);

    } catch(error) {
        console.log(error);
    }

}

getUserInfo();
