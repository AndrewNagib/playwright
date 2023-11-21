class Locators
{
   // public blockForSelectFromDropDown : string = '//span[@class="mat-option-text" and text()="Batman v Superman: Dawn of Justice"]';
    public blockSelectedFilm : string = '.movies__list-title:has-text("Batman V Superman Dawn Of Justice")';

    public inputFieldMovieSearch : string = 'movie title';

    public btnCreateMovie : string = '//*[@class="mat-raised-button mat-primary"]';

    public inputMovieTitle : string = '//*[@formcontrolname="Title"]';

    public btnOpenCalendar : string = '//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"]';

    public inputFieldRuntimeMinute : string = '//*[@type="number"]';

    public inputFieldGenre : string = '//*[@formcontrolname="Genre"]';

    public inputFieldDirector : string = '//*[@placeholder="Director"]';

    public btnSubmit : string = '//*[@type="submit"]/span';

    public btnChooseYear (movie_date : String)
    {
        return `//*[@aria-label='${movie_date}']/div`;
    }

    public blockForSelectFromDropDown (movie_name : String)
    {
        return `//span[@class="mat-option-text" and text()='${movie_name}']`;
    }

    public blockCreatedMovie (movie_name : String)
    {
        return `//*[@class="movies__list-title" and text()='${movie_name}']`;
    }
}

export default Locators;