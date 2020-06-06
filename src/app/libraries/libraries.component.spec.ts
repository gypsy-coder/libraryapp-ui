import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LibrariesComponent } from './libraries.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { LibraryService } from '../services/libraries/library.service';

describe('LibraryComponent', () => {
  let component: LibrariesComponent;
  let fixture: ComponentFixture<LibrariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrariesComponent],
      providers:[LibraryService],
      imports: [ HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const service: LibraryService = TestBed.get(LibraryService);
    expect(service).toBeTruthy();
  });

  it('should have fetchAllLibraries function', () => {
    const service: LibraryService = TestBed.get(LibraryService);
    expect(service.fetchAllLibraries).toBeTruthy();
  });

  it('should have fetchAllBooksInLibrary function', () => {
    const service: LibraryService = TestBed.get(LibraryService);
    expect(service.fetchAllBooksInLibrary).toBeTruthy();
  });

});

