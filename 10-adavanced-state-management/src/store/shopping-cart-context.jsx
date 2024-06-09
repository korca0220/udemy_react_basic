import { createContext } from "react";

/// 기본값을 설정해 놓으면 자동 완성 기능을 사용할 수 있음. 타입 체크
export const CartContext = createContext({
  items: [],
});
