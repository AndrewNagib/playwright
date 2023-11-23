import { Page } from "@playwright/test";
import { expect } from '@playwright/test';



class Helpers
{
    public async clickTheElement(page : Page, locator : string)
    {
     await page.click(locator);
    }

    public async  type(page: Page, locator: string, inputData: string) {
      await  page.locator(locator).fill(inputData);
    }

    public async waitElementToBeVisible(page : Page, locator : string)
    {
       await expect(page.locator(locator)).toBeVisible();
    }

   public async waitElementDisappear (page : Page, elementSelector : string)
   {
    await page.waitForSelector(elementSelector, { state: 'detached' }).then(() => {
        console.log(`Element with selector ${elementSelector} deleted from DOM`);
      }).catch(() => {
        console.log(`Element with selector ${elementSelector} not found`);
      });
    }
    
    public async openUrl(page, url : string) {
        await page.goto(url);
      }

    public capitalizeEveryWord(inputString: string): string {
        return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
      }

      public async swipeToElement(page : Page, elementSelector : string)
      {
        const elementHandle = await page.$(elementSelector);
        if (elementHandle) {
            await elementHandle.scrollIntoViewIfNeeded();
        } else {
          console.error(`Element with selector ${elementSelector} did not find`);
        }
      }
}

export default Helpers;