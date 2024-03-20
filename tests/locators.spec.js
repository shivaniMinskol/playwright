const { test, expect } = require('@playwright/test')
const exp = require('constants')
// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle

// test('Verify getByAltText method in playwright',async({page})=>{
//     await page.goto('https://letcode.in/test#google_vignette')
//     let ele = await page.getByAltText('letcode')
//     await expect(ele).toBeVisible()
// })

// test('Verify getByLabel method in playwright',async({page})=>{
//     await page.goto('https://letcode.in/test#google_vignette')
//     let ele2 = await page.getByLabel('main navigation')
//     await expect(ele2).toBeVisible()
//     let ele3 = await page.getByLabel('Advertisement').first()
//     await expect(ele3).toBeVisible()
// })

test('verify getByPlaceholder method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('shivani')
    await page.waitForTimeout(4000)
})

test('verify getByRole method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.getByRole('checkbox',{name:'Option 1'}).check()


})

test.only('verify getByText method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.getByText('Dropdown Menu(s), Checkboxe(s) & Radio Button(s)').isVisible()
})


test('Verify getByTitle method in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele4 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele4).toHaveText(' Koushik Chatterjee ')
    await expect(ele4).toBeVisible()
})

test('Verify getByTitle in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele5 = await page.getByTitle('Advertisement').first()
    await expect(ele5).toBeVisible()
})

test.only('Verify getByTestId method in playwright',async({page})=>{
    await page.goto('https://www.atlassian.com/')
    await page.getByTestId('global-nav-search-icon').click()
    await expect(page.locator('#global-nav-search-input')).toBeVisible()
    await page.waitForTimeout(5000)
})