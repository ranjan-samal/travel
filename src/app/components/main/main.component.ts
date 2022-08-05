import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaBreakpointEvent, MediaBreakpointType } from 'src/app/common/media-event';
import { MediaChangeService } from 'src/app/services/media-change.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private mediaBreakpointSubscription: Subscription;

  constructor(private mediaBreakpointService: MediaChangeService) {
    this.mediaBreakpointSubscription = this.mediaBreakpointService
      .subscribeMediaBreakpoint()
      .subscribe((change: MediaBreakpointEvent) => {
        console.log('Media Breakpoint: ', change.type);
      })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mediaBreakpointSubscription.unsubscribe();
  }

}
