import { test, expect, chromium } from '@playwright/test';
import Locators from './locators';

const locatorsInstance = new Locators();

function capitalizeEveryWord(inputString: string): string {
  return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
}

const chromePath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

async function openUrl(page, url : string) {
  await page.goto(url);
}


test('Batman', async ({ page }) => {
  const browser = await chromium.launch({ executablePath: chromePath });
  page = await browser.newPage();
  
  openUrl(page, 'https://funny-movie-searcher.web.app');

  await expect(page.getByPlaceholder(locatorsInstance.inputFieldMovieSearch)).toBeVisible();
  await page.getByPlaceholder(locatorsInstance.inputFieldMovieSearch).fill('batman');
  await page.waitForSelector(locatorsInstance.blockForSelectFromDropDown('Batman v Superman: Dawn of Justice'));
  await page.click(locatorsInstance.blockForSelectFromDropDown('Batman v Superman: Dawn of Justice'));
  await expect(page.locator(locatorsInstance.blockSelectedFilm)).toBeVisible();
});

test('Movie_creation', async ({ page }) =>
{
  const browser = await chromium.launch({ executablePath: chromePath });
  page = await browser.newPage();
  
  let title_name : string = "The best movie";

  openUrl(page, 'https://funny-movie-searcher.web.app');

  await page.click(locatorsInstance.btnCreateMovie);
  await page.locator(locatorsInstance.inputMovieTitle).fill(title_name);
  await page.click(locatorsInstance.btnOpenCalendar);
  await page.click(locatorsInstance.btnChooseYear('2022'));
  await page.locator(locatorsInstance.inputFieldRuntimeMinute).fill('50');
  await page.locator(locatorsInstance.inputFieldGenre).fill('sci-fi');
  await page.locator(locatorsInstance.inputFieldDirector).fill('Andriiko');
  await page.click(locatorsInstance.btnSubmit);
  await expect(page.locator(locatorsInstance.blockCreatedMovie(capitalizeEveryWord(title_name)))).toBeVisible();
}
);


test('Movie_delete', async ({ page }) =>
{
  const browser = await chromium.launch({ executablePath: chromePath });
  let movie_name : string = "Futurama The Making Of It";
  page = await browser.newPage();
  
  await page.goto('https://funny-movie-searcher.web.app');
  const elementSelector = `//*[@class="movies__list-title" and text()='${movie_name}']`;
  const elementHandle = await page.$(elementSelector);
  if (elementHandle) {
      await elementHandle.scrollIntoViewIfNeeded();
  } else {
    console.error(`Element with selector ${elementSelector} did not find`);
  }
  await page.locator(`//*[@class="movies__list-title" and text()='${movie_name}']/following-sibling::*/a[@title="Delete"]/*`).click();
  await expect(page.locator(`//*[@class="modal__content" and contains(text(), 'Are you sure you want to delete ${movie_name}?')]`)).toBeVisible();
  await page.locator(`//*[@class="mat-button-wrapper" and text()=' Confirm ']`).click();
  await page.waitForSelector(elementSelector, { state: 'detached' }).then(() => {
    console.log(`Element with selector ${elementSelector} deleted from DOM`);
  }).catch(() => {
    console.log(`Element with selector ${elementSelector} not found`);
  });
}
);

