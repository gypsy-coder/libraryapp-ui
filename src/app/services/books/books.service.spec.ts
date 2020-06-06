import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BooksService } from './books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibrariesComponent } from 'src/app/libraries/libraries.component';

describe('booksService', () => {
  let service: BooksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrariesComponent],
      providers:[BooksService],
      imports: [ HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
