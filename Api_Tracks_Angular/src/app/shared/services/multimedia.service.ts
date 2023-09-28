import { Injectable, EventEmitter, signal, effect } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private readonly trackURL: string = environment.track;
  callback: EventEmitter<any> = new EventEmitter<any>();
  public audio!: HTMLAudioElement //TODO: <audio>

  public trackInfoSignal = signal<TrackModel | undefined>(undefined);
  public timeElapsedSignal = signal<string>('00:00');
  public timeRemainingSignal = signal<string>('-00:00');
  public playerStatusSignal = signal<string>('paused');
  public playerPercentajeSignal = signal<number>(0);

  constructor() {
    this.audio = new Audio();

    effect(() => {
      const dataInfo = this.trackInfoSignal();
      if(dataInfo) this.setAudio(dataInfo);
    });

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setRemainingTime(currentTime, duration);
    this.setPercentaje(currentTime, duration);
  }

  private setPercentaje(currentTime: number, duration: number): void {
    //TODO: duration ---> 100%
    //TODO: currentTime ---> (x)
    //TODO: (currentTime * 100) / duration

    let percentaje = (currentTime * 100) / duration;
    this.playerPercentajeSignal.set(percentaje);
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatusSignal.set('play');
        break;
      case 'playing':
        this.playerStatusSignal.set('playing');
        break;
      case 'ended':
        this.playerStatusSignal.set('ended');
        break;
      default:
        this.playerStatusSignal.set('paused');
        break;
    }
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displaySMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displaySMinutes}:${displaySeconds}`;

    this.timeElapsedSignal.set(displayFormat);
  }

  private setRemainingTime(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displaySMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displaySMinutes}:${displaySeconds}`;

    console.log('total', displayFormat)
    this.timeRemainingSignal.set(displayFormat);
  }

  //TODO: Funciones publicas
  public setAudio(track: TrackModel): void {
    console.log('⚕️⚕️⚕️', track);
    this.audio.src = `${this.trackURL}${track.url}`;
    this.audio.play();
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percentaje: number): void {
    const {duration} = this.audio;

    const percentajeToSecond = (percentaje * duration) / 100;
    this.audio.currentTime = percentajeToSecond;    
  }
}
