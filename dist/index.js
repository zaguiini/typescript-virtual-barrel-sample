"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var box_1 = tslib_1.__importStar(require("./components/box"));
var spacer_1 = require("./components/spacer");
var data_json_1 = tslib_1.__importDefault(require("./components/data.json"));
var info_1 = tslib_1.__importDefault(require("./other/info"));
var box_2 = tslib_1.__importStar(require("./other/box"));
var wrongWidthType = {
    width: "not-a-number",
};
console.log({ BoxConst: (0, box_1.BoxConst)() });
console.log({ BoxDefault: (0, box_1.default)() });
console.log({ SpacerConstAliased: (0, spacer_1.SpacerConstAliased)() });
console.log({ SpacerConstForwarded: (0, spacer_1.SpacerConstForwarded)() });
console.log({ dataJson: data_json_1.default });
console.log();
console.log({ InfoObject: info_1.default });
console.log({ BoxConstFromOther: (0, box_2.BoxConstFromOther)() });
console.log({ BoxDefaultFromOther: (0, box_2.default)() });
