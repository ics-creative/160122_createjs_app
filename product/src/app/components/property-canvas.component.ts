import { LocaleData } from "../i18n/locale-data";
import { Component, Input } from "@angular/core";
import { InputRangeComponent } from "./input-range.component";

"use strict";

@Component({
  selector:"canvas-property-panel",
  templateUrl:"../components-html/property-canvas.html"
})

export class PropertyCanvasPanel {
  @Input() private drawingData:particlejs.DrawingData;


  constructor(private localeData:LocaleData) {
  }
}