import { LightningElement } from 'lwc';

export default class DemoPractice extends LightningElement {
    isTom = false; 
    isJerry = false;

    Tom = 'Tom.png';
    Jerry = 'Jerry.png';

    showTom() {
        this.isTom = true;
        this.isJerry = false;
    }

    showJerry() {
        this.isTom = false;
        this.isJerry = true;
    }
}
