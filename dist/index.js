import BoxDefault, { BoxConst } from "./components/box.js";
import { SpacerConstAliased, SpacerConstForwarded } from "./components/spacer.js";
import dataJson from "./components/data.json" assert { type: "json" };
import InfoObject from "./other/info.js";
import BoxDefaultFromOther, { BoxConstFromOther } from "./other/box.js";
const wrongWidthType = {
    width: "not-a-number",
};
console.log({ BoxConst: BoxConst() });
console.log({ BoxDefault: BoxDefault() });
console.log({ SpacerConstAliased: SpacerConstAliased() });
console.log({ SpacerConstForwarded: SpacerConstForwarded() });
console.log({ dataJson: dataJson });
console.log();
console.log({ InfoObject });
console.log({ BoxConstFromOther: BoxConstFromOther() });
console.log({ BoxDefaultFromOther: BoxDefaultFromOther() });
