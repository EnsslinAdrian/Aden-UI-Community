import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Typografie } from "../../shared/typografie/typografie";
import { Landing } from "./landing/landing";
import { Workflow } from "./workflow/workflow";
import { Requirements } from "./requirements/requirements";
import { Submission } from "./submission/submission";

@Component({
  selector: 'app-home',
  imports: [RouterLink, Typografie, Landing, Workflow, Requirements, Submission],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
