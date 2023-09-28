import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//TODO: Test Component
@Component({
    template: '<img class="testing-directive" appImgBroken [src]="srcMock">',
    standalone: true
})
class TestComponent {
  public srcMock: any = null;
}

//TODO: Test for IMGBroken is this
describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TestComponent,
        ImgBrokenDirective]
});

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: All has to be instantiated correctly
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent Should instantiate correctly', () => {
    expect(component).toBeTruthy();
  });

  it('Directive should change img for local img', (done: DoneFn) => {
    //TODO: Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    const beforeImgSrc = beforeImgElement.src; //TODO: Se obtiene el src antes de cargar la etiqueta
    component.srcMock = undefined;

    //TODO: Act
    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      const afterImgSrc = beforeImgElement.src; //TODO: Se obtiene el src después de cargar la etiqueta

      expect(afterImgSrc).toContain('defaultCover.png');
      done();
    }, 3000);

    //TODO: Assert
  });
});
