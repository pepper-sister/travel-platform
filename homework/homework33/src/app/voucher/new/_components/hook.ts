import { useForm } from "react-hook-form";

export const useCreateVoucher = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      remarks: "",
      contents: "",
      price: undefined,
      tags: [],
      youtubeUrl: "",
      travelproductAddress: {
        zipcode: "",
        address: "",
        addressDetail: "",
        lat: undefined,
        lng: undefined,
      },
      images: [],
    },
  });

  return { methods };
};
