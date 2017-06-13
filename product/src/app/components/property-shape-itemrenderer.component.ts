import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';

declare namespace window {
  export namespace particlejs {
    export var assets: Object;
  }
}

@Component({
  selector   : 'shape-itemrenderer',
  templateUrl: '../components-html/property-shape-itemrenderer.html'
})

/**
 * シェイプの選択パネル内のアイテムレンダラーです。
 */
export class PropertyShapeItemRenderer implements AfterViewInit {
  @Input() private shapeId: string;

  @ViewChild('myCanvas') myCanvas: any;

  constructor() {
  }

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;

    const stage = new createjs.Stage(canvas);

    // Adobe Animate CCから書きだしたシェイプを使う
    const namespaceObj = <any> window['particlejs']['assets'];
    const cls          = <any> namespaceObj[this.shapeId];

    const shape  = new cls();
    shape.x      = 32;
    shape.y      = 32;
    shape.scaleX = shape.scaleY = 0.5;
    // はい、レンダーする
    stage.addChild(shape);

    // おわり
    stage.update();
  }
}

