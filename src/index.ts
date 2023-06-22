import {
  BoxConst,
  BoxDefault,
  SpacerConstAliased,
  SpacerConstForwarded,
  SpacerProps,
  dataJson,
} from "./components/index.js";

import {
  InfoObject,
  BoxConstFromOther,
  BoxDefaultFromOther,
} from "./other/index.js";

const wrongWidthType: SpacerProps = {
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
