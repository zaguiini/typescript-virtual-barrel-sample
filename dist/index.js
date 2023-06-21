"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var box_1 = __importStar(require("./components/box"));
var spacer_1 = require("./components/spacer");
var data_json_1 = __importDefault(require("./components/data.json"));
var info_1 = __importDefault(require("./other/info"));
var box_2 = __importStar(require("./other/box"));
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
