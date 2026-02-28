import { Component } from '@angular/core';
import { Typografie } from "../../../shared/typografie/typografie";
import { StepOne } from "./step-one/step-one";
import { StepTwo } from "./step-two/step-two";
import { StepThree } from "./step-three/step-three";
import { StepFor } from "./step-for/step-for";

@Component({
  selector: 'app-workflow',
  imports: [Typografie, StepOne, StepTwo, StepThree, StepFor],
  templateUrl: './workflow.html',
  styleUrl: './workflow.scss',
})
export class Workflow {

}
