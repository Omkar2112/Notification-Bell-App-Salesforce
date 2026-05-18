import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHandler.getAccountData';

export default class AccountData extends LightningElement {
    accountToDisplay=[];

    @wire(getAccountData)
    getAccountHandler(response) {
    const { data, error } = response;
    if (error) {
        console.error(error);
    }
    if(data){
        this.accountToDisplay = data;
    }
}
}