<template>
  <div id="container"></div>
</template>
<script>
// window._AMapSecurityConfig = {
//   securityJsCode: "3374c77be9bdb7411f688c3954181e58",
// };
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "GaoDe",
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "2749d6a3c6d1a17abebcf247217832a8", // 申请好的Web端开发者Key，首次调用 load 时必填
        // version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        // plugins: ["AMap.Scale", "AMap.Geolocation"],
        plugins: [],
      })
        .then((AMap) => {
          console.log(this);
          this.map = new AMap.Map("container", {
            //设置地图容器id
            pitch: 45,
            viewMode: "3D", //是否为3D地图模式
            // zooms: [3,30],
            zoom: 18, //初始化地图级别
            center: [113.405494, 23.048265], //初始化地图中心点位置
            scrollWheel: true,
            mapStyle: "amap://styles/grey", //设置地图的显示样式
          });
          // this.map.addControl(new AMap.Scale());
          // this.map.addControl(new AMap.Geolocation());

          // 矩形
          //   new AMap.Rectangle({
          //     map: this.map,
          //     bounds: new AMap.Bounds(
          //       [113.405494, 23.048265],
          //       [113.405694, 23.048865]
          //     ),
          //     strokeColor: "#FF33FF",
          //     strokeOpacity: 0.2,
          //     strokeWeight: 3,
          //     fillColor: "#1791fc",
          //     fillOpacity: 0.35,
          //   });

          // 四棱柱
          var object3Dlayer = new AMap.Object3DLayer();
          this.map.add(object3Dlayer);
          var rectangle = new AMap.Object3D.Prism({
            path: [
              new AMap.LngLat(113.405494, 23.048265),
              new AMap.LngLat(113.405494, 23.048365),
              new AMap.LngLat(113.405594, 23.048365),
              new AMap.LngLat(113.405594, 23.048265),
            ],
            height: 1000,
            color: "#FF0000",
            opacity: 0.5,
          });
          object3Dlayer.add(rectangle); //添加

          // 圆形
          // let center = new AMap.LngLat(113.405494, 23.048265);
          // let circle = new AMap.Circle({
          //   center: center, //圆心
          //   radius: 3, //半径
          //   borderWeight: 3,
          //   strokeWeight: 0,
          //   fillOpacity: 0.4,
          //   fillColor: "#1791fc",
          //   zIndex: 50,
          // });
          // this.map.add(circle);
          let centers = [];
          let circles = [];
          for (let i = 0; i < 100; i++) {
            centers.push(new AMap.LngLat(113.405494 + i * 0.00003, 23.048265));
            circles.push(
              new AMap.Circle({
                center: centers[i], //圆心
                radius: 3, //半径
                borderWeight: 3,
                strokeWeight: 0,
                // fillOpacity: 0.4,
                fillColor: "#1791fc",
                zIndex: 50,
              })
            );
            this.map.add(circles[i]);
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
  beforeMount() {
    window._AMapSecurityConfig = {
      securityJsCode: "3374c77be9bdb7411f688c3954181e58",
    };
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="scss">
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
/* 隐藏高德logo */
.amap-logo {
  opacity: 0 !important;
}
/* 隐藏高德版权信息 */
.amap-copyright {
  opacity: 0 !important;
}
/* 隐藏v2.0高德背景颜色 */
.amap-container {
  background: none !important;
}
</style>