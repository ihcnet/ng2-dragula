/* tslint:disable */
import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
var ExampleAComponent = (function () {
    function ExampleAComponent() {
    }
    return ExampleAComponent;
}());
ExampleAComponent = __decorate([
    Component({
        selector: 'example-a',
        templateUrl: './templates/example-a.html'
    })
], ExampleAComponent);
export { ExampleAComponent };
var ExampleBComponent = (function () {
    function ExampleBComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        dragulaService.drag.subscribe(function (value) {
            // console.log(`drag: ${value[0]}`); // value[0] will always be bag name
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            // console.log(`drop: ${value[0]}`);
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            // console.log(`over: ${value[0]}`);
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            // console.log(`out: ${value[0]}`);
            _this.onOut(value.slice(1));
        });
    }
    ExampleBComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    ExampleBComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    };
    ExampleBComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    ExampleBComponent.prototype.onDrag = function (args) {
        var e = args[0];
        this.removeClass(e, 'ex-moved');
    };
    ExampleBComponent.prototype.onDrop = function (args) {
        var e = args[0];
        this.addClass(e, 'ex-moved');
    };
    ExampleBComponent.prototype.onOver = function (args) {
        var el = args[0];
        this.addClass(el, 'ex-over');
    };
    ExampleBComponent.prototype.onOut = function (args) {
        var el = args[0];
        this.removeClass(el, 'ex-over');
    };
    return ExampleBComponent;
}());
ExampleBComponent = __decorate([
    Component({
        selector: 'example-b',
        templateUrl: './templates/example-b.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], ExampleBComponent);
export { ExampleBComponent };
var AnotherExampleComponent = (function () {
    function AnotherExampleComponent(dragulaService) {
        this.dragulaService = dragulaService;
        dragulaService.setOptions('third-bag', {
            removeOnSpill: true
        });
    }
    return AnotherExampleComponent;
}());
AnotherExampleComponent = __decorate([
    Component({
        selector: 'another-example',
        templateUrl: './templates/another-example.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], AnotherExampleComponent);
export { AnotherExampleComponent };
var SuchExampleComponent = (function () {
    function SuchExampleComponent(dragulaService) {
        this.dragulaService = dragulaService;
        dragulaService.setOptions('fourth-bag', {
            revertOnSpill: true
        });
    }
    return SuchExampleComponent;
}());
SuchExampleComponent = __decorate([
    Component({
        selector: 'such-example',
        templateUrl: './templates/such-example.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], SuchExampleComponent);
export { SuchExampleComponent };
var VeryExampleComponent = (function () {
    function VeryExampleComponent(dragulaService) {
        this.dragulaService = dragulaService;
        dragulaService.setOptions('fifth-bag', {
            copy: true
        });
    }
    return VeryExampleComponent;
}());
VeryExampleComponent = __decorate([
    Component({
        selector: 'very-example',
        templateUrl: './templates/very-example.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], VeryExampleComponent);
export { VeryExampleComponent };
var MuchExampleComponent = (function () {
    function MuchExampleComponent(dragulaService) {
        this.dragulaService = dragulaService;
        dragulaService.setOptions('sixth-bag', {
            moves: function (el, container, handle) {
                console.log(el, container);
                return handle.className === 'handle';
            }
        });
    }
    return MuchExampleComponent;
}());
MuchExampleComponent = __decorate([
    Component({
        selector: 'much-example',
        templateUrl: './templates/much-example.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], MuchExampleComponent);
export { MuchExampleComponent };
var WowExampleComponent = (function () {
    function WowExampleComponent() {
        this.clicked = {
            'one': false,
            'two': false,
            'three': false,
            'four': false,
            'five': false,
            'six': false,
            'seven': false
        };
    }
    WowExampleComponent.prototype.onclick = function (key) {
        var _this = this;
        this.clicked[key] = true;
        setTimeout(function () {
            _this.clicked[key] = false;
        }, 2000);
    };
    return WowExampleComponent;
}());
WowExampleComponent = __decorate([
    Component({
        selector: 'wow-example',
        templateUrl: './templates/wow-example.html'
    })
], WowExampleComponent);
export { WowExampleComponent };
var RepeatExampleComponent = (function () {
    function RepeatExampleComponent(dragulaService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    RepeatExampleComponent.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
        console.log('onDropModel:');
        console.log(el);
        console.log(target);
        console.log(source);
    };
    RepeatExampleComponent.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        console.log('onRemoveModel:');
        console.log(el);
        console.log(source);
    };
    return RepeatExampleComponent;
}());
RepeatExampleComponent = __decorate([
    Component({
        selector: 'repeat-example',
        templateUrl: './templates/repeat-example.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], RepeatExampleComponent);
export { RepeatExampleComponent };
var NestedRepeatExampleComponent = (function () {
    function NestedRepeatExampleComponent() {
        this.groups = [
            {
                name: 'Group A',
                items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
            },
            {
                name: 'Group B',
                items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
            }
        ];
    }
    return NestedRepeatExampleComponent;
}());
NestedRepeatExampleComponent = __decorate([
    Component({
        selector: 'nested-repeat-example',
        templateUrl: './templates/nested-repeat-example.html'
    })
], NestedRepeatExampleComponent);
export { NestedRepeatExampleComponent };
var TableExampleComponent = (function () {
    function TableExampleComponent(dragulaService) {
        this.dragulaService = dragulaService;
        dragulaService.setOptions('table-bag', {
            revertOnSpill: true
        });
    }
    return TableExampleComponent;
}());
TableExampleComponent = __decorate([
    Component({
        selector: 'table-example',
        templateUrl: './templates/table-example.html'
    }),
    __metadata("design:paramtypes", [DragulaService])
], TableExampleComponent);
export { TableExampleComponent };
var TableChildExampleComponent = (function () {
    function TableChildExampleComponent() {
    }
    return TableChildExampleComponent;
}());
TableChildExampleComponent = __decorate([
    Component({
        selector: 'table-example-child',
        template: "\n        <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th>Name</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><div class=\"bars\"></div></td>\n                        <td>Tester</td>\n                        <td>Active</td>\n                    </tr>\n                    <tr>\n                        <td><div class=\"bars\"></div></td>\n                        <td>James</td>\n                        <td>Active</td>\n                    </tr>\n                    <tr>\n                        <td><div class=\"bars\"></div></td>\n                        <td>Alex</td>\n                        <td>Active</td>\n                    </tr>\n                </tbody>\n            </table>"
    }),
    __metadata("design:paramtypes", [])
], TableChildExampleComponent);
export { TableChildExampleComponent };
export var EXAMPLES = [
    ExampleAComponent,
    ExampleBComponent,
    AnotherExampleComponent,
    SuchExampleComponent,
    VeryExampleComponent,
    MuchExampleComponent,
    WowExampleComponent,
    RepeatExampleComponent,
    NestedRepeatExampleComponent,
    TableExampleComponent,
    TableChildExampleComponent
];
//# sourceMappingURL=/Users/jclark/Documents/src/gas/ng2-dragula/demo/src/app/examples.js.map