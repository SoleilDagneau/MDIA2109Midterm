//MUST HAVE - CREATE A TEMPLATE TAG
var template_blueblob = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_blueblob.innerHTML = `
<style>
    #blob_text {
        font-family:'passion one', cursive;
        font-size:80px;
        color:#F4AFAB;
        position:absolute;
        text-align:center;
        top:25px;
        left:50px;
    }

    #the_blueblob{
        width:250px;
    }
</style>

<div id="the_blueblob">
    <img id="" src="imgs/blueblob.svg" alt=""/>
         <h1 id="blob_text">
                blob text
         </h1>
</div> 

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBlueBlob extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_blueblob.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#blob_text").innerText = this.getAttribute("blob_text");
        this.shadowRoot.querySelector("#blob_subtext").innerText = this.getAttribute("blob_subtext");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-blueblob", TheBlueBlob)