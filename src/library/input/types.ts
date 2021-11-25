export interface IInputDetails {
  value: string;
  placeHolder: string;
  type?: string;
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  icon?: any;
  iconHeight?: string;
  iconWidth?: string;
  iconStyles?: string;
  styles?: string;
  errorText?: string;
  onChangeHandler: (e: any) => void;
  validation?: (value: string) => boolean;
}
