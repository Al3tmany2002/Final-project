// ==========================
// Join Event + Participants
// ==========================

const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach((button, index) => {

    const participantText = button.nextElementSibling.querySelector("span");

    let participants = localStorage.getItem("participants" + index);

    if (participants == null) {
        participants = Math.floor(Math.random() * 30) + 20;
    }

    participantText.textContent = participants;

    if (localStorage.getItem("joined" + index) === "true") {

        button.textContent = "JOINED ✓";
        button.classList.add("joined");

    }

    button.addEventListener("click", function (e) {

        e.preventDefault();

        if (button.classList.contains("joined")) {

            alert("You already joined this event.");
            return;

        }

        participants++;

        participantText.textContent = participants;

        localStorage.setItem("participants" + index, participants);

        localStorage.setItem("joined" + index, true);

        button.textContent = "JOINED ✓";

        button.classList.add("joined");

        alert("Successfully joined!");

    });

});


// ==========================
// Favorite Hearts
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    const heart = document.createElement("i");

    heart.className = "fa-regular fa-heart";

    heart.style.position = "absolute";
    heart.style.bottom = "15px";
    heart.style.right = "15px";
    heart.style.background = "white";
    heart.style.padding = "10px";
    heart.style.borderRadius = "50%";
    heart.style.cursor = "pointer";
    heart.style.fontSize = "20px";

    card.querySelector(".image").appendChild(heart);

    if (localStorage.getItem("fav" + index) == "true") {

        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");

        heart.style.color = "red";

    }

    heart.addEventListener("click", function () {

        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");

        if (heart.classList.contains("fa-solid")) {

            heart.style.color = "red";
            localStorage.setItem("fav" + index, true);

        } else {

            heart.style.color = "black";
            localStorage.setItem("fav" + index, false);

        }

    });

});

// ==========================
// Popup
// ==========================

const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100vh";
popup.style.background = "rgba(0,0,0,.7)";
popup.style.display = "none";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";
popup.style.zIndex = "9999";

popup.innerHTML = `
<div style="background:white;width:500px;padding:20px;border-radius:15px;text-align:center;position:relative;">

<span id="closePopup"
style="
position:absolute;
right:20px;
top:10px;
font-size:30px;
cursor:pointer;">&times;</span>

<img id="popupImg" src="" style="width:100%;height:250px;object-fit:cover;border-radius:10px;">

<h2 id="popupTitle"></h2>

<p id="popupText"></p>

</div>
`;

document.body.appendChild(popup);

cards.forEach(card => {

    card.querySelector("img").addEventListener("click", function () {

        document.getElementById("popupImg").src = this.src;

        document.getElementById("popupTitle").textContent =
            card.querySelector("h3").textContent;

        document.getElementById("popupText").textContent =
            card.querySelector("p").textContent;

        popup.style.display = "flex";

    });

});

document.getElementById("closePopup").onclick = function () {

    popup.style.display = "none";

};

popup.onclick = function (e) {

    if (e.target == popup) {

        popup.style.display = "none";

    }

};