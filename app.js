const library = [
    {
        title: "Breaking Bad",
        year: 2008,
        genre: ["Crime", "Drama", "Thriller"],
        rating: 9.5,
        type: "serie tv",
        seasons: 5
    },
    {
        title: "Inception",
        year: 2010,
        genre: ["Action", "Sci-Fi", "Thriller"],
        rating: 8.8,
        type: "movie",
        seasons: null 
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: ["Drama", "Fantasy", "Horror"],
        rating: 8.7,
        type: "serie tv",
        seasons: 4
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: ["Action", "Adventure", "Drama"],
        rating: 9.2,
        type: "serie tv",
        seasons: 8
    },
    {
        title: "Friends",
        year: 1994,
        genre: ["Comedy", "Romance"],
        rating: 8.9,
        type: "serie tv",
        seasons: 10
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: ["Adventure", "Drama", "Sci-Fi"],
        rating: 8.6,
        type: "movie",
        seasons: null 
    },
  ];
  
class Movie {

    #title;
    #year;
    #genre;
    #rating;
    #type;

    constructor(title, year, genre, rating, type){
        this.title = title
        this.title = year
        this.title = genre
        this.title = rating
        this.title = type
    }

    
}

class TvSerie extends Movie{

    #seasons;

    constructor(title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

}