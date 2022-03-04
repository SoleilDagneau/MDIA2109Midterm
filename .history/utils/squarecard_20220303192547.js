//MUST HAVE - CREATE A TEMPLATE TAG
var template_scard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scard.innerHTML = `

<style>
    #info_card {
        background-color:#EBB2AD;
        width: 175px;
        height:175px;
        border: 15px solid #F4E1E0;
        border-radius: 50px;
        margin: 2rem;
    }
    #info_text {
        display:flex;
        justify-content:center;
        font-size:18px;
        font-family: 'nunito', sans-serif;
        color: white;
        padding: 10px;
    }
    .htext{
        font-family:'passion one', cursive;
        color:white;
        text-align:center;
        display:flex;
        position:relative;
        top:50px;
    }
    span{
        color:black;
        top:0;
    
    }

</style>
<div id="info_card">
    <h3 class="htext"><span>MANY</span>
     OF THEM ARE EUTHANIZED.
    </h3>

    <p id="info_text">info text</p>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSquareCard extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scard.content.cloneNode(true));
        this.shadowRoot.querySelector("#info_text").innerText = this.getAttribute("info_text"); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-squarecard", TheSquareCard)