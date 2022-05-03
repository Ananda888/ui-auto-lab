Feature: React Shopping Cart - Scenario 1 

    Scenario: As a user, I am able to add one item to the shopping cart and clear the shopping cart
        Given I am on the store page
        When I am able to add one t-shirt to the cart 
        Then The t-shirt should be visible in the cart page 
        Then The total payment amount must be equal to the total price of the t-shirt
        Then I am able to delete the t-shirt
        When I clear the cart 
        Then The cart will be clear of items 


    





    