import * as utilities from "./utilities"

export default function loadContact(){
    utilities.clearContent();

    let content = document.querySelector("#content");
    content.appendChild(utilities.createTextElement("h1", "Contact", "contact-title"));
    
    let info = utilities.createTextElement("div", "");
    info.id = "contact";

    info.appendChild(utilities.createTextElement("h1", "Manager: Hieu"));
    info.appendChild(utilities.createTextElement("p", "Tel: 0987654321"));
    info.appendChild(utilities.createTextElement("p", "Email: nvhieu.coffee@gmail.com"));

    content.appendChild(info);
}