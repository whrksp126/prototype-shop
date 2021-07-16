import { useContext } from "react";
import AppStateContext from "../contexts/appStateContext";

export default function usePrototypes() {
  // prototypes라는 데이터를 context를 통해서 가지고 올 수 있게함
  // prototypes가 value 전체이기에 오브젝트 안에 있는 prototypes만 꺼내오게 {prototypes}로 작성
  const { prototypes } = useContext(AppStateContext);
  return prototypes;
}
