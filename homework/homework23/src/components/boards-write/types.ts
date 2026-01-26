export interface BoardAddressInput {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IBoardWriteInputChange {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: BoardAddressInput;
  images?: string[];
}

export interface IBoardWriteData {
  isEdit: boolean;
}
