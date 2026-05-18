public with sharing class AccountHandler {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountData(){
    try {
            return [SELECT Id, Name FROM Account LIMIT 5];
        } 
    catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
        }
    
   }
}