const { test, expect } = require('@playwright/test')
const exp = require('constants')

// test('signup into demoblaze site with valid credentials', async ({page}) =>{
//     await page.goto('https://demoblaze.com/')
//     await page.waitForTimeout(3000)
//     await page.locator('a[id="signin2"]').click()
//     await page.locator('input[id="sign-username"]').fill("Shivani")
//     await page.locator('input[id="sign-password"]').fill("Shivani@27")
//     await page.waitForTimeout(4000)
//     await page.locator('button[onclick="register()"]').click()
// })

test.only('login into demoblaz site',async()=>{
    await page.goto('https://demoblaze.com/')
    await page.waitForTimeout(4000)
    await page.locator('a[id="login2"]').click
    await page.locator('input[id="loginusername"]').fill("Shivani")
    await page.locator('input[id="loginpassword"]').fill("Shivani@27")
    await page.locator('button[onclick="logIn()"]').click()


})