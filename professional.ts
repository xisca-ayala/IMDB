export class Professional{
    public name: string;
    public age: number; 
    public weight: number; 
    public height: number;
    public isRetired: boolean;
    public nationality: string; 
    public oscarNumber: number; 
    public profession: string; 

    constructor( name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarNumber: number, profession: string ){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }

    public printProperties():(string | number| boolean)[] {
        let arrayProperties = [
            this.name,
            this.age, 
            this.weight, 
            this.height, 
            this.isRetired, 
            this.nationality, 
            this.oscarNumber, 
            this.profession]
            
        return arrayProperties;
    }
}

