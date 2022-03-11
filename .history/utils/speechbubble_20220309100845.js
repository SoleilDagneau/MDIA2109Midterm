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
    #next_button:hover{
        background-color:#AFDDFF;
        color:#61A8FF;
        border:3px solid #61A8FF;
    }
    #speech_bubble{
        width:250px;
        display:flex;
        position:relative;
        
    }
    #cloud_text, .cloud_text2{
        font-family:'nunito', sans-serif;
        color:#61A8FF;
        display:block;
        position:absolute;
        text-align:center;
        top:20px;
    }

    .cloudcont {
        width: 210px;
        position: relative;
        left: 20px;
        bottom: 140px;

    }

</style>
<div id="cloud">
    <img id="speech_bubble" src="imgs/cloud.svg" alt=""/>
    <div class="cloudcont"> 
    <div id="cloud_text" class="cloud_text2">Breeding occurs when an individual or individuals breed animals for their own profit.</div>
    </div>
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
        this.shadowRoot.querySelector("#next_button").onclick = () => this.increaseState("next_button");
        this.shadowRoot.querySelector("#cloud_text").innerText = this.getAttribute("cloud_text");
        this.state=1
       
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    buttonAppear() {
        this.shadowRoot.querySelector("#cloud").style.cssText = `
        display:block;
        `
    }

    updateStateUI(){
        if(this.state === 1) {
            this.shadowRoot.querySelector("#cloud_text").innerText = this.getAttribute("cloud_text");
        }
        if(this.state === 2) {
            this.shadowRoot.querySelector(".cloud_text2").innerText = this.getAttribute("cloud_text2");
        }
        if(this.state === 3) {
            this.shadowRoot.querySelector("#cloud").style.cssText = `
            display:none;
            `
            document.querySelector(`.${this.getAttribute("reappear")}`).buttonReappear();
            this.state = 1;
            this.updateStateUI();
        }
    }

    increaseState(){
        this.state = this.state + 1;
        this.updateStateUI();
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-speechbubble", TheSpeechBubble)