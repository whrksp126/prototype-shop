import { useContext } from "react";
import AppStateContext from "../contexts/appStateContext";

export default function useOrders() {
  const { orders } = useContext(AppStateContext);
  return orders;
}
