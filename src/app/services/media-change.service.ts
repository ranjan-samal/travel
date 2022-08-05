import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MediaBreakpointEvent, MediaBreakpointType } from '../common/media-event';

@Injectable({
  providedIn: 'root'
})
export class MediaChangeService {

  constructor() { }

  private _mediaBreakpointBroadcast: Subject<MediaBreakpointEvent> = new Subject<MediaBreakpointEvent>();

  broadcastMediaBreakpoint(type: MediaBreakpointType, payload: any = null) {
    this._mediaBreakpointBroadcast.next({type, payload});
  }

  subscribeMediaBreakpoint(): Observable<MediaBreakpointEvent> {
    return this._mediaBreakpointBroadcast.asObservable();
  }
}
