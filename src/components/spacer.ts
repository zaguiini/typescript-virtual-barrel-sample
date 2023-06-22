const SpacerConstForwarded = () => "SpacerConstForwarded";
const SpacerConst = () => "SpacerConstAliased";

export { SpacerConst as SpacerConstAliased, SpacerConstForwarded };

export type SpacerProps = {
  width: number;
};
