import { LightningElement } from 'lwc';

export default class CompB extends LightningElement {
    handleadd(){
        this.dispatchEvent(new CustomEvent('addevent'));
    }
    handleSub(){
        this.dispatchEvent(new CustomEvent('subevent'));
    }
}