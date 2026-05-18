import { LightningElement, track} from 'lwc';

export default class TrackDemo extends LightningElement {
    // Premitive Type 
    firstName='';
    lastName='';
    Email='';

    // Non-Premitive Type
    studentData={};


    @track reactiveData={};

    handlefirstNameChange(event){
        console.log('The Data is Updating')
        // this.firstName=event.target.value;
        this.studentData.firstName = event.target.value;
        // this.reactiveData.firstName = event.target.value;
    }
    handlelastNameChange(event){
          console.log('The Data is Updating')
        // this.lastName=event.target.value;
        this.studentData.lastName = event.target.value;
        // this.reactiveData.lastName = event.target.value;
    }
    handleEmailChange(event){
          console.log('The Data is Updating')
        // this.Email=event.target.value;
        this.studentData.Email = event.target.value;
        // this.reactiveData.Email = event.target.value;
    }
}

// Note: To make non-primitive types reactive, we can use @track decorator
// Note: Primitive types are reactive by default in LWC
// Note: Non-primitive types include Objects and Arrays
// Note: Primitive types include String, Number, Boolean, etc.
// Note: In the above code, studentData is a non-primitive type and won't be reactive unless we use @track decorator
// Note: reactiveData is made reactive by using @track decorator
// Note: Changes to firstName, lastName, and Email properties of studentData will not reflect in the UI unless we use @track
// Note: Changes to firstName, lastName, and Email properties of reactiveData will reflect in the UI
// Note: In LWC, it's recommended to use primitive types for better performance and simplicity
