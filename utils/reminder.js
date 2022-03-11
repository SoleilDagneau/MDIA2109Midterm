//MUST HAVE - CREATE A TEMPLATE TAG
var template_reminder = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_reminder.innerHTML = `
<style>

#reminder {
    position: relative;
    top: 200px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 10px solid #BBD9AC;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
}

#reminder_text {
    font-family: 'nunito', sans-serif;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

#reminder_header {
    font-family: 'passion one', cursive;
    color: #7EA172;
    text-align: center;
}
</style>


<div id="reminder">
    <h2 id="reminder_header">Reminder</h2>
    <div id="reminder_text">Please click through each speech bubble you see in order to learn more about the topics!</div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheReminder extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_reminder.content.cloneNode(true)); 
        this.shadowRoot.querySelector("#reminder_header").innerText = this.getAttribute("reminder_header");
        this.shadowRoot.querySelector("#reminder_text").innerText = this.getAttribute("reminder_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-reminder", TheReminder)