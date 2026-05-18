import { LightningElement } from 'lwc';

export default class ParentALWC extends LightningElement {
    startCounter = 0;

    handleChange(event) {
        this.startCounter = event.target.value;
    }
}
