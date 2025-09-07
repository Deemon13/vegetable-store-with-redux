import { useEffect, useState } from "react";

import { useTypedSelector } from "../../redux/hooks/redux";

import styles from "./CartPopupTotal.module.css";

export const CartPopupTotal = () => {
  const selectCart = useTypedSelector((state) => state.cartReducer.products);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function createTotalCart() {
      return selectCart
        ? selectCart.reduce((acc, item) => {
            return acc + item.price * (item.amount || 0);
          }, 0)
        : 0;
    }
    setTotal(createTotalCart());
  }, [selectCart]);

  return (
    <>
      {total > 0 && (
        <div className={styles.total}>
          <span>Total</span> <span>$ {total}</span>
        </div>
      )}
    </>
  );
};
