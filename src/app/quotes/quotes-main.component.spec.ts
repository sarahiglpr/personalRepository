import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotesMainComponent } from './quotes-main.component';
import { By } from '@angular/platform-browser';

describe('QuotesMainComponent', () => {
  let component: QuotesMainComponent;
  let fixture: ComponentFixture<QuotesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotesMainComponent],
      imports: [],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h1 tag', (() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('What quote is in your mind?');
  }));

  it('the maximum number of characters of the textarea must be 160.', (() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#error-max-length').textContent).toContain('Must be less to 160 characters long.');
  }));

  it("should disable the button when textArea is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("#create-quote"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it("should enable button when textArea is not empty", () => {
    component.qoute.setValue("I don't know what I can say, but actually I'm saying something");
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("#create-quote"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});


