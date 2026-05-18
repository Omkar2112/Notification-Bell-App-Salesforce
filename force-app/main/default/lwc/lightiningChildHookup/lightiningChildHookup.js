import { LightningElement } from 'lwc';

export default class LightiningChildHookup extends LightningElement {
    isVisible = true;
    constructor(){
        super();
        console.log('Child Construcror Called');
    }
    connectedCallback(){
        console.log('Child connectedcallback Called');
    }

    renderedCallback(){
        console.log('Child renderedcallback called');
    }

    handleClick(){
        
        if(this.isVisible == true){
            this.isVisible = false;
        }
        else{
            this.isVisible = true;
        }
    }
}