console.log("Hello World", 2025, true);

/*
    Datatyper: tekst = string, tall = number, sant/usant = boolean
    Variabler: const = konstant variabel, let = fleksibel variabel
*/

const heroHeading = document.querySelector("#heroHeading");
heroHeading.textContent = "Velkommen!";
heroHeading.style.color = "red"; // Gir inline stying

console.log(heroHeading);


const content = "Mitt navn er Julie og jeg er en webutvikler som bruker HTML, CSS og JS for å lage nettsider.";
const heroParagraph = document.querySelector("#heroParagraph");
heroParagraph.textContent = content;
heroParagraph.classList.add("text"); // .className = "text" som et alternativ

console.log(heroParagraph);


const heroImg = document.querySelector("#heroImg");
heroImg.src = "mappenavn/filnavn.filtype"; // .src = "https://....." som et alternativ
heroImg.alt = "Placeholder bilde";

console.log(heroImg);

//
console.log("----------------------------------");
//

// <section>
const about = document.querySelector("#about");
    // <h2>
    const aboutHeading = document.createElement("h2"); // Lager nytt HTML-element
    aboutHeading.textContent = "Om meg";
    console.log(aboutHeading);
    // </h2>

    // <div>
    const aboutIntro = document.createElement("div");
    aboutIntro.classList.add("aboutIntro");
        // <p>
        const introText = document.createElement("p");
        introText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius quis, error ad temporibus dolore?`;
        introText.classList.add("introText");
        // </p>

        // <img
        const introImg = document.createElement("img");
        introImg.src = "";
        introImg.alt = "Placeholder bilde";
        introImg.classList.add("introImg");
        // />

    aboutIntro.appendChild(introText);
    aboutIntro.appendChild(introImg);
    console.log(aboutIntro);
    // </div>

about.appendChild(aboutHeading); // Legger nytt HTML-element til i HTML
about.appendChild(aboutIntro);
console.log(about);
// </section>
