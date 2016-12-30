define('pages/select.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueSelect = require('node_modules/pzvue-select/dist/pz-select');
  
  var _pzvueSelect2 = _interopRequireDefault(_pzvueSelect);
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  exports['default'] = {
      data: function data() {
          return {
              defvalue: 3,
              form: {
                  name: '',
                  select1: ''
              },
              options: [{
                  text: "不限",
                  value: -1
              }, {
                  text: "高中",
                  value: 0
              }, {
                  text: "中专",
                  value: 1
              }, {
                  text: "大专",
                  value: 2
              }, {
                  text: "学士",
                  value: 3,
                  'default': true
              }, {
                  text: "硕士",
                  value: 4
              }],
              options1: [{
                  text: '<i class="icon-star"></i>',
                  value: 0
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i>',
                  value: 1
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                  value: 2
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                  value: 3
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                  value: 4,
                  'default': true
              }]
          };
      },
      components: {
          "pz-select": _pzvueSelect2['default'],
          "pz-button": _pzvueButton2['default']
      },
      methods: {
          change: function change(val) {
              document.getElementById("change").innerHTML = '您选中的值为：' + val;
              console.log("已执行");
          },
          change1: function change1(val) {
              document.getElementById("change1").innerHTML = '您选中的值为：' + val;
              console.log("已执行");
          },
          changeValue: function changeValue() {
              console.log("456sd");
              this.defvalue = Date.parse(new Date()) / 1000 % 4;
          }
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div>\n    <h2>普通样式</h2>\n    <pz-select :options=\"options\" v-model=\"form.name\" placeholder=\"不限\">默认</pz-select>\n    <br>\n    <br> value={{form.name}}\n\n    <h2>自定义样式</h2>\n    <pz-select :options=\"options1\" v-model=\"form.select1\">默认</pz-select>\n    <br>\n    <br> value={{form.select1}}\n    <h2>带change事件</h2>\n    <pz-select :options=\"options1\" :change=\"change\" :default=\"3\">默认</pz-select>\n    <br><br>\n    <p id=\"change\"></p>\n    <h2>带change事件并动态改变选中的值</h2>\n    <pz-select :options=\"options1\" :change=\"change1\" :default=\"defvalue\">默认</pz-select>\n    <br><br>\n    <pz-button @click.native=\"changeValue\">改变value(每秒点一次)</pz-button>\n    <p id=\"change1\"></p>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/select.js.map
  

});
