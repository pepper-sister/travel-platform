"use client";

import { firebaseApp } from "@/commons/libraries/firebase";
import { collection, DocumentData, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function MyApisPage() {
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

  return (
    <>
      <div>목록페이지</div>

      {board.map((el) => {
        return (
          <div key={el.writer} className="row__sort gap__8">
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
          </div>
        );
      })}
    </>
  );
}
