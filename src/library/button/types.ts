export interface IButtonDetails {
  name: string;
  width?: string;
  height?: string;
  styles?: string;
  color?: string;
  borderRadius?: string;
  fontSize?: string;
  bg?: string;
  margin?: string;
  disabled?: boolean;
  icon?: any;
  iconHeight?: string;
  iconWidth?: string;
  iconStyles?: string;
  onClickHandler: () => void;
}
