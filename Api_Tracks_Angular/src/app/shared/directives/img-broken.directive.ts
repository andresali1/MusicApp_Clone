import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;

  @HostListener('error') handleError(): void{
    const nativeElement = this.host.nativeElement;
    if(this.customImg){
      nativeElement.src = this.customImg
    } else {
      nativeElement.src = '../../../assets/images/defaultCover.png';
    }
  }

  constructor(private host: ElementRef) {}

}
