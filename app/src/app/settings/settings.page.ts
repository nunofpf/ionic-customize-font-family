import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public fontFamily = '';

  constructor(private events: Events) { }

  ngOnInit() {
  }

  onFontFamilyChange(ev: CustomEvent) {
    const val = ev.detail.value;
    this.events.publish(
      'update:font-family',
      val
    );
  }

}
