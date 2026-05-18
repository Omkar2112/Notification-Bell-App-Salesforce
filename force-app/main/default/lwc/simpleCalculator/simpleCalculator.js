import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    
    showCalculator = true;
    firstNumber = null;
    secondNumber = null;
    result = null;

    handeleFirstNumberChange(event)
    {
        this.firstNumber = parseInt(event.target.value);
    }
    handeleSecondNumberChange(event)
    {
        this.secondNumber = parseInt(event.target.value);
    }
    handleAdd()
    {
        this.result= this.firstNumber + this.secondNumber;
    }
    handleSubtract()
    {
        this.result = this.firstNumber - this.secondNumber;
    }
    handleMultiply()
    {
        this.result = this.firstNumber * this.secondNumber;
    }
    handleDivide()
    {
        this.result = this.firstNumber / this.secondNumber;
    }
    
}