public with sharing class NotificationController {

    @AuraEnabled(cacheable=true)
    public static List<Notification__c> getNotifications() {

        return [
            SELECT Id, Name, Message__c, Is_Read__c
            FROM Notification__c
            ORDER BY CreatedDate DESC
        ];
    }

    @AuraEnabled
    public static Notification__c getNotificationDetail(Id recordId) {

        return [
            SELECT Id, Name, Message__c
            FROM Notification__c
            WHERE Id = :recordId
            LIMIT 1
        ];
    }

    @AuraEnabled
    public static void markAsRead(Id recordId) {

        Notification__c notif = [
            SELECT Id, Is_Read__c
            FROM Notification__c
            WHERE Id = :recordId
            LIMIT 1
        ];

        notif.Is_Read__c = true;
        update notif;
    }
}