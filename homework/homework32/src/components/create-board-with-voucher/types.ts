import { Dispatch, SetStateAction } from "react";

export interface IFormProps {
  form: {
    writer: string;
    password: string;
    title: string;
    contents: string;
    boardAddress: {
      zipcode: string;
      address: string;
      addressDetail: string;
    };
    youtubeUrl: string;
    images: string;

    name: string;
    remarks: string;
    price: number | undefined;
    tags: string[];
    travelproductAddress: {
      zipcode: string;
      address: string;
      addressDetail: string;
      lat: number | undefined;
      lng: number | undefined;
    };
  };
}

export interface ISetFormProps {
  setForm: Dispatch<SetStateAction<IFormProps["form"]>>;
}
