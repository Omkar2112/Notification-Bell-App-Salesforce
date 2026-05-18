import { LightningElement } from 'lwc';

export default class IfelseDemo extends LightningElement {
   
    isCar = false;
    isCar1 = true;

    Carsrc= 'Car.jpg';
    Car1src= 'car1.jpg';

    ShowCar(){
        this.isCar = true;
        this.isCar1 = false;
    }
    ShowCar1(){
        this.isCar = false;
        this.isCar1 = true;

    }

}