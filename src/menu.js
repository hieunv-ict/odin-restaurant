import { createTextElement } from "./utilities";

import ColdEsp from "./images/cold-espresso.png";
import HotEsp from "./images/hot-espresso.png";
import HotCapu from "./images/hot-capuccino.png";
import HotAme from "./images/hot-ame.png";
import ClassicAme from "./images/classic-ame.png";
class Drink{
    #name;
    #price;
    #image;

    constructor(name, price, image){
        this.#name = name;
        this.#price = price;
        this.#image = image;
    }

    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    get image(){
        return this.#image;
    }

}

class MenuSection{
    #sectionName;
    #container;
    constructor(name){
        this.#sectionName = name;
        this.#container = document.createElement("div");
        this.#container.classList.add("menu-section");
    }

    addItem = function (drinkItem){
        this.#container.appendChild(createMenuItem(drinkItem.image, drinkItem.name, drinkItem.price));
    }

    get container (){
        return this.#container;
    }
    get name(){
        return this.#sectionName;
    }
}

function createMenuItem(imageSrc, itemName, price){
    let container = document.createElement("div");
    container.classList.add("menu-section-item");

    let img = document.createElement("img");
    img.src = imageSrc;

    let info = document.createElement("div");
    info.appendChild(createTextElement("p", "Coffee"));
    info.appendChild(createTextElement("h4", itemName));
    info.appendChild(createTextElement("h5", price, "price"));

    container.appendChild(img);
    container.appendChild(info);
    container.appendChild(createTextElement("button", "Order","btn", "order-item-btn"));
    return container;
}

export default function loadMenu(){
    let content = document.querySelector("#content");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    let menu = document.createElement("div");
    menu.classList.add("menu");

    let espressoSection = new MenuSection("Espresso");
    let hotEsp = new Drink("Hot Espresso", "$5", HotEsp);
    let coldEsp = new Drink("Cold Espresso", "$4", ColdEsp);
    let hotCapu = new Drink("Hot Capuccino", "$5", HotCapu);
    espressoSection.addItem(hotEsp);
    espressoSection.addItem(coldEsp);
    espressoSection.addItem(hotCapu);

    let americanoSection = new MenuSection("Americano");
    let hotAme = new Drink("Hot Americano", "$5", HotAme);
    let classicAme = new Drink("Classic Americano", "$6", ClassicAme);
    americanoSection.addItem(hotAme);
    americanoSection.addItem(classicAme);

    menu.appendChild(createTextElement("h1", espressoSection.name));
    menu.appendChild(espressoSection.container);
    menu.appendChild(createTextElement("h1", americanoSection.name));
    menu.appendChild(americanoSection.container);
    
    content.appendChild(menu);
}