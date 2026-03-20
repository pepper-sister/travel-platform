export interface IPointProps {
  isChargeModal: boolean;
  setIsChargeModal: (value: boolean) => void;
  handleCancel: () => void;
}

export interface IUsePointProps {
  setIsChargeModal: (value: boolean) => void;
}
