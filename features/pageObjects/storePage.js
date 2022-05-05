
class storePage
{
    get url()
        {
            url = config.baseUrl
            return browser.url(url)
        }
    get cards()
        {
        return $$(".card")
        }
    get tShirtNames()
        {
            return this.cards.$$("p")
        }
    get cartButton()
        {
        return $("a:nth-child(3)")
        }
    
  
    async addItemToCart(numberOfTShirts)
    {
    
        for( let i =0; i < numberOfTShirts; i++)
        { 
            
            await this.cards[i].$(".btn-primary").click()
        }

        await this.cartButton.click()
    }
}

module.exports = new storePage()
