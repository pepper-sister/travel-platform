import { firebaseApp } from "@/commons/libraries/firebase";
import { collection, DocumentData, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useMyApis = () => {
  const [board, setBoard] = useState<DocumentData[]>([]);

  const FetchBoards = async () => {
    const boards = collection(getFirestore(firebaseApp), "boards");
    const result = await getDocs(boards);
    const data = result.docs.map((el) => el.data());
    setBoard(data);
  };

  useEffect(() => {
    FetchBoards();
  });

  return { board };
};
