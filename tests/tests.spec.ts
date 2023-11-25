import { test, expect, chromium } from '@playwright/test';
import Locators from './locators';
import Helpers from './helpers';
import PageObjects from './pageObjects';
import DataProviders from './dataProviders';

const locatorsInstance = new Locators();
const helpersInstance = new Helpers();
const pageObjects = new PageObjects();
const dataProviders = new DataProviders();


// test('Batman', async ({ page }) => {
//   const browser = await chromium.launch({});
//   page = await browser.newPage();
//   const movieData = dataProviders.searchMovieDataProvider();

//   await helpersInstance.openUrl(page, dataProviders.getSiteUrl());

//   await pageObjects.waitInputFieldMovieSearchPresent(page);
//   await pageObjects.typeMovieName(page, movieData.get('shortMovieName')!);
//   await pageObjects.waitMovieNameInDropDownPresent(page , movieData.get('fullMovieName')!);
//   await pageObjects.clickMovieNameInDropDown(page, movieData.get('fullMovieName')!);
//   await pageObjects.waitBlockSelectedFilmPresent(page);
// });

// test('Movie_creation', async ({ page }) =>
// {
//   const browser = await chromium.launch({});
//   page = await browser.newPage();
//   const movieData = dataProviders.createMovieDataProvider();
  
//   let title_name : string = "The best movie";

//   await helpersInstance.openUrl(page, dataProviders.getSiteUrl());

//   await pageObjects.clickButtonCreateMovie(page);
//   await pageObjects.typeTitle(page, title_name);
//   await pageObjects.clickOpenCalendarButton(page);
//   await pageObjects.chooseTheYear(page, movieData.get('year')!);
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   await pageObjects.setFilmDuration(page, movieData.get('duration')!);
//   await pageObjects.setFilmGenre(page, movieData.get('genre')!);
//   await pageObjects.setFilmDirector(page, movieData.get('director')!);
//   await pageObjects.clickSubmitCretedFilmButton(page);
//   await pageObjects.waitBlockCreatedMoviePresent(page, title_name);
// }
// );


// test('Movie_delete', async ({ page }) =>
// {
//   const browser = await chromium.launch({});
//   let movie_name : string = "Futurama The Making Of It";
//   page = await browser.newPage();
  
//   await helpersInstance.openUrl(page, dataProviders.getSiteUrl());
//   const elementSelector = locatorsInstance.blockWithMovie(movie_name);
//   helpersInstance.swipeToElement(page, elementSelector);
//   await pageObjects.buttonDeleteBlockWithMovie(page , movie_name);
//   await pageObjects.blockAreYouSureDeleteMovie(page, movie_name);
//   await pageObjects.clickConfirmDeleteButton(page);
//   await pageObjects.waitBlockDeletedMovieDisappear(page, elementSelector);
//   }
// );


test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get started').click();
  await expect(page).toHaveTitle(/Getting started/);
});
