/**
 * Created by Nagarro on 09-07-2016.
 */
enum Category {Language, Science, History, Motivational};

function getAllBooks(): Array<Object>{
    // add a unique id to the book
    let books = [
        {id:1, title: 'Tips of JavaScript', author:'Arun Kumar', isAvailable: false, category: Category.Language},
        {id:2, title: 'AngularJs with 10 projects', author:'Puneet Vashisht', isAvailable: true, category: Category.Language},
        {id:3, title: 'You can win', author:'Shiv Khera', isAvailable: true, category: Category.Motivational},
        {id:4, title: 'India is great', author:'Mahatma Gandhi', isAvailable: false, category: Category.History}
    ];
    return books;
}

function logFirstAvailableBook(books): void{
    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for(let currentBook in books){
        if(books[currentBook].isAvailable){
            firstAvailableBook = books[currentBook].title;
            break;
        }
    }

    console.log("Total number of books : "+numberOfBooks);
    console.log("First available book : "+firstAvailableBook);
}