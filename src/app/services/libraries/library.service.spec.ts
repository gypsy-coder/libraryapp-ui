import { TestBed, async } from '@angular/core/testing';

import { LibraryService } from './library.service';
import { LibrariesComponent } from 'src/app/libraries/libraries.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LibraryService', () => {
  let service: LibraryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrariesComponent],
      providers:[LibraryService],
      imports: [ HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: LibraryService = TestBed.get(LibraryService);
    expect(service).toBeTruthy();
  });
});
