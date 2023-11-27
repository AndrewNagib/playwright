export class Locators
{
    public static blockSelectedFilm : string = '.movies__list-title:has-text("Batman V Superman Dawn Of Justice")';

    public static inputFieldMovieSearch : string = 'movie title';

    public static btnCreateMovie : string = '//*[@class="mat-raised-button mat-primary"]';

    public static inputMovieTitle : string = '//*[@formcontrolname="Title"]';

    public static btnOpenCalendar : string = '//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"]';

    public static inputFieldRuntimeMinute : string = '//*[@id="mat-input-2"]';

    public static inputFieldGenre : string = '//*[@formcontrolname="Genre"]';

    public static inputFieldDirector : string = '//*[@placeholder="Director"]';

    public static btnSubmit : string = '//*[@type="submit"]/span';

    public static btnConfirmDeleteButton : string = `//*[@class="mat-button-wrapper" and text()=' Confirm ']`;

    public static blockWithMovie (movie_name : String)
    {
        return `//*[@class="movies__list-title" and text()='${movie_name}']`;
    }

    public static btnChooseYear (movie_date : String)
    {
        return `//*[@aria-label='${movie_date}']/div`;
    }

    public static blockForSelectFromDropDown (movie_name : String)
    {
        return `//span[@class="mat-option-text" and text()='${movie_name}']`;
    }

    public static blockCreatedMovie (movie_name : String)
    {
        return `//*[@class="movies__list-title" and text()='${movie_name}']`;
    }

    public static btnDeleteBlockWithMovie (movie_name : String)
    {
        return `//*[@class="movies__list-title" and text()='${movie_name}']/following-sibling::*/a[@title="Delete"]/*`;
    }

    public static blockAreYouSureDeleteMovie (movie_name : String)
    {
        return `//*[@class="modal__content" and contains(text(), 'Are you sure you want to delete ${movie_name}?')]`;
    }
}
