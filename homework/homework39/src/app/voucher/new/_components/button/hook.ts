import { CreateTravelproductDocument } from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client/react";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export const useButton = () => {
  const { watch } = useFormContext();
  const name = watch("name");
  const remarks = watch("remarks");
  const contents = watch("contents");
  const price = watch("price");
  const address = watch("travelproductAddress.address") && watch("travelproductAddress.addressDetail");
  const images = watch("images[0]");

  const isTest = process.env.NODE_ENV === "test";
  const isActive = isTest ? name && remarks && price : name && remarks && contents && price && address && images;

  const router = useRouter();
  const [createTravelProduct] = useMutation(CreateTravelproductDocument);

  const errorModal = (error: unknown) => {
    Modal.error({
      title: "에러가 발생하였습니다. 다시 시도해 주세요.",
      content: String(error),
    });
  };

  const onClickSubmit = async (data: any) => {
    try {
      const result = await createTravelProduct({
        variables: {
          createTravelproductInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price) ?? 0,
            tags: data.tags,
            travelproductAddress: {
              ...data.travelproductAddress,
              lat: Number(data.travelproductAddress.lat) ?? 0,
              lng: Number(data.travelproductAddress.lng) ?? 0,
            },
            images: [data.images],
          },
        },
      });

      router.push(`/voucher/${result.data?.createTravelproduct._id}`);
    } catch (error) {
      errorModal(error);
    }
  };

  return { isActive, onClickSubmit };
};
