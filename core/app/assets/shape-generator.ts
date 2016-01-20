/**
 * Created by 「asset-shapes.fla」/「generate-assets.jsfl」 on Wed Jan 20 2016
 * !!!!!このコードはJSFLから自動生成されたコードです。修正する場合はご注意ください。!!!!!
 */

export class ShapeGenerator {
  shapeObjects:Object;

  constructor () {
    this.shapeObjects = new Object();
    this.shapeObjects["blur_circle"] = lib.blur_circle
    this.shapeObjects["circle"] = lib.circle
    this.shapeObjects["flower"] = lib.flower
    this.shapeObjects["heart"] = lib.heart
    this.shapeObjects["kirakira"] = lib.kirakira
    this.shapeObjects["kirakira2"] = lib.kirakira2
    this.shapeObjects["reverse_blur_circle"] = lib.reverse_blur_circle
    this.shapeObjects["square"] = lib.square
    this.shapeObjects["star"] = lib.star
    this.shapeObjects["star_10"] = lib.star_10
    this.shapeObjects["triangle"] = lib.triangle

  }

  generateShape(id:string) {
    return new this.shapeObjects[id]();
  }
}