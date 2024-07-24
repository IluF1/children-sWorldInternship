import { Box, Modal } from '@mui/material';

import { MyButton } from '@/features/ui/button/button';

import { style } from './components/constants';
import { useGetStateCart } from './components/hooks/useGetStateCart';
import { ICart } from './components/interfaces';
import styles from './view.module.css';
import { CartItem } from '../cart_item/view';

export const Cart = ({ active, setActive }: ICart) => {
  const handleClose = () => setActive(false);
  const { data } = useGetStateCart();

  return (
    <div>
      <Modal open={active} onClose={handleClose} className={styles.modal}>
        <Box sx={style}>
          <div>
            <ul>
              {data?.map(product => (
                <li key={product.product.id}>
                  <CartItem
                    title={product.product.title}
                    price={product.product.price}
                    img={product.product.picture}
                    id={product.product.id}
                  />
                </li>
              ))}
            </ul>
            <div className={styles['cart__amount-total']}>
              <div className={styles.cart__total}>
                <h2 className={styles['cart__total-text']}>Итого</h2>
                <div className={styles['cart__total-price']}></div>
              </div>
              <MyButton children="Оформить заказ" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};