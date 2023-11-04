import{Professional} from "./professional"

export class Movie{

    title: string;
    releaseYear: number;
    actors: Professional[];
    nacionality: string;
    director: Professional;
    writer: Professional;
    language: string;
    plataforma: string;
    isMCU: boolean;
    mainCharacterName: string;
    producer: string;
    distributor: string;
    genre: string;

    constructor (title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    public showInfoMovie () {
        return {
            title: this.title,
            releaseYear: this.releaseYear,
            actors: this.actors,
            nacionality: this.nacionality,
            director: this.director,
            writer: this.writer,
            language: this.language,
            plataforma: this.plataforma,
            isMCU: this.isMCU,
            mainCharacterName: this.mainCharacterName,
            producer: this.producer,
            distributor: this.distributor,
            genre: this.genre
        };
    }
}

