class DataProviders
{
    public getSiteUrl() : string
    {
        return 'https://funny-movie-searcher.web.app';
    }


    public createMovieDataProvider() : Map <string, string> {
        let dataCollection: Map<string, string> = new Map();
        dataCollection.set('year','2022');
        dataCollection.set('duration','50');
        dataCollection.set('genre','sci-fi');
        dataCollection.set('director','Andriiko');

        return dataCollection;
      }

      public searchMovieDataProvider() : Map <string, string> {
        let dataCollection: Map<string, string> = new Map();
        dataCollection.set('shortMovieName','batman');
        dataCollection.set('fullMovieName','Batman v Superman: Dawn of Justice');

        return dataCollection;
      }
}

export default DataProviders;