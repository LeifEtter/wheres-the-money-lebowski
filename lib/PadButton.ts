export enum PadButtonType {
  NUMBER,
  DELETE,
  ENTER,
  COMMA,
  FLOAT,
}
export interface PadButton {
  type?: PadButtonType;
  value: string | number;
  double?: boolean;
}

export const PAD_BUTTONS: PadButton[] = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 'DEL', type: PadButtonType.DELETE },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: '.50', type: PadButtonType.FLOAT },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: '.99', type: PadButtonType.FLOAT },
  { value: '.', type: PadButtonType.COMMA },
  { value: 0 },
  { value: 'ENTER', type: PadButtonType.ENTER, double: true },
];
