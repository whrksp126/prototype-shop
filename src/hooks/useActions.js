import { useContext } from "react";
import AppStateContext from "../contexts/appStateContext";

export default function useActions() {
  // 상태를 변경하는 함수를 받아서 리턴함
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);
  return { addToOrder, remove, removeAll };
}
