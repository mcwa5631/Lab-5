alert("Jack was here!");

class Centre extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="text-align:center;">${this.innerHTML}</div>`
    }
}

customElements.define("x-centre", Centre);



class Purple extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div style="color: purple;">${this.innerHTML}</div>`
    }
}

customElements.define("x-purple", Purple);