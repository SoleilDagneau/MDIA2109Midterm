//MUST HAVE - CREATE A TEMPLATE TAG
var template_speechbub = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_speechbub.innerHTML = `

<style>
    #cloud {
        display: none;
    }
    #next_button {
        background-color:#61A8FF;
        border:3px solid #AFDDFF;
        border-radius: 10px;
        font-family: 'passion one', cursive;
        color: white;
        font-size:20px;
        margin:65px;
        display:flex;
        position:absolute;
        top:45px;
        left:30px;
    }
    #speech_bubble{
        width:250px;
        display:flex;
        position:relative;
        
    }

</style>
<div id="cloud">
    <img id="speech_bubble" src="imgs/cloud.svg" alt=""/>
        <button id="next_button">
            next...
         </button>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSpeechBubble extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_speechbub.content.cloneNode(true));
        this.shadowRoot.querySelector("#next_button").innerText = this.getAttribute("button_text");
         //use the template to make a clone
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    buttonAppear() {
        this.shadowRoot.querySelector("#cloud").style.cssText = `
        display:block;
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-speechbubble", TheSpeechBubble)