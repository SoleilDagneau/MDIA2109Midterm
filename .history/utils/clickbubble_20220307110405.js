//MUST HAVE - CREATE A TEMPLATE TAG
var template_clickbubble = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_clickbubble.innerHTML = `

<style>
    #desc_text {
        font-family:'passion one', cursive;
        color: #F4AFAB;
        font-size:20px;
        padding: 10px;
        background-color:#F4E1E0;
        border: 5px solid #F4AFAB;
        border-radius: 20px;
        position: absolute;
        display:flex;
        justify-content:center;
        top:-10px;

        margin:50px;
    }
    #cloud_text{
        font-family:'nunito', sans-serif;
        color:#61A8FF;
        display:block;
        position:absolute;

    }
    img{
        width: 200px;
    }
    #click_bubble{
        display:flex;
    }
</style>
<div id="click_bubble">
    <img src="imgs/cloud.svg" alt="cloud svg"/>
        <p id="cloud_text">Breeding occurs when an individual or individuals breed animals for their own profit.</p>
        <button id="desc_text">
            CLICK ME
        </button>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheClickBubble extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_clickbubble.content.cloneNode(true));
        this.shadowRoot.querySelector("#desc_text").innerText = this.getAttribute("desc_text"); //use the template to make a clone
        this.shadowRoot.querySelector("#desc_text").onclick = () => {
            this.buttonDisappear();
            document.querySelector(".dogtextspeech").buttonAppear(this.getAttribute("desc_text"));
            //document.querySelector(".monkeyspeechbubble").buttonAppear(this.getAttribute("desc_text"));
            //document.querySelector(".mousespeechbub").buttonAppear(this.getAttribute("desc_text"));
        }
       
            
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    buttonDisappear() {
        this.shadowRoot.querySelector("#click_bubble").style.cssText = `
        display:none;
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clickbubble", TheClickBubble)