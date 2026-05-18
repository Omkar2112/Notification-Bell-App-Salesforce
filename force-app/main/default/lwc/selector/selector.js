import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

export default class Selector extends LightningElement {
    name;

    @wire(getRecord, { recordId: USER_ID, fields: [NAME_FIELD] })
    userRecord({ data }) {
        if (data) {
            this.name = data.fields.Name.value;
        }
    }
}
