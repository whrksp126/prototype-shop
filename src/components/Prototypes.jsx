import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = usePrototypes();
  // 가져온 함수 각각(addToOrder, remove, removeAll)을 구분함
  const { addToOrder } = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          const click = () => {
            // 상태를 변경하는 함수
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              {/* target="_BLANK"는 새창에서 열기 위해서 */}
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div style={{ padding: "25px 0 33px 0" }}>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    style={{
                      objectFit: "contain",
                    }}
                    src={thumbnail}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
