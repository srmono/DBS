class Book{
    constructor(label, author){
        this.label = label;
        this.author = author;
    }

    getAuthor(){
        return this.author;
    }
    getLable(){
        return this.label;
    }
}

let js = new Book("Js Mastery", "Venkat");

// function Book(lable, author){
//     this.author = author;
//     this.label = lable
// }

// Book.prototype.getAuthor = () => this.author;
// Book.prototype.getLable = () => this.label
