//MUST HAVE - CREATE A TEMPLATE TAG
var template_ball = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_ball.innerHTML = `
<style>
.ballpic{
    width:50px;
    display: flex;
    position: relative;
    left:20rem;
    top:-15rem;
    animation: bounce2 2s ease infinite;
}
@keyframes bounce2 {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
</style>

<div class="ball">
       <img class="ballpic" src="imgs/ball.svg" alt="ball img">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBall extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_ball.content.cloneNode(true));
        this.shadowRoot.querySelector(".ballpic").style.onClick = () => this.HandleMoveObj(); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    HandleMoveObj(){
        left = 300;
    }
    HandleMoveObj();
}


//MUST HAVE - define the tag for the custom elements
customElements.define("the-ball", TheBall)