import { LightningElement } from 'lwc';

export default class CompA extends LightningElement {
    noCount = 0;
    handleIncrement(){
        this.noCount++;
    }
    handleDecrement(){
        this.noCount--;
    }
}
 