import { Pipe, PipeTransform } from '@angular/core';
import { Beast } from './beast.model';

@Pipe ({
  name: "displayness",
  pure: false
})

export class DisplaynessPipe implements PipeTransform {
  transform(input: Beast[], desiredDisplayness) {
    var output: Beast[] = [];
    if (desiredDisplayness === "onDisplay") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].onDisplay === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDisplayness === "notOnDisplay") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].onDisplay === false) {
              output.push(input[i]);
            }
          }
          return output;
        } else {
      return input;
    }
  }
 }
