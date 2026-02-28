import { Component } from '@angular/core';
import { Typografie } from "../../../shared/typografie/typografie";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [Typografie, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
