webpackJsonp([0],{"+5UP":function(t,e){},"/c0D":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{"justify-space-between":""}},[a("h1",{staticClass:"my-3 pl-3"},[t._v("Логин пользователя в игре")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-spacer"),t._v(" "),a("v-spacer"),t._v(" "),a("v-switch",{attrs:{label:"Бот включен"},model:{value:t.runBot,callback:function(e){t.runBot=e},expression:"runBot"}})],1),t._v(" "),a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически получать и отправлять подарки в игре!"},model:{value:t.receiveGifts,callback:function(e){t.receiveGifts=e},expression:"receiveGifts"}})],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-text-field",{attrs:{label:"id получателя"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.gifts,label:"Выбор подарка"}})],1)],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-text-field",{attrs:{label:"id получателя"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.gifts,label:"Выбор подарка"}})],1)],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-text-field",{attrs:{label:"id получателя"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.gifts,label:"Выбор подарка"}})],1)],1),t._v(" "),a("v-card",[a("v-card-text",{staticClass:"font-weight-bold font-italic"},[t._v("Примечание: убедитесь что ваш уровень достаточный для отправки выбранных подарков, в противном случае подарки не будут отправлены!")])],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически отправлять проклятия в игре!"},model:{value:t.sendCurses,callback:function(e){t.sendCurses=e},expression:"sendCurses"}})],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-text-field",{attrs:{label:"id получателя"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.gifts,label:"Выбор проклятия"}})],1)],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-text-field",{attrs:{label:"id получателя"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.gifts,label:"Выбор проклятия"}})],1)],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-text-field",{attrs:{label:"id получателя"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.gifts,label:"Выбор проклятия"}})],1)],1),t._v(" "),a("v-card",[a("v-card-text",{staticClass:"font-weight-bold font-italic"},[t._v("Примечание: убедитесь что ваш уровень достаточный для отправки выбранных проклятий, в противном случае проклятия не будут отправлены!")])],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически копать шахту!"},model:{value:t.digMine,callback:function(e){t.digMine=e},expression:"digMine"}})],1),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("p",{staticClass:"pt-3 headline"},[t._v("Добывать кристаллы если шанс выше:")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:"","d-flex":""}},[a("v-select",{attrs:{items:t.chanceToMine,label:"Шанс"}})],1)],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически ходить на арену!"},model:{value:t.goToArena,callback:function(e){t.goToArena=e},expression:"goToArena"}})],1),t._v(" "),a("v-radio-group",{staticClass:"pl-5"},[a("v-radio",{attrs:{label:"Ровня",value:"sameLevel"}}),t._v(" "),a("v-radio",{attrs:{label:"Выше по уровню",value:"higherLevel"}}),t._v(" "),a("v-radio",{attrs:{label:"Ниже по уровню",value:"lowerLevel"}})],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически ходить в подземелье!"},model:{value:t.goToDungeon,callback:function(e){t.goToDungeon=e},expression:"goToDungeon"}})],1),t._v(" "),a("v-radio-group",{staticClass:"pl-5",model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"С группой",value:"dungeonWithGroup"}}),t._v(" "),a("v-radio",{attrs:{label:"Ты командир",value:"dungeonYouCaptain"}})],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически ходить в плавание!"},model:{value:t.goToSail,callback:function(e){t.goToSail=e},expression:"goToSail"}})],1),t._v(" "),a("v-radio-group",{staticClass:"pl-5",model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"С группой",value:"sailWithGroup"}}),t._v(" "),a("v-radio",{attrs:{label:"Ты командир",value:"sailYouCaptain"}})],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-expansion-panel",t._l(t.items,function(e,s){return a("v-expansion-panel-content",{key:s,attrs:{"expand-icon":"mdi-menu-down"}},[a("div",{staticClass:"display-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),t._v(" "),a("v-layout",[a("v-checkbox",{staticClass:"pl-5",attrs:{label:"Автоматически ходить в портал!"},model:{value:t.goToPortal,callback:function(e){t.goToPortal=e},expression:"goToPortal"}})],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var c={components:{Gifts:a("VU/8")({data:function(){return{receiveGifts:!0,runBot:!0,items:[{title:"Отправка и получение подарков"}],gifts:["Коробочка - с 1 уровня","Цветочек - с 2 уровня","Чаша здоровья - с 5 уровня","Энергетический напиток - с 5 уровня","Валентинка - с 5 уровня","Сундук - с 6 уровня","Перчатка силы - с 7 уровня","Серебряный капкан - с 8 уровня","Книга знаний - с 8 уровня","Кольцо щедрости - с 8 уровня","Запечатанный конверт - с 10 уровня","Братское знамя - с 10 уровня","Осиновый кол - с 10 уровня","Заколдованные перья - с 11 уровня","Узел достатка - с 11 уровня","Волшебная лилия - с 12 уровня","Храброе сердце - с 13 уровня","Талисман кристаллов - с 14 уровня","Корона - с 14 уровня","Порошок удачи - с 15 уровня","Плащ-невидимка - с 15 уровня","Статуэтка защиты - с 16 уровня","Яд Медузы - с 17 уровня","Магическая энергия - с 18 уровня","Корень драцены - с 20 уровня","Сияние Магмы - с 27 уровня"]}}},s,!1,function(t){a("Ltxo")},"data-v-ebf4ddb8",null).exports,Curses:a("VU/8")({data:function(){return{sendCurses:!0,items:[{title:"Отправка проклятий"}],gifts:["Тотем неудачи - с 1 уровня","Когти летучей мыши - с 1 уровня","Жаба - с 2 уровня","Росток аконита - с 5 уровня","Запутаные тропы - с 5 уровня","Демонское копыто - с 6 уровня","Гнилой пень - с 6 уровня","Проклятый топор - с 7 уровня","Рваный башмак - с 7 уровня","Отравленный пирог - с 8 уровня","Зловещая черепушка - с 9 уровня","Останки зверя - с 10 уровня","Стрела безмолвия - с 11 уровня","Когти стервятника - с 11 уровня","Смертельный капкан - с 11 уровня","Дьявольские ключи - с 12 уровня","Чертовский рог - с 13 уровня","Рот дикой свиньи - с 13 уровня","Ножницы судьбы - с 13 уровня","Метла бедствия - с 14 уровня","Кровавый меч - с 15 уровня","Чертов глаз - с 16 уровня","Монеты мертвеца - с 17 уровня","Ведьмовской мешочек - с 18 уровня","Змеиный яд - с 19 уровня","Голова чудовища - с 20 уровня","Жертва дракона - с 21 уровня"]}}},l,!1,null,null,null).exports,Mine:a("VU/8")({data:function(){return{digMine:!0,items:[{title:"Шахта"}],chanceToMine:[15,20,25,30,35,40,45,50]}}},n,!1,function(t){a("ADfL")},"data-v-67b7f75c",null).exports,Arena:a("VU/8")({data:function(){return{goToArena:!0,items:[{title:"Арена"}]}}},r,!1,function(t){a("+5UP")},"data-v-2b597ae4",null).exports,Dungeon:a("VU/8")({data:function(){return{goToDungeon:!0,items:[{title:"Подземелье"}],radioGroup:"dungeonWithGroup"}}},i,!1,function(t){a("4l7d")},"data-v-c1666582",null).exports,Sail:a("VU/8")({data:function(){return{goToSail:!0,items:[{title:"Плавание"}],radioGroup:"sailWithGroup"}}},o,!1,function(t){a("W0gj")},"data-v-88723b82",null).exports,Portal:a("VU/8")({data:function(){return{goToPortal:!0,items:[{title:"Портал"}]}}},v,!1,function(t){a("YzKk")},"data-v-b3424132",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Gifts"),this._v(" "),e("Curses"),this._v(" "),e("Mine"),this._v(" "),e("Dungeon"),this._v(" "),e("Sail"),this._v(" "),e("Portal")],1)},staticRenderFns:[]},d=a("VU/8")(c,u,!1,null,null,null);e.default=d.exports},"4l7d":function(t,e){},ADfL:function(t,e){},Ltxo:function(t,e){},W0gj:function(t,e){},YzKk:function(t,e){}});
//# sourceMappingURL=0.d00bb899e01577abcdca.js.map