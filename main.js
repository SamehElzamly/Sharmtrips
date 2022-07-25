// زززززززززززززززز\
let home = document.getElementById("Home");
let section = document.querySelector("section");
let footer = document.querySelector("footer");

//................................ 
let textHead = document.querySelector("header .text");
changeBackground()
home.onclick = () => {
    textHead.style.animation = "none";
    clearInterval(inerval);
}
home.ondblclick = () => {
    textHead.style.animation = "text 10s infinite";
    changeBackground();
}
let paragraphs = ["<h1>Ras Mohammed</h1><p>Ras Mohamed is located at Gulf of Aqaba on an area of 480 square kilometers.\
Due to Ras Mohamed’sgeographical position, divers find almost permanent strong currents during all the year, which \
attracts larger fish.Beautiful beaches, extraordinary coral reefs and exciting dive sites make Ras Mohamed National \
Park a worthwhile visit.</p>", "<h1>Taba</h1><p>Taba, situated on the Red Sea's Gulf of Aqaba is a stone's throw from \
a truly impressive range of sites.Taba is now among the favorite destinations of diving and snorkeling fans. With \
areas like the so-called Fjord which is the most beautiful and striking inlet of the entire Aqaba Gulf and many other\
attractive diving spots,Taba has been the focal point of many visitors of Egypt.</p>", "<h1>Safari</h1><p>Experience an\
adventure across the sand in Quad Bike trip in Sharm el Sheikh. Visit Bedouin villages and learn about their way of life, \
complete your desert safari with Camel ride and enjoy a traditional herbal tea in Pharaonic Valley.</p>",
    "<h1>Dahap</h1><p>Dahab is famous for its therapeutic centers that can cure a number of different diseases, especially \
arthritis. Across the waters of the red sea are a number of very exciting activities to do such as windsurfing, fishing\
, surfing, sailing, and especially diving. There are many skydiving schools located all across Dahab.</p>",
    "<h1>Saint Catherine</h1><p>Saint Catherine is one of the most private and most specific cities in Sinai. It is located \
on a Highland is about 1600 metres high above the sea-level in the heart of South Sinai about 300 kilometers from the Suez\
Canal. Its area is about 5130 square metres. It is surrounded by a group of high mountains. It is famous for Religious tourism, safari tourism and mountaineering tourism.Saint Catherine \
is the largest nature reserve in Egypt. </p>"
];
let menuIcons = document.querySelectorAll("header div div i");
let menu = document.querySelector(".head div div");
let links = document.querySelectorAll("header a");
menuIcons[0].addEventListener('click', () => {
    menu.style.right = 0;
    menuIcons[1].style.display = "block";
    menuIcons[0].style.display = "none";
})

function clearMenu() {
    menu.style.right = "-100%";
    menuIcons[1].style.display = "none";
    menuIcons[0].style.display = "block";
}
menuIcons[1].addEventListener('click', clearMenu);
links.forEach(e => {
        e.onclick = clearMenu
    })
    // text animation
let i = 1;
let background = document.querySelector("header")
let text = document.querySelector("header .text");

function changeBackground() {
    inerval = setInterval(() => {
        background.style.cssText = `background-image:url(image/${i}.jpg)`;
        text.innerHTML = paragraphs[i];
        i++;
        if (i > 4) i = 0;
    }, 10000)
}
///trips
//learn more button
//translate arrows
let gellery = ["image/t0.jpg", "image/t1.jpg", "image/t2.jpg", "image/t3.jpg", "image/t4.jpg", "image/t5.jpg", "image/t6.jpg", "image/t7.jpg", "image/t8.jpg", "image/t9.jpg", "image/t10.jpg", "image/t11.jpg"];
let arrows = document.querySelectorAll("#Trips i");
let show = document.querySelectorAll(".show>div");
arrows[0].onclick = () => {
    for (let i = 0; i < 3; i++) {
        show[i].innerHTML = `
        <img src="${gellery[i]}" alt="trip">`;
    }
    let hold = gellery[11];
    gellery[11] = gellery[0];
    for (let i = 0; i < 10; i++) {
        gellery[i] = gellery[i + 1];
    }
    gellery[10] = hold;
}
arrows[1].onclick = () => {
        for (let i = 2; i > -1; i--) {
            show[i].innerHTML = `
        <img src="${gellery[i]}" alt="trip">`;
        }
        let hold = gellery[11];
        for (let i = 11; i > 0; i--) {
            gellery[i] = gellery[i - 1];
        }
        gellery[0] = hold;
    }
    //
let trips = document.getElementById("Trips");
let about = document.getElementById("About");
let imgAbout = document.querySelector("#About img");
let textAbout = document.querySelector("#About div div");
let inputs = document.querySelectorAll("form input");
window.onscroll = () => {
        if (window.scrollY > home.offsetHeight - 60) {
            menuIcons.forEach(e => {
                e.style.color = "black"
            })
        }
        if (window.scrollY < home.offsetHeight - 60) {
            menuIcons.forEach(e => {
                e.style.color = "var(--colorSt--)"
            })
        }
        if (window.scrollY > home.offsetHeight + trips.offsetHeight) {
            textAbout.style.opacity = 1;
            imgAbout.style.left = 0
        }
        if (window.scrollY > home.offsetHeight + trips.offsetHeight + about.offsetHeight) {
            setTimeout(() => {
                inputs[0].style.opacity = 1;
            }, 1000)
            setTimeout(() => {
                inputs[1].style.opacity = 1;
            }, 2000)
            setTimeout(() => {
                inputs[2].style.opacity = 1;
            }, 3000)
            setTimeout(() => {
                inputs[3].style.opacity = 1;
            }, 4000)
        }
    }
    ////
let homebutton = document.querySelector("#fullTrips button");
let tripsbutton = document.querySelector("#Trips>button");
let tripsPage = document.querySelector("#fullTrips");
tripsPage.style.display = "none";
tripsbutton.onclick = () => {
    home.style.display = "none";
    section.style.display = "none";
    footer.style.display = "none";
    tripsPage.style.display = "block";
    clearInterval(inerval);
}
homebutton.onclick = () => {
    home.style.display = "block";
    section.style.display = "block";
    footer.style.display = "block";
    tripsPage.style.display = "none";
    changeBackground();
}