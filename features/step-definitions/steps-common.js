const {Given, When, Then} = require('@wdio/cucumber-framework')
const { Browser } = require('puppeteer-core')
const { default: $ } = require('webdriverio/build/commands/browser/$')
const { default: $$ } = require('webdriverio/build/commands/browser/$$')
const { decreaseQuantity } = require('../pageObjects/cartPage')
const cartPage = require('../pageObjects/cartPage')
const store = require('../pageObjects/storePage')


Given(/^I am on the store page$/, async()=>
{
    await browser.url('https://www.google.com.au')
})


Then(/^The cart will be clear of items$/, async()=>
{
    await cartPage.verifyCartClear()
})




