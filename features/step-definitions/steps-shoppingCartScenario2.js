const {Given, When, Then} = require('@wdio/cucumber-framework')
const { Browser } = require('puppeteer-core')
const { default: $ } = require('webdriverio/build/commands/browser/$')
const { default: $$ } = require('webdriverio/build/commands/browser/$$')
const { decreaseQuantity } = require('../pageObjects/cartPage')
const cartPage = require('../pageObjects/cartPage')
const store = require('../pageObjects/storePage')
//const tShirtName = ['Buffalo - Striploin', 'Bacardi Breezer - Tropical']
//const config = require('../')


Given(/^I am on the store page$/, async()=>
{
    await browser.url('http://localhost:3000/')
})

When(/^I add two t-shirts to the cart$/, async()=>
{
    await store.addItemToCart(numberOfShirts = 2)
}
)


Then(/^The two t-shirts should be visible in the cart page$/, async()=>
{
    await cartPage.tshirtExists()
})

When(/^I increase the quantity of the first t-shirt to three$/, async()=>
{
    await cartPage.increaseQuantity(newQuantity=3, itemNumber=1)
})

Then(/^The total payment amount must be equal to the total price of the four t-shirts in the cart$/, async()=>
{ 
    await cartPage.verifyTotalPrice() 
})

When(/^I decrease the quantity of the first item to two$/, async()=>
{  
    await cartPage.decreaseQuantity(newQuantity = 2, itemNumber=1)
})

Then(/^The total payment amount must be equal to the total price of the three t-shirts in the cart$/, async()=>
{
    await cartPage.verifyTotalPrice()
})


When(/^I delete the second item$/, async()=>
{  
    await cartPage.deleteItem(itemNumber=2)
})

Then(/^There only should be one item in the cart$/, async()=>
{    
    await cartPage.numItemsInCart()  
})

When(/^I checkout of the cart$/, async()=>
{
    await cartPage.checkout()
})

Then(/^The website tells me I have successfully checked out$/, async()=>
{
    await cartPage.checkoutSuccessfull()
})

Then(/^The Cart will be clear of items$/, async()=>
{
    await cartPage.verifyCartClear()
})




