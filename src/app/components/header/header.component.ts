import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaBreakpointEvent } from 'src/app/common/media-event';
import { MediaChangeService } from 'src/app/services/media-change.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private mediaBreakpointSubscription: Subscription;
  deviceXs: boolean = false;
  menuExpanded = false;
  enableAbout = false;
  enableCommunity = false;
  enableContactUs = false;
  enableBlog = false;
  expandMenu = false;

  constructor(private mediaBreakpointService: MediaChangeService) {
    this.mediaBreakpointSubscription = this.mediaBreakpointService
    .subscribeMediaBreakpoint()
    .subscribe((change: MediaBreakpointEvent) => {
      change.type == 'xs' ? this.deviceXs = true : this.deviceXs = false;
    })
  }

  ngOnInit(): void {
    const isAvailable = true;
    this.enableAbout = isAvailable;
    this.enableCommunity = isAvailable;
    this.enableContactUs = isAvailable;
    this.enableBlog = isAvailable;
  }

  menuLayout() {
    this.expandMenu = !this.expandMenu;
  }

  menuItemClicked(event: any) {
    console.log(event);
  }

}
