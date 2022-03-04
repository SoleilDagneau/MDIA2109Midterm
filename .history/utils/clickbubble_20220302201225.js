//MUST HAVE - CREATE A TEMPLATE TAG
var template_clickbubble = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_clickbubble.innerHTML = `

<style>
    #desc_text {
        font-family:'passion one', cursive;
        color: #F4AFAB;
        font-size:25px;
        padding: 10px;
        background-color:#F4E1E0;
        border: 5px solid #F4AFAB;
        border-radius: 20px;
        position: absolute;
        display:flex;
        
    }
    img{
        width: 250px;
    }
    #click_bubble{
        display:flex;
    }
</style>
<div id="click_bubble">
    <img src="imgs/cloud.svg" alt="cloud svg"/>
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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-clickbubble", TheClickBubble)