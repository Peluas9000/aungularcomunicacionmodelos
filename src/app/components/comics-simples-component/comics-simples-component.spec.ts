import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsSimplesComponent } from './comics-simples-component';

describe('ComicsSimplesComponent', () => {
  let component: ComicsSimplesComponent;
  let fixture: ComponentFixture<ComicsSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsSimplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsSimplesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
