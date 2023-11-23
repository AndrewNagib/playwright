import { Page } from "@playwright/test";
import { expect } from '@playwright/test';
import Locators from './locators';
import Helpers from './helpers';

const locatorsInstance = new Locators();
const helpersInstance = new Helpers();


class PageObject
{
    public async waitInputFieldMovieSearchPresent(page: Page) {
        await expect(page.getByPlaceholder(locatorsInstance.inputFieldMovieSearch)).toBeVisible();
    }

    public async typeMovieName(page: Page, movie_name : string)
    {
        await page.getByPlaceholder(locatorsInstance.inputFieldMovieSearch).fill(movie_name);
    }

    public async waitMovieNameInDropDownPresent(page: Page, movie_name : string)
    {
        await page.waitForSelector(locatorsInstance.blockForSelectFromDropDown(movie_name));
    }

    public async clickMovieNameInDropDown(page: Page, movie_name : string)
    {
        await helpersInstance.clickTheElement(page, locatorsInstance.blockForSelectFromDropDown(movie_name));
    }

    public async waitBlockSelectedFilmPresent(page: Page)
    {
        await helpersInstance.waitElementToBeVisible(page, locatorsInstance.blockSelectedFilm);
    }

    public async clickButtonCreateMovie(page : Page)
    {
        await helpersInstance.clickTheElement(page, locatorsInstance.btnCreateMovie);
    }

    public async typeTitle(page : Page, title_name : string)
    {
        await helpersInstance.type(page,locatorsInstance.inputMovieTitle, title_name);
    }

    public async clickOpenCalendarButton(page : Page)
    {
        await helpersInstance.clickTheElement(page, locatorsInstance.btnOpenCalendar);
    }

    public async chooseTheYear(page : Page, year_value : string)
    {
        await helpersInstance.clickTheElement(page, locatorsInstance.btnChooseYear(year_value));
    }

    public async setFilmDuration(page : Page, film_duration : string)
    {
        await helpersInstance.type(page, locatorsInstance.inputFieldRuntimeMinute, film_duration);
    }

    public async setFilmGenre(page : Page, film_genre : string)
    {
        await helpersInstance.type(page, locatorsInstance.inputFieldGenre, film_genre);
    }

    public async setFilmDirector(page : Page, film_director : string)
    {
        await helpersInstance.type(page, locatorsInstance.inputFieldDirector, film_director);
    }

    public async clickSubmitCretedFilmButton(page : Page)
    {
        await helpersInstance.clickTheElement(page, locatorsInstance.btnSubmit);
    }

    public async waitBlockCreatedMoviePresent(page : Page, title_name : string)
    {
        await helpersInstance.waitElementToBeVisible(page, locatorsInstance.blockCreatedMovie(helpersInstance.capitalizeEveryWord(title_name)));
    }

    public async buttonDeleteBlockWithMovie (page : Page, movie_name : string)
    {
        await page.locator(locatorsInstance.btnDeleteBlockWithMovie(movie_name)).click();
    }

    public async blockAreYouSureDeleteMovie (page : Page, movie_name : string)
    {
        await expect(page.locator(locatorsInstance.blockAreYouSureDeleteMovie(movie_name))).toBeVisible();
    }

    public async clickConfirmDeleteButton (page : Page)
    {
        helpersInstance.clickTheElement(page, locatorsInstance.btnConfirmDeleteButton);
    }

   public async waitBlockDeletedMovieDisappear (page : Page, elementSelector : string)
    {
    await helpersInstance.waitElementDisappear(page, elementSelector);
    }
}

export default PageObject;