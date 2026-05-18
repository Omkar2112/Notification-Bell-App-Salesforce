import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import COMPONENT_COMMUNICATION_CHANNEL from '@salesforce/messageChannel/ComponentCommunicationChannel__c';

export default class Pub extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleAdd() {
        const payload = {
            operator: 'Add',
            constant: 1
        };
        publish(this.messageContext, COMPONENT_COMMUNICATION_CHANNEL, payload);
    }

    handleSubtract() {
        const payload = {
            operator: 'Sub',
            constant: 1
        };
        publish(this.messageContext, COMPONENT_COMMUNICATION_CHANNEL, payload);
    }

    handleMultiply() {
        const payload = {
            operator: 'Mul',
            constant: 5
        };
        publish(this.messageContext, COMPONENT_COMMUNICATION_CHANNEL, payload);
    }
}
