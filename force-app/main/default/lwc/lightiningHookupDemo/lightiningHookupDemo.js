import { LightningElement } from 'lwc';

export default class LightiningHookupDemo extends LightningElement {

    constructor(){
        super();
        console.log('Parent Construstor called');
    }

    connectedCallback(){
        console.log('Parent connectedcallback Called');
    }

    renderedCallback(){
        console.log('Parent renderedcallback called');
    }

    errorCallback(){
        console.log('Error Callback called from Parent');
    }
    
}