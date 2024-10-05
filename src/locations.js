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
        material: Color.RED.withAlpha(0.4),
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
      material: Color.RED.withAlpha(0.4),
    }),
});

const polygonCoordinatesPeru = [
    Cartesian3.fromDegrees(-79.924710, -6.103525),
    Cartesian3.fromDegrees(-79.924284, -6.104134),
    Cartesian3.fromDegrees(-79.922369, -6.102769),
    Cartesian3.fromDegrees(-79.922377, -6.101845),
];

export const polygonEntityPeru = new Entity({
    polygon: new PolygonGraphics({
      hierarchy: polygonCoordinatesPeru,
      material: Color.RED.withAlpha(0.4),
    }),
});

const polygonCoordinatesThailand = [
    Cartesian3.fromDegrees(101.328928, 15.135729),
    Cartesian3.fromDegrees(101.330469, 15.135975),
    Cartesian3.fromDegrees(101.330984, 15.134628),
    Cartesian3.fromDegrees(101.334403, 15.132912),
    Cartesian3.fromDegrees(101.333488, 15.132166),
    Cartesian3.fromDegrees(101.331438, 15.133135),
    Cartesian3.fromDegrees(101.331120, 15.133216),
    Cartesian3.fromDegrees(101.330782, 15.133379),
    Cartesian3.fromDegrees(101.328576, 15.133373),
];

export const polygonEntityThailand = new Entity({
    polygon: new PolygonGraphics({
      hierarchy: polygonCoordinatesThailand,
      material: Color.RED.withAlpha(0.4),
    }),
});