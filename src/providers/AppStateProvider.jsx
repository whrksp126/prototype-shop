// 컴퍼넌트 (함수형태)

import { useCallback, useState } from "react";
import AppStateContext from "../contexts/appStateContext";

// props로 기본인 children을 사용
const AppStateProvider = ({ children }) => {
  // 물건들의 상태
  const [prototypes] = useState([
    {
      id: "pp-01",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-02",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-03",
      title: "macOS Folder Concept",
      artist: "Dominik Kandravý",
      desc: "Folder concept prototype by Dominik Kandravý.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",
      price: 30,
      pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
    },
    {
      id: "pp-04",
      title: "Translator",
      artist: "Tony Kim",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",
      price: 40,
      pieUrl: "https://cloud.protopie.io/p/b91edba11d",
    },
    {
      id: "pp-05",
      title: "In-car voice control",
      artist: "Tony Kim",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",
      price: 50,
      pieUrl: "https://cloud.protopie.io/p/6ec7e70d1a",
    },
    {
      id: "pp-06",
      title: "The Adventures of Proto",
      artist: "Richard Oldfield",
      desc: `Made exclusively for Protopie Playoff 2021
              Shout up if you get stuck!
              For the full experience. View in the Protopie App.
              #PieDay #PlayOff #ProtoPie`,
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",
      price: 60,
      pieUrl: "https://cloud.protopie.io/p/95ee13709f",
    },
    {
      id: "pp-07",
      title: "Sunglasses shop app",
      artist: "Mustafa Alabdullah",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",
      price: 70,
      pieUrl: "https://cloud.protopie.io/p/6f336cac8c",
    },
    {
      id: "pp-08",
      title: "Alwritey—Minimalist Text Editor",
      artist: "Fredo Tan",
      desc: `This minimalist text editor prototype was made with ProtoPie by Fredo Tan.
              ---
              Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.
              ---
              ProtoPie is an interactive prototyping tool for all digital products.
              ---
              Learn more about ProtoPie at https://protopie.io.`,
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",
      price: 80,
      pieUrl: "https://cloud.protopie.io/p/946f88f8d3",
    },
    {
      id: "pp-09",
      title: "Voice search for TV",
      artist: "Tony Kim",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
    },
    {
      id: "pp-10",
      title: "Finance App Visual Interaction 2.0",
      artist: "Arpit Agrawal",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",
      price: 90,
      pieUrl:
        "https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch",
    },
    {
      id: "pp-11",
      title: "Whack-a-mole",
      artist: "Changmo Kang",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/ab796f897e",
    },
    {
      id: "pp-12",
      title: "Voice Note",
      artist: "Haerin Song",
      desc: `Made by Haerin Song
              (Soda Design)`,
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
  ]);
  // useState를 활용해서 상태를 가지고 있게 한다
  const [orders, setOrders] = useState([]);

  const addToOrder = useCallback((id) => {
    // 변경값을 데이터 말고 함수로 넣음
    setOrders((orders) => {
      // 해당 아이템이 이미 있는지 없는지 확인해야함
      // 있으면 어떠한 데이터 값이고 없으면 undefined임
      const finded = orders.find((order) => order.id === id);

      // 해당 아이템이 없으면 새로운 데이터를 리턴해줌
      if (finded === undefined) {
        // ...orders는 orders를 분해한다는 뜻
        return [...orders, { id, quantity: 1 }];
      }
      // 해당 아이템이 있으면
      else {
        // orders를 map돌게 되면 그 결과물은 새로운 orders객체가 된다
        return orders.map((order) => {
          // 새로운 객체의 id와 기존 id와 같으면
          if (order.id === id) {
            return {
              id,
              // order.quantity는 선택된 아이템
              quantity: order.quantity + 1,
            };
            // 같은 아이템이 없으면
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        // 오더에 물건을 넣어 둘 함수
        addToOrder,
        // 해당 오더를 삭제하는 함수
        remove,
        // 전체 주문을 취소할 함수
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
