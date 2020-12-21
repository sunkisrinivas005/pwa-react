import {MOVIE_LIST} from '../constants/ActionTypes';


const INIT_STATE = {
  loader: true,
 movieList : [
    {"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071},
    {"Title": "First Love, Last Rites", "US Gross": 10876, "Worldwide Gross": 10876, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Aug 07 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Strand", "Source": null, "Major Genre": "Drama", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.9, "IMDB Votes": 207},
    {"Title": "I Married a Strange Person", "US Gross": 203134, "Worldwide Gross": 203134, "US DVD Sales": null, "Production Budget": 250000, "Release Date": "Aug 28 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Lionsgate", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.8, "IMDB Votes": 865},
    {"Title": "Let's Talk About Sex", "US Gross": 373615, "Worldwide Gross": 373615, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Sep 11 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Fine Line", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 13, "IMDB Rating": null, "IMDB Votes": null},
    {"Title": "Slam", "US Gross": 1009819, "Worldwide Gross": 1087521, "US DVD Sales": null, "Production Budget": 1000000, "Release Date": "Oct 09 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Trimark", "Source": "Original Screenplay", "Major Genre": "Drama", "Creative Type": "Contemporary Fiction", "Director": null, "Rotten Tomatoes Rating": 62, "IMDB Rating": 3.4, "IMDB Votes": 165},
    {"Title": "Mississippi Mermaid", "US Gross": 24551, "Worldwide Gross": 2624551, "US DVD Sales": null, "Production Budget": 1600000, "Release Date": "Jan 15 1999", "MPAA Rating": null, "Running Time min": null, "Distributor": "MGM", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": null, "IMDB Votes": null},
    {"Title": "Following", "US Gross": 44705, "Worldwide Gross": 44705, "US DVD Sales": null, "Production Budget": 6000, "Release Date": "Apr 04 1999", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Zeitgeist", "Source": null, "Major Genre": null, "Creative Type": null, "Director": "Christopher Nolan", "Rotten Tomatoes Rating": null, "IMDB Rating": 7.7, "IMDB Votes": 15133}
]
};


export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case MOVIE_LIST: {
      return {
        ...state,
        movieList: action.payload,
      }
    }
    default:
      return state;
  }
}
