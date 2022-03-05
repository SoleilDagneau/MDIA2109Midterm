//MUST HAVE - CREATE A TEMPLATE TAG
var template_rectcard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_rectcard.innerHTML = `
<style>
#infocard {
    width: 350px;
    height: 100px;
    background-color:#77C5FF;
    border-radius: 8px;
    padding: 5px;
    box-sizing: border-box;
}

#info_text {
    display:flex;
    justify-content:center;
    font-size:18px;
    font-family: 'nunito', sans-serif;
    color: white;
    padding: 10px;
    text-align: center;
}

</style>

<div id="infocard">
<p id="info_text">
info text
</p>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheRectCard extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_rectcard.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#info_text").innerText = this.getAttribute("info_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-rectcard", TheRectCard)