import { Component, DestroyRef, ElementRef, OnDestroy, OnInit, ViewChild, effect, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programación reactiva
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { destroyCustom } from '@core/utils/destroyCustom';

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent  {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  state: string = 'paused';
  public multimediaService = inject(MultimediaService);
  destroyCustom = destroyCustom();

  constructor() {
    effect(() => {
      const state = this.multimediaService.playerStatusSignal();
      this.state = state;
    });
  }

  handlePosition(event: MouseEvent): void {
    const elNative:HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentajeX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentajeX);
  }
}
