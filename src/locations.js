import { Cartesian3, Color, Entity, PolygonGraphics, } from "cesium";

const polygonCoordinatesAitAmira = [
    Cartesian3.fromDegrees(-9.433781, 30.143166),
    Cartesian3.fromDegrees(-9.430737, 30.143045),
    Cartesian3.fromDegrees(-9.430982, 30.138655),
    Cartesian3.fromDegrees(-9.432051, 30.138715),
    Cartesian3.fromDegrees(-9.432051, 30.139097),
    Cartesian3.fromDegrees(-9.434050, 30.139248),
  ];

  export const polygonEntityAitAmira = new Entity({
    polygon: new PolygonGraphics({
      hierarchy: polygonCoordinatesAitAmira,
      material: Color.RED.withAlpha(0.5),
    }),
  });

  const polygonCoordinatesFerkes = [
    Cartesian3.fromDegrees(-5.131704, 9.641149),
    Cartesian3.fromDegrees(-5.130024, 9.640898),
    Cartesian3.fromDegrees(-5.130487, 9.639540),
    Cartesian3.fromDegrees(-5.130707, 9.638763),
    Cartesian3.fromDegrees(-5.131032, 9.638845),
    Cartesian3.fromDegrees(-5.131124, 9.638262),
    Cartesian3.fromDegrees(-5.131298, 9.637966),
    Cartesian3.fromDegrees(-5.131960, 9.638064),
    Cartesian3.fromDegrees(-5.132351, 9.638163),
    Cartesian3.fromDegrees(-5.132494, 9.638589),
    Cartesian3.fromDegrees(-5.132244, 9.638811),
    Cartesian3.fromDegrees(-5.132204, 9.639039),
    Cartesian3.fromDegrees(-5.132162, 9.639396),
    Cartesian3.fromDegrees(-5.132140, 9.639418),
  ];

  export const polygonEntityFerkes = new Entity({
    polygon: new PolygonGraphics({
      hierarchy: polygonCoordinatesFerkes,
      material: Color.RED.withAlpha(0.5),
    }),
  });
