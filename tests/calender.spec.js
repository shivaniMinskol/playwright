const{test,expect}= require('@playwright/test')


test('Verify datepicker using Playwright by hardcode date',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('03/29/2024')
    await page.waitForTimeout(3000)

})

test('Verify datepicker using Playwright by finding element',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    const year = '2025'
    const month = "April"
    const day = "27"
    await page.locator('.input-group-addon').click()

    while(true){
        let monthyear = await page.locator('.datepicker-switch').first().textContent()
        if (monthyear === (`${month} ${year}`)){
            await page.locator('tr:nth-child(5) > td:nth-child(1)').click()
            break
        }
        await page.locator('[class="next"]').first().click()

    }

    await page.waitForTimeout(5000)

})