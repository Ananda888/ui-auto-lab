Feature: React Shopping Cart - Scenario 1 
    # Scenario Outline: As a user, I am able to add one item to the shopping cart and clear the shopping cart
    #     Given I am on the store page
    #     When I am able to click on the "ADD TO CART" button for the <tShirtName> t-shirt
    #     When I click on the "Cart" button
    #     Then the <tShirtName> t-shirt should exist in the cart page 
    #     Then the total payment amount must be equal to the total price of the t-shirts
    #     Then the delete button should be visible
    #     When I click on the "CLEAR" button
    #     Then the cart will be clear of items 

    #     Examples:
    #         | tShirtName          |
    #         | Buffalo - Striploin |

    Scenario: As a user, I am able to add one item to the shopping cart and clear the shopping cart
        Given I am on the store page
        When I am able to click on the "ADD TO CART" button for the t-shirt
        When I click on the "Cart" button
        Then The t-shirt should exist in the cart page 
        Then The total payment amount must be equal to the total price of the t-shirts
        Then The delete button should be visible
        When I click on the "CLEAR" button
        Then The cart will be clear of items 

    Scenario: As a user, I am able to add two items to the shopping cart, increase and decrease the quantitiy of the first item, delete the second item and checkout of the cart sucessfully
        Given I am on the store page
        When I am able to click on the "ADD TO CART" button for two t-shirts
        When I click on the "Cart" button
        Then The t-shirts should exist in the cart page 
        When I increase the quantity of the first item to three 
        Then The total payment amount must be equal to the total price of the number t-shirts in the cart
        Then the reduce button should be visible for the first item
        Then the delete button should be visible for the second item
        When I decrease the quantity of the first item to two
        Then The total payment amount must be equal to the total price of the number t-shirts in the cart
        When I delete the second item
        Then There only should be one item in the cart 
        When I click the checkout button
        Then The message "Checkout successfully" appears
        Then The Cart will be clear of items 

    





    