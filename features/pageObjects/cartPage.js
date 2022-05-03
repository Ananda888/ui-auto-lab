
const expectChai = require('chai').expect
const storePage = require('../pageObjects/storePage')

class cartPage
{
    
    get tShirts()
    {
        return $$("h5")
    }
    get productPrices()
    {
        return $$("p[class='mb-1']:nth-child(2)")
    }
    
    
    get totalPrice()
    {
        return $("h3")
    }

    get deleteButton()
    {
        return $$(".btn-danger")
    }

    get clearButton()
    {
        return $(".btn-outlineprimary")
    }

    get cartCleared()
    {
        return $(".text-muted")
    }

    get increaseButton()
    {
        return $$(".btn-primary")
    }

    get totalItems()
    {
        return $("h4")
    }

    get checkoutButton()
        {
            return $(".btn-primary.mb-2")
        }
    get quantity()
    {
        return $$(".mb-0")
    }
    get successCheckoutMessage()
    {
        return $("p:nth-child(1)")
    }

    async tshirtExists()
    {
        for (let i = 0; i < this.tShirts.length; i++)
        {
            const tShirtNames = await storePage.this.tShirtNames[i].getText()
            const shirtsInCart = await this.tShirts[i].getText()
            await expectChai(tShirtNames[i]).to.equal(shirtsInCart[i])
        }
        
    }

    async verifyTotalPrice()
    {
        const prodQuantity = await this.quantity
        
        for (let i = 0; i < prodQuantity.length; i++)
        {
            const quantity = parseInt((await prodQuantity[i].getText()).split(":")[1].trim())
                if (i == await prodQuantity.length)
                {
                    const sumOfProducts = (await Promise.all(await this.productPrices.map(async(productPrice)=>parseInt((await productPrice.getText()).split("$")[1].trim())))).reduce((acc, price)=>acc+quantity*price,0)
                    const totalValue = await this.totalPrice.getText()
                    const totalIntValue = await parseInt(totalValue.split("$")[1].trim())
                    await expectChai(sumOfProducts).to.equal(totalIntValue)
                }
        }
   
        
    }
   
    async clearCart()
    {
        await this.clearButton.click()
    }

    async verifyCartClear()
    {
        const emptyCartText = await this.cartCleared.getText()
        const expectedText = 'Your cart is empty'
        await expectChai(expectedText).to.equal(emptyCartText)
    }

    async increaseQuantity(newQuantity, itemNumber)
    {
        for (let i = 0; i < (newQuantity-1); i++)
        {
            await this.increaseButton[(itemNumber-1)].click()
        }
    }

    async decreaseQuantity(newQuantity, itemNumber)
    {
        
        for (let i = 0; i < this.quantity.length; i++)
        {
            if (await this.quantity[i].getText() !== 'Qty: 1')
            {
                await this.deleteButton[i].isExisting()
            }
        }
        
        for (let i = 0; i < (newQuantity-1); i++)
        {
            await this.deleteButton[(itemNumber-1)].click()
        }
    }

    async deleteItem(itemNumber)
    {
        for (let i = 0; i < this.quantity.length; i++)
            {
                if (await this.quantity[i].getText() == 'Qty: 1')
                {
                    await this.deleteButton[i].isExisting()
                }
        
            }

        await this.deleteButton[(itemNumber-1)].click()

    }

    async deleteButtonExists()
    {
        for (let i = 0; i < this.quantity.length; i++)
            {
                if (await this.quantity[i].getText() == 'Qty: 1')
                {
                    await this.deleteButton[i].isExisting()
                }
        
            }
    }
    async numItemsInCart()
        {
            const numShirts = await this.quantity.length
            const numItems = await this.tShirts.length
            await expectChai(numShirts).to.equal(numItems)

        }

    async checkout()
    {
        await this.checkoutButton.click()
    }
    
    async checkoutSuccessfull()
    {
        const expectedText = "Checkout successfull"
        const checkoutText = await this.successCheckoutMessage.getText()
        await expectChai(expectedText).to.equal(checkoutText)
    }


}

module.exports = new cartPage()
