import {CartButton} from '../../shared/Ui/CounterProductButton/CounterProductButton';

import {updateCart} from '@/features/Api/Api';
import {Title, formatPrice, trash, useAppDispatch, useAppSelector} from '@/shared';

import styles from './CartItem.module.css';

interface ICartItem {
    title: string;
    img: string;
    price: number;
    id: string;
}

export const CartItem = ({title, img, price, id}: ICartItem) => {
    const products = useAppSelector((state) => state.cart.cart);
    const dispatch = useAppDispatch();

    const count = products.find((item) => item.product.id === id)?.quantity || 0;

    const removeItemFromCart = () => {
        dispatch(updateCart(products.filter((item) => item.product.id !== id)));
    };

    return (
        <div className={styles['cart-item']}>
            <div className={styles.content}>
                <div className={styles['cart-item__img-block']}>
                    <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className={styles['cart-item__img']}
                    />
                </div>
                <h1 className={styles['cart-item__title']}>
                    <a href={`/product/${id}`}>{title}</a>
                </h1>
                <div className={styles['cart-item__btn']}>
                    <CartButton productId={Number(id)} />
                </div>

                <div className={styles['cart-item__price']}>
                    {count > 1 ? (
                        <Title style="name">{formatPrice(price) + ' за шт.'}</Title>
                    ) : null}
                    {count === 0 ? (
                        <button onClick={removeItemFromCart}>
                            <Title style="red">
                                <img src={trash} alt="trash" className={styles.trash_img} />
                                Удалить
                            </Title>
                        </button>
                    ) : (
                        <Title style="price">{formatPrice(price * count)}</Title>
                    )}
                </div>
            </div>
        </div>
    );
};
