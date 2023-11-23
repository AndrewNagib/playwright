import { test, expect, chromium } from '@playwright/test';
import Locators from './locators';
import Helpers from './helpers';
import PageObjects from './pageObjects';

const locatorsInstance = new Locators();
const helpersInstance = new Helpers();
const pageObjects = new PageObjects();




test('Batman', async ({ page }) => {
  const browser = await chromium.launch({});
  page = await browser.newPage();
  let full_movie_name = 'Batman v Superman: Dawn of Justice';

  await helpersInstance.openUrl(page, 'https://funny-movie-searcher.web.app');

  await pageObjects.waitInputFieldMovieSearchPresent(page);
  await pageObjects.typeMovieName(page, 'batman');
  await pageObjects.waitMovieNameInDropDownPresent(page , full_movie_name);
  await pageObjects.clickMovieNameInDropDown(page, full_movie_name);
  await pageObjects.waitBlockSelectedFilmPresent(page);
});

test('Movie_creation', async ({ page }) =>
{
  const browser = await chromium.launch({});
  page = await browser.newPage();
  
  let title_name : string = "The best movie";

  await helpersInstance.openUrl(page, 'https://funny-movie-searcher.web.app');

  await pageObjects.clickButtonCreateMovie(page);
  await pageObjects.typeTitle(page, title_name);
  await pageObjects.clickOpenCalendarButton(page);
  await pageObjects.chooseTheYear(page, '2022');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await pageObjects.setFilmDuration(page, '50');
  await pageObjects.setFilmGenre(page, 'sci-fi');
  await pageObjects.setFilmDirector(page, 'Andriiko');
  await pageObjects.clickSubmitCretedFilmButton(page);
  await pageObjects.waitBlockCreatedMoviePresent(page, title_name);
}
);


test('Movie_delete', async ({ page }) =>
{
  const browser = await chromium.launch({});
  let movie_name : string = "Futurama The Making Of It";
  page = await browser.newPage();
  
  await helpersInstance.openUrl(page, 'https://funny-movie-searcher.web.app');
  const elementSelector = locatorsInstance.blockWithMovie(movie_name);
  helpersInstance.swipeToElement(page, elementSelector);
  await pageObjects.buttonDeleteBlockWithMovie(page , movie_name);
  await pageObjects.blockAreYouSureDeleteMovie(page, movie_name);
  await pageObjects.clickConfirmDeleteButton(page);
  await pageObjects.waitBlockDeletedMovieDisappear(page, elementSelector);
  }
);

