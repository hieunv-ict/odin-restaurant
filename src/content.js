import { createTextElement, clearContent } from "./utilities";

export default function loadContent(){
    clearContent();
    let content = document.querySelector("#content");
    let intro = document.createElement("div");
    intro.classList.add("intro");
    let introText = document.createElement("div");
    introText.classList.add("intro-text");
    let text1 = createTextElement("p", "We've got your morning covered with");
    let header1 = createTextElement("h2", "Coffee");
    let text2 = createTextElement("p", "It is best to start your day with a cup of coffee.");
    introText.appendChild(text1);
    introText.appendChild(header1);
    introText.appendChild(text2);
    intro.appendChild(introText);
    

    let infoContainer = createTextElement("div", "", ["info"]);
    let infoHeader = createTextElement("h1", "Open hours");
    let cardContainer = createTextElement("div", "");
    let card1 = createTextElement("div", "", ["card"]);
    let card2 = createTextElement("div", "", ["card"]);

    let days = createTextElement("h3", "Monday to Friday");
    let daysTime = createTextElement("p", "7 a.m to 7 p.m");

    let weekend = createTextElement("h3", "Saturday & Sunday");
    let weekendTime = createTextElement("p", "8 a.m to 8 p.m");

    card1.appendChild(days);
    card1.appendChild(daysTime);

    card2.appendChild(weekend);
    card2.appendChild(weekendTime);

    cardContainer.appendChild(card1);

    cardContainer.appendChild(card2);

    infoContainer.appendChild(infoHeader);
    infoContainer.appendChild(cardContainer);

    content.appendChild(intro);
    content.appendChild(infoContainer);
}

