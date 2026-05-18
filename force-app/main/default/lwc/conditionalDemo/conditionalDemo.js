import { LightningElement } from 'lwc';

export default class ConditionalDemo extends LightningElement {
    isVisible = true;
    handleEvent(){
        if(this.isVisible == true){
            this.isVisible = false;
        }
        else{
            this.isVisible=true;
        }
    }
}