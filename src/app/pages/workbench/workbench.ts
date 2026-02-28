import { Component, signal } from '@angular/core';
import { MyContribution } from "../../contributions/my-contribution/my-contribution";
import { Typografie } from "../../shared/typografie/typografie";

@Component({
  selector: 'app-workbench',
  imports: [MyContribution, Typografie],
  templateUrl: './workbench.html',
  styleUrl: './workbench.scss',
})
export class Workbench {
  isSidebarOpen = signal(true);

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }
}
