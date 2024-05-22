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
    {
        title: "Shogun",
        year: 2024,
        genre: ["Adventure", "Drama", "History"],
        rating: 8.1,
        type: "serie tv",
        seasons: 1
      }
  ];
  
class Movie {

    #title;
    #year;
    #genre;
    #rating;
    #type;

    constructor(title, year, genre, rating, type){
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    setTitle(title){
        this.#title = title
    }
    getTitle(){
        return this.#title
    }

    setYear(year){
        this.#year = year
    }
    getYear(){
        return this.#year
    }

    setGenres(genres){
        this.#genre = genres
    }
    getGenresArray(){
        return this.#genre
    }
    getGenres(){
        return this.#genre.join(", ")
    }

    setRating(rating){
        this.#rating = rating
    }
    getRating(){
        return this.#rating
    }

    setType(type){
        this.#type = type
    }
    getType(){
        return this.#type
    }

    toString(){
        return `${this.getTitle()} è un ${this.getType()} di genere ${this.getGenres()}. É stato rilasciato nel ${this.getYear()} ed ha un voto di ${this.getRating()}`
    }
}

class TvSerie extends Movie{

    #seasons;

    constructor(title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }

    setSeasons(seasons){
        this.#seasons = seasons
    }
    getSeasons(){
        return this.#seasons
    }

    toString(){
        return `${this.getTitle()} è una ${this.getType()} di genere ${this.getGenres()}. La prima stagione è stata rilasciata nel ${this.getYear()}, conta ${this.getSeasons()} ${(this.getSeasons()===1 ? "stagione" : "stagioni")} ed ha un voto di ${this.getRating()}`
    }

}

//creazione array con le istanze delle classi

const arrayMoviesTv = library.map((element) => {
    if(element.type === "movie"){
        return new Movie(element.title, element.year, element.genre, element.rating, element.type)
    } else {
        return new TvSerie(element.title, element.year, element.genre, element.rating, element.type, element.seasons)
    }
})

//function e test per MEDIAVOTI

function avgVotes (collection, genere){

    filteredCollection = collection.filter(element => element.getGenresArray().includes(genere))

    return filteredCollection.reduce((curr, obj) => curr+obj.getRating(), null)/filteredCollection.length
}
console.log("Media voti per il genere Drama: ", avgVotes(arrayMoviesTv, "Drama"), "\n");

//function e test per LISTA DEI GENERI

function listGenres(collection){

    let list = []

    collection.forEach( element =>{
        element.getGenresArray().forEach(el => {
            if(!list.includes(el)){
                list.push(el)
            }
        })
    })
    
    return list
}

console.log("Lista generi: ", listGenres(arrayMoviesTv) , "\n");

// function e test array di toString

function arrayOfStrings (collection, genere){

    filteredCollection = collection.filter(element => element.getGenresArray().includes(genere))
    let descriptions=[]
    filteredCollection.forEach(element => descriptions.push(element.toString()))
    return descriptions
}
console.log("Descrizione film e serie con genere Drama: ", arrayOfStrings(arrayMoviesTv, "Drama"), "\n");


// BONUS Classe Cart e funzioni

class Cart {
    #wantList = [];

    getWantList(){
        return this.#wantList
    }

    addToWantlist(shop){
        this.#wantList.push(shop)
    }

    removeFromWantlist(remove){
        let indexToRemove = this.#wantList.indexOf(remove)

        if(indexToRemove){
            this.#wantList.splice(indexToRemove,1)
        }
    }

    checkout(){
        return this.#wantList.reduce((sum, toAdd) => 3.99+sum , 0)
    }
}

let myCart = new Cart();

myCart.addToWantlist(arrayMoviesTv[0])
myCart.addToWantlist(arrayMoviesTv[1])
myCart.addToWantlist(arrayMoviesTv[2])

myCart.removeFromWantlist(arrayMoviesTv[1])

console.log("Da acquistare:", myCart.getWantList().length, " Costo:", myCart.checkout())
