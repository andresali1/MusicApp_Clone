import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AuthPageComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
});
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Primer Enunciado -> Debe asegurar lo siguiente
  //TODO: Debe de asegurarse que el formulario sea inválido cuando se ingresen datos erroneos
  it('form should return invalid', () => {
    //TODO: Arrange
    const mockCredentials = {
      email: 'qwergefg',
      password: '123qweasdzxcvfrtgb'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //TODO: Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //TODO: Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('form should return valid', () => {
    //TODO: Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //TODO: Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //TODO: Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('submit button should have the word "Iniciar sesión"', () => {
    //TODO: Arrange
    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    
    //TODO: Act
    const innerText = elementRef.nativeElement.innerText;

    //TODO: Assert
    expect(innerText).toEqual('Iniciar sesión');
  })
});
