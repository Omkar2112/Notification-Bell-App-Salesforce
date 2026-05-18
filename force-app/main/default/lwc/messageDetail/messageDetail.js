import { LightningElement, wire }
from 'lwc';

import { subscribe, MessageContext }
from 'lightning/messageService';

import NOTIFICATION_CHANNEL
from '@salesforce/messageChannel/NotificationChannel__c';

import getNotificationDetail
from '@salesforce/apex/NotificationController.getNotificationDetail';

export default class MessageDetail
extends LightningElement {

    message;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {

        subscribe(
            this.messageContext,
            NOTIFICATION_CHANNEL,
            (msg) => {

                if (msg.action === 'SHOW_DETAIL') {

                    this.loadDetail(msg.recordId);
                }
            }
        );
    }

    loadDetail(recordId) {

        getNotificationDetail({ recordId })

            .then(result => {

                this.message = result.Message__c;
            });
    }
}