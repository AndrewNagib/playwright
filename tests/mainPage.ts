import { Page } from "@playwright/test";
import { expect } from '@playwright/test';
import { Locators } from './mainPageLocators';
import { Helpers } from "./helpers";

export class PageObject
{
    public  async waitInputFieldMovieSearchPresent(page: Page) {
        await expect(page.getByPlaceholder(Locators.inputFieldMovieSearch)).toBeVisible();
    }

    public async typeMovieName(page: Page, movie_name : string)
    {
        await page.getByPlaceholder(Locators.inputFieldMovieSearch).fill(movie_name);
    }

    public async waitMovieNameInDropDownPresent(page: Page, movie_name : string)
    {
        await page.waitForSelector(Locators.blockForSelectFromDropDown(movie_name));
    }

    public async clickMovieNameInDropDown(page: Page, movie_name : string)
    {
        await Helpers.clickTheElement(page, Locators.blockForSelectFromDropDown(movie_name));
    }

    public async waitBlockSelectedFilmPresent(page: Page)
    {
        await Helpers.waitElementToBeVisible(page, Locators.blockSelectedFilm);
    }

    public async clickButtonCreateMovie(page : Page)
    {
        await Helpers.clickTheElement(page, Locators.btnCreateMovie);
    }

    public async typeTitle(page : Page, title_name : string)
    {
        await Helpers.type(page,Locators.inputMovieTitle, title_name);
    }

    public async clickOpenCalendarButton(page : Page)
    {
        await Helpers.clickTheElement(page, Locators.btnOpenCalendar);
    }

    public async chooseTheYear(page : Page, year_value : string)
    {
        await Helpers.clickTheElement(page, Locators.btnChooseYear(year_value));
    }

    public async setFilmDuration(page : Page, film_duration : string)
    {
        await Helpers.type(page, Locators.inputFieldRuntimeMinute, film_duration);
    }

    public async setFilmGenre(page : Page, film_genre : string)
    {
        await Helpers.type(page, Locators.inputFieldGenre, film_genre);
    }

    public async setFilmDirector(page : Page, film_director : string)
    {
        await Helpers.type(page, Locators.inputFieldDirector, film_director);
    }

    public async clickSubmitCretedFilmButton(page : Page)
    {
        await Helpers.clickTheElement(page, Locators.btnSubmit);
    }

    public async waitBlockCreatedMoviePresent(page : Page, title_name : string)
    {
        await Helpers.waitElementToBeVisible(page, Locators.blockCreatedMovie(Helpers.capitalizeEveryWord(title_name)));
    }

    public async buttonDeleteBlockWithMovie (page : Page, movie_name : string)
    {
        await page.locator(Locators.btnDeleteBlockWithMovie(movie_name)).click();
    }

    public async blockAreYouSureDeleteMovie (page : Page, movie_name : string)
    {
        await expect(page.locator(Locators.blockAreYouSureDeleteMovie(movie_name))).toBeVisible();
    }

    public async clickConfirmDeleteButton (page : Page)
    {
        Helpers.clickTheElement(page, Locators.btnConfirmDeleteButton);
    }

   public async waitBlockDeletedMovieDisappear (page : Page, elementSelector : string)
    {
    await Helpers.waitElementDisappear(page, elementSelector);
    }
}