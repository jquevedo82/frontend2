import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tabs = ['Home', 'Uno', 'Dos', 'Tres'];
  selected = new FormControl(0);

  sigTabs(index: number) {
    this.selected.setValue(index + 1);
  }
  antTabs(index: number) {
    this.selected.setValue(index - 1);
  }
}
