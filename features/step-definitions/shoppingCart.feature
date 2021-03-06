Feature: React Shopping Cart 

    Scenario: As a user, I am able to add one item to the shopping cart and clear the shopping cart
        Given I am on the store page
        When I am able to add one t-shirt to the cart 
        Then The t-shirt should be visible in the cart page 
        Then The total payment amount must be equal to the total price of the t-shirt
        Then I am able to delete the t-shirt
        When I clear the cart 
        Then The cart will be clear of items 


    Scenario: As a user, I am able to add two items to the shopping cart, increase and decrease the quantitiy of the first item, delete the second item and checkout of the cart sucessfully
        Given I am on the store page
        When I add two t-shirts to the cart 
        Then The two t-shirts should be visible in the cart page
        When I increase the quantity of the first t-shirt to three 
        Then The total payment amount must be equal to the total price of the four t-shirts in the cart
        When I decrease the quantity of the first item to two
        Then The total payment amount must be equal to the total price of the three t-shirts in the cart
        When I delete the second item
        Then There only should be one item in the cart 
        When I checkout of the cart 
        Then The website tells me I have successfully checked out 
        Then The cart will be clear of items 






    