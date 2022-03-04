//MUST HAVE - CREATE A TEMPLATE TAG
var template_bcard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bcard.innerHTML = `

<style>
    #blob_text {
        font-family:'nunito', sans-serif;
        font-size:24px;
        color:black;
        display:flex;
        justify-content:center;
    }
    #the_blobcard{
        width:20%;
    }
</style>
<img id="the_blobcard" src="imgs/blob.svg" alt=""/>
<p id="blob_text">
blob text
</p>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBlobCard extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bcard.content.cloneNode(true));
        this.shadowRoot.querySelector("#blob_text").innerText = this.getAttribute("blob_text");
         //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-blobcard", TheBlobCard)