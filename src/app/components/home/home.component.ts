import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MediaBreakpointType } from 'src/app/common/media-event';
import { MediaChangeService } from 'src/app/services/media-change.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  mediaSub: Subscription = new Subscription;

  constructor(private mediaObserver: MediaObserver, private mediaBreakpoint: MediaChangeService) { 
    this.mediaSub = this.mediaObserver.asObservable().subscribe(mediaChange => {
      this.mediaBreakpoint.broadcastMediaBreakpoint(mediaChange[0].mqAlias as MediaBreakpointType, {})
      console.log('Media change', mediaChange[0].mqAlias);
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}


