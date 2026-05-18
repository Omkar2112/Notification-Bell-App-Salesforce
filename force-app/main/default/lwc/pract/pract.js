import { LightningElement } from 'lwc';

export default class Pract extends LightningElement {
    NumberCount = 0;
    handleIncrement(){
        this.NumberCount +=1;
        return this.NumberCount;
    }
    handleDecrement(){
        this.NumberCount -=1;
        return this.NumberCount;
    }
}