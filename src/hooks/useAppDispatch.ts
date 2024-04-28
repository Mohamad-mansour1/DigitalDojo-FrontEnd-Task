import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export function useAppDispatch() {
  return useDispatch<Dispatch<any>>();
}
