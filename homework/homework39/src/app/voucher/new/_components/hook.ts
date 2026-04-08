import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
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

  const searchParams = useSearchParams();
  useEffect(() => {
    const zipcode = searchParams.get("zipcode");
    const address = searchParams.get("address");

    if (zipcode) methods.setValue("travelproductAddress.zipcode", zipcode);
    if (address) methods.setValue("travelproductAddress.address", address);
  }, [searchParams, methods]);

  return { methods };
};
