import { TestBed } from '@angular/core/testing';

import { ArticleViewService } from './article-view.service';

describe('ArticleViewService', () => {
  let service: ArticleViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
