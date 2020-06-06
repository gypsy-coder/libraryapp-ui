import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/libraries/library.service';


@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {

  public libraries : any =[];
  public books: any =[];
  public viewBooks: boolean = false;
  public libraryName: string = null;

  constructor(private libraryService:LibraryService) { }

  ngOnInit(): void {
    this.libraryService.fetchAllLibraries(data =>{
      if(data){
        console.table('all libraries', data);
        data.forEach(ele => {
          let libr = {
            id: ele.libraryId,
            name: ele.libraryName,
            location: ele.location
          }
          this.libraries.push(libr);
        });
      }
    });
  }

  fetchBooks(library){
    this.books = [];
    this.libraryName = library.name;
    this.viewBooks = true;
    this.libraryService.fetchAllBooksInLibrary(library.id, data =>{
      if(data != null && data.length > 0){
        console.log("books::", data);
        data.forEach(ele => {
          let book = {
            id: ele.bookId,
            name: ele.bookName,
            author: ele.author
          }
          this.books.push(book);
        });
      }
      
    });
  }

}
