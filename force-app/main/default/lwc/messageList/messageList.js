import { LightningElement, wire } from 'lwc';

import getNotifications from '@salesforce/apex/NotificationController.getNotifications';

import { subscribe, publish, MessageContext }
from 'lightning/messageService';

import NOTIFICATION_CHANNEL
from '@salesforce/messageChannel/NotificationChannel__c';

export default class MessageList extends LightningElement {

    showList = false;

    notifications;

    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToChannel();
    }

    disconnectedCallback() {
        this.subscription = null;
    }

    subscribeToChannel() {

        if (!this.subscription) {

            this.subscription = subscribe(
                this.messageContext,
                NOTIFICATION_CHANNEL,
                (message) => this.handleMessage(message)
            );
        }
    }

    handleMessage(message) {

        if (message.action === 'SHOW_LIST') {

            this.showList = true;
        }
    }

    @wire(getNotifications)
    wiredData({ data }) {

        if (data) {

            this.notifications = data;
        }
    }

    handleSelect(event) {

        const id = event.currentTarget.dataset.id;

        publish(this.messageContext,
            NOTIFICATION_CHANNEL,
            {
                action: 'SHOW_DETAIL',
                recordId: id
            }
        );
    }
}