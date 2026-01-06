import { firebaseApp } from "@/commons/libraries/firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { ChangeEvent, useState } from "react";

export const useMyApisWrite = () => {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onChangeInputs = async (event: ChangeEvent<HTMLInputElement>) => {
    const boards = collection(getFirestore(firebaseApp), "boards");
    const result = await getDocs(boards);
    const data = result.docs.map((el) => el.data());

    const userInputs = {
      ...inputs,
      number: data.length + 1,
      [event.target.id]: event.target.value,
    };

    setInputs(userInputs);
  };

  const onClickSubmit = async () => {
    const boards = collection(getFirestore(firebaseApp), "boards");
    await addDoc(boards, inputs);
  };

  return { onChangeInputs, onClickSubmit };
};
