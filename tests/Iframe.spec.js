const{test,expect} = require("@playwright/test")

// .frameLocator()
test('verify Iframe by using .frameLocator() in playwrit',async({page})=>{
    await page.goto('https://letcode.in/frame')

    let iframeCss = await page.frameLocator('[src="frameUI"]') //iframe css 

    await iframeCss.locator('[name="fname"]').fill('Shivani')
    await iframeCss.locator('[name="lname"]').fill('Hedau')
    
    await page.waitForTimeout(4000)
})

// -----------------------------------------------------------------------------------------------
// .frame() - 1. by name attribute value  
test('verify Iframe by using .frame() by name attribute value in playwrit',async({page})=>{
    await page.goto('https://letcode.in/frame')

    let frameL = await page.frame('firstFr') //name attribute ki value

    await frameL.locator('[name="fname"]').fill('Shivani')
    await frameL.locator('[name="lname"]').fill('Hedau')
    
    await page.waitForTimeout(4000)
})
// --------------------------------------------------------------------------------------------------

// .frame() - 2. iframe url
test.only('verify Iframe by using .frame() by using url in playwrit',async({page})=>{
    await page.goto('https://letcode.in/frame')

    let frameL = await page.frame({url:'https://letcode.in/frameUI'}) // iframe url

    await frameL.locator('[name="fname"]').fill('Shivani')
    await frameL.locator('[name="lname"]').fill('Hedau')
    
    await page.waitForTimeout(4000)
})

// -----------------------------------------------------------------------------------------------------