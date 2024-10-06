import { test } from '@playwright/test';

test('Youtube search',async ({ page}) =>{
   await page.goto('https://www.youtube.com/');



   let searchbox=  page.locator("// input[@id='search']");

  await searchbox.click();
 
  await searchbox.fill('cydeo');

  

   await searchbox.press("Enter");

   


   let firstResult = page.locator("(//a[@id='video-title'])[1]");

   await firstResult.click();

   // await page.waitForTimeout(10000);



});