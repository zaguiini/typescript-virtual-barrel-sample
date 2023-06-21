import {
  BoxConst,
  BoxDefault,
  SpacerConstAliased,
  SpacerConstForwarded,
  SpacerProps,
  dataJson,
} from "./components";

import { InfoObject, BoxConstFromOther, BoxDefaultFromOther } from "./other";

const wrongWidthType: SpacerProps = {
  width: "not-a-number",
};

console.log({ BoxConst: BoxConst() });
console.log({ BoxDefault: BoxDefault() });
console.log({ SpacerConstAliased: SpacerConstAliased() });
console.log({ SpacerConstForwarded: SpacerConstForwarded() });
console.log({ dataJson });

console.log();

console.log({ InfoObject });
console.log({ BoxConstFromOther: BoxConstFromOther() });
console.log({ BoxDefaultFromOther: BoxDefaultFromOther() });
