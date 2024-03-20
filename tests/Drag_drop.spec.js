const{test,expect} = require('@playwright/test')

test('Drag and drop the element from src to destination',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const Washington = await page.locator("#box3")
    const United_States = await page.locator("#box103")

    await Washington.dragTo(United_States)

    await page.waitForTimeout(5000)
    
})

test('Drag nd Drop using inbuild command',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')
    await rome.dragTo(Italy)
    expect(await page.locator('#box6'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test('Drag and drop by dragTo method',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const osla = await page.locator('#box1')
    const Norway= await page.locator('#box101')

    await osla.dragTo(Norway)

})


test('Drag and drop for sweden by dragTo method',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const Stockholm = await page.locator('#box2')
    const Sweden= await page.locator('#box102')

    await Stockholm.dragTo(Sweden)

})

test('Drag and drop for Spain by dragTo method',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const Madrid = await page.locator('#box7')
    const Spain= await page.locator('#box107')

    await Madrid.dragTo(Spain)

})

test.only('Drag and drop for Denmark by dragTo method',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    const Copenhagen = await page.locator('#box4')
    const Denmark= await page.locator('#box104')

    await Copenhagen.dragTo(Denmark)

})


