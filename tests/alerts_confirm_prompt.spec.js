const{test,expect} = require('@playwright/test')

test('handel simple alerts box in plyawright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async simpleAlerts=>{

        await expect(simpleAlerts.message()).toContain('I am a JS Alert')

        await expect(simpleAlerts.type()).toContain('alert')

        await simpleAlert.accept()
    })

    await page.locator('button[onclick="jsAlertc()"]').click()
    await expect( page.locator('#result')).toHaveText('You successfully clicked an alert')

    // await page.waitForTimeout(5000)

})


