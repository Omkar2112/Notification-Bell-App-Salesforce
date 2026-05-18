import { LightningElement } from 'lwc';

export default class HtmlEventDemo extends LightningElement {
    message = 'Welcome to LWC Events Demo';
    handleChange(event){
        const val = event.target.value;
        const lbl = event.target.label;
        console.log('Value is ' +val+ 'Label is ' + lbl);
    }
}
