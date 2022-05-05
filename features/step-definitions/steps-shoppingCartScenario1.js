const {Given, When, Then} = require('@wdio/cucumber-framework')
const { Browser } = require('puppeteer-core')
const { default: $ } = require('webdriverio/build/commands/browser/$')
const { default: $$ } = require('webdriverio/build/commands/browser/$$')
const cartPage = require('../pageObjects/cartPage')
const store = require('../pageObjects/storePage')
//const config = require('../')


When(/^I am able to add one t-shirt to the cart$/, async()=>
{
  
    await store.addItemToCart(numberOfShirts=1)
   
}
)


Then(/^The t-shirt should be visible in the cart page$/, async()=>
{
    await cartPage.tshirtExists()
    
})

Then(/^The total payment amount must be equal to the total price of the t-shirt$/, async()=>
{
    await cartPage.verifyTotalPrice()
    
})

Then(/^I am able to delete the t-shirt$/, async()=>
{
    await cartPage.deleteButtonExists()
})



When(/^I clear the cart$/, async()=>
{
    await cartPage.clearCart()
   
})

    



