export function clearContent(){
    let content = document.querySelector("#content");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

export function createTextElement(elem, content, ...classList){
    let tmp = document.createElement(elem);
    tmp.textContent = content;
    for (let item of classList){
        tmp.classList.add(item);
    }
    return tmp;
}