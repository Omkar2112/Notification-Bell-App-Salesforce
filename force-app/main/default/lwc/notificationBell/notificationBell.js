import { LightningElement, wire } from 'lwc';

import getNotifications from '@salesforce/apex/NotificationController.getNotifications';

import { publish, MessageContext } from 'lightning/messageService';

import NOTIFICATION_CHANNEL from '@salesforce/messageChannel/NotificationChannel__c';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class NotificationBell extends LightningElement {

    unreadCount = 0;

    @wire(MessageContext)
    messageContext;

    @wire(getNotifications)
    wiredNotifications({ data }) {

        if (data) {

            this.unreadCount =
                data.filter(n => !n.Is_Read__c).length;
        }
    }

    handleClick() {

        publish(this.messageContext, NOTIFICATION_CHANNEL, {
            action: 'SHOW_LIST'
        });

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Notification List Opened',
                variant: 'success'
            })
        );
    }
}