//MUST HAVE - CREATE A TEMPLATE TAG
var template_bcard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bcard.innerHTML = `

<style>
    #blob_text {
        font-family:'passion one', cursive;
        font-size:60px;
        color:#61A8FF;
        position:absolute;
        text-align:center;
        top:10px;
        left:80px;
    }
    #blob_subtext{
        font-size:30px;
        color:#61A8FF;
        font-family:'passion one', cursive;
        display:block;
        position:relative;
        text-align:center;
        top:-160px;
    }
    #the_blobcard{
        width:250px;
    }
    #the_blobcard:hover{

    }
    .quotes{
        font-family:'passion one', cursive;
        color:#61A8FF;
        font-size:110px;
        display:flex;
        position:relative;
        top:-300px;
    }
    .quotes2{
        font-family:'passion one', cursive;
        color:#61A8FF;
        font-size:110px;

    }
</style>
<div class="container">
    <div id="the_blobcard">
        <img id="" src="imgs/blob.svg" alt=""/>
            <h1 class="quotes">"</h1>
            <h1 class="quotes2">"</h1>
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
        this.shadowRoot.querySelector("#blob_subtext").innerText = this.getAttribute("blob_subtext");
         //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-blobcard", TheBlobCard)