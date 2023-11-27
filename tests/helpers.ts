import { Page } from "@playwright/test";
import { expect } from '@playwright/test';


export class Helpers
{
    public static async clickTheElement(page : Page, locator : string)
    {
     await page.click(locator).then(() => {console.log(`Click the element with selector ${locator}`)});
    }

    public static async  type(page: Page, locator: string, inputData: string) {
      await  page.locator(locator).fill(inputData);
    }

    public static async waitElementToBeVisible(page : Page, locator : string)
    {
       await expect(page.locator(locator)).toBeVisible();
    }

   public static async waitElementDisappear (page : Page, elementSelector : string)
   {
    await page.waitForSelector(elementSelector, { state: 'detached' }).then(() => {
        console.log(`Element with selector ${elementSelector} deleted from DOM`);
      }).catch(() => {
        console.log(`Element with selector ${elementSelector} not found`);
      });
    }
    
    public static async openUrl(page, url : string) {
        await page.goto(url);
      }

    public static capitalizeEveryWord(inputString: string): string {
        return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
      }

    public static async swipeToElement(page : Page, elementSelector : string)
      {
        const elementHandle = await page.$(elementSelector);
        if (elementHandle) {
            await elementHandle.scrollIntoViewIfNeeded();
        } else {
          console.error(`Element with selector ${elementSelector} did not find`);
        }
      }
}