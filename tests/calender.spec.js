const{test,expect}= require ('@playwright/test')


// test('Verify datepicker using Playwright by hardcode date',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('#datepicker').fill('03/29/2024')
//     await page.waitForTimeout(3000)

// })

// test('Verify datepicker using Playwright by finding element',async({page})=>{
//     await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
//     const year = '2025'
//     const month = "April"
//     const day = "27"
//     await page.locator('.input-group-addon').click()
 
//     while(true){
//         let monthyear = await page.locator('.datepicker-switch').first().textContent()
//         if (monthyear === (`${month} ${year}`)){
//             await page.locator('tr:nth-child(5) > td:nth-child(1)').click()
//             break
//         }
//         await page.locator(".next").first().click()

//     }

//     await page.waitForTimeout(5000)

// })

// ------------------------------------------------------------------------------------------------

// auto-date-Picker

test('Verify datepicker using Playwright by auto date picker',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    //current date 
    const current_date = new Date()
    current_date.setDate(current_date.getDate() + 300);
    let date = current_date.getDate()
    console.log(date) //10
    
    // current month
    // let month_index = current_date.getMonth() // it will return the current month index
    // console.log(month_index) //3 

    // let mnt = month_index +1 //4
    // console.log(mnt)    
    // let m = `${0}${mnt}` // current month with zero- 04
    // console.log(m) //04

    // let month_character = current_date.toLocaleString('default',{month:'short'}) //Cureent month in short string-> (Apr)
    // console.log(month_character)
    let month_character2= current_date.toLocaleString('default',{month:'long'}) //Cureent month in full string (April)
    console.log(month_character2)
    
    // current year
    const year =current_date.getFullYear()
    console.log(year)

    let FutureDate = `${date} ${month_character2} ${year}`
    console.log(FutureDate)
  

    await page.locator('#datepicker').click()
    while(true){
       let monthyear = await page.locator('.datepicker-switch').first().textContent()
       if (monthyear == `${month_character2} ${year}`){
        break
       }
       else{
        await page.locator('.next').first().click()

       }
    }
    await page.waitForTimeout(4000)

    let daycount = await page.locator('.day').count()
    // console.log(daycount)

    for (let i = 0; i <= daycount;i++){
        let text = await page.locator('.day').nth(i).textContent()
        // console.log(text)

        if (text == date) {
            await page.locator('.day').nth(i).click();
            break;
          }
    }
    await page.waitForTimeout(3000);

})
// ----------------------------------------------------------------------------------------------------