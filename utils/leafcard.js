//MUST HAVE - CREATE A TEMPLATE TAG
var template_leafcard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_leafcard.innerHTML = `

<style>

    #leaf_subtext{
        font-size:35px;
        color:#FFF;
        font-family:'passion one', cursive;
        display:block;
        position:relative;
        text-align:left;
        top:-120px;
        right: -20px;

    }
 
</style>
<div class="container">
    <div id="the_leafcard">
        <img id="" src="imgs/leafwithbranch.svg" alt=""/>
            <h3 id="leaf_subtext">
                leaf subtext
            </h3>
    </div> 
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheLeafCard extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_leafcard.content.cloneNode(true));
        this.shadowRoot.querySelector("#leaf_subtext").innerText = this.getAttribute("leaf_subtext");
         //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-leafcard", TheLeafCard)