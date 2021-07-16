import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import useActions from "../hooks/useActions";
import { useMemo } from "react";

export default function Orders() {
  const orders = useOrders();
  // order에 썸네일 자료가 없어서 order의 id값을 가지고
  // prototypes에서 찾아와야함
  const prototypes = usePrototypes();

  const { remove } = useActions();

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
    // orders가 변하면 다시 계산됨
  }, [orders, prototypes]);

  if (orders.lenght === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <div className="order">
        <div className="body">
          {/* oreders를 map돌면서 order를 꺼낸다 */}
          {orders.map((order) => {
            const { id } = order;
            // prototypes의 id와 선택된 아이템의 id가 같은 것을 찾아라
            const prototype = prototypes.find((p) => p.id === id);
            // 꺼낸 오더를 가지고 아이템을 표현한다
            // map돌고 있으니 key가 있어야하고, order에서 나온 id 값을 의미함
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn btn--link" onClick={click}>
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
