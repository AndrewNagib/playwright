import { test, chromium } from '@playwright/test';
import { Helpers } from './helpers';
import { PageObject } from './mainPage';
import { Locators } from './mainPageLocators';
import { DataProviders } from './mainPageDataProvider';

test.beforeEach(async ({ page }) => {
  const browser = await chromium.launch({});
  page = await browser.newPage();
 
});


test('Batman', async ({ page }) => {
  const pageObjectInstance = new PageObject();
  const movieData = DataProviders.searchMovieDataProvider();
  await Helpers.openUrl(page, DataProviders.getSiteUrl());
  await pageObjectInstance.waitInputFieldMovieSearchPresent(page);
  await pageObjectInstance.typeMovieName(page, movieData.get('shortMovieName')!);
  await pageObjectInstance.waitMovieNameInDropDownPresent(page , movieData.get('fullMovieName')!);
  await pageObjectInstance.clickMovieNameInDropDown(page, movieData.get('fullMovieName')!);
  await pageObjectInstance.waitBlockSelectedFilmPresent(page);
 });

test('Movie_creation', async ({ page }) =>
{
  const pageObjectInstance = new PageObject();
  const movieData = DataProviders.createMovieDataProvider();
  
  let title_name : string = "The best movie";

  await Helpers.openUrl(page, DataProviders.getSiteUrl());

  await pageObjectInstance.clickButtonCreateMovie(page);
  await pageObjectInstance.typeTitle(page, title_name);
  await pageObjectInstance.clickOpenCalendarButton(page);
  await pageObjectInstance.chooseTheYear(page, movieData.get('year')!);
  await new Promise(resolve => setTimeout(resolve, 1000));
  await pageObjectInstance.setFilmDuration(page, movieData.get('duration')!);
  await pageObjectInstance.setFilmGenre(page, movieData.get('genre')!);
  await pageObjectInstance.setFilmDirector(page, movieData.get('director')!);
  await pageObjectInstance.clickSubmitCretedFilmButton(page);
  await pageObjectInstance.waitBlockCreatedMoviePresent(page, title_name);
}
);


test('Movie_delete', async ({ page }) =>
{
  const pageObjectInstance = new PageObject();
  let movie_name : string = "Futurama The Making Of It";
 
  await Helpers.openUrl(page, DataProviders.getSiteUrl());
  const elementSelector = Locators.blockWithMovie(movie_name);
  Helpers.swipeToElement(page, elementSelector);
  await pageObjectInstance.buttonDeleteBlockWithMovie(page , movie_name);
  await pageObjectInstance.blockAreYouSureDeleteMovie(page, movie_name);
  await pageObjectInstance.clickConfirmDeleteButton(page);
  await pageObjectInstance.waitBlockDeletedMovieDisappear(page, elementSelector);
  }
);

