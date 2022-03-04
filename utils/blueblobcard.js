//MUST HAVE - CREATE A TEMPLATE TAG
var template_bbcard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bbcard.innerHTML = `

<style>
    #blob_text {
        font-family:'passion one', cursive;
        font-size:60px;
        color:#f4afab;
        position:absolute;
        text-align:center;
        top:10px;
        left:80px;
    }
    #blob_subtext{
        font-size:30px;
        color:white;
        font-family:'nunito', sans-serif;
        display:block;
        position:relative;
        text-align:center;
        top:-160px;
    }
    #the_blobcard{
        width:250px;
    }
</style>
<div class="container">
    <div id="the_blueblobcard">
        <img id="" src="imgs/blueblob.svg" alt=""/>
            <h1 id="blob_text">
                blob text
            </h1>
            <h3 id="blob_subtext">
                blob subtext
            </h3>
    </div> 
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBlueBlobCard extends HTMLElement {

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
        this.shadowRoot.querySelector("#blob_subtext").innerText = this.getAttribute("blob_subtext");
         //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-blueblobcard", TheBlueBlobCard)