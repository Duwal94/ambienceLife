import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import EcommerceCard from './CatCard';
import { LeftArrow, RightArrow } from "./arrows";



import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: embrace power of CSS flexbox!
import "./hideScrollbar.css";
// import "./firstItemMargin.css";



type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;



function Multi() {

  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const items = [
    { id: 1, title: 'Bedding', img: "/beding.jpg" },
    { id: 2, title: 'Rugs', img: "/Rugs.jpg" },
    { id: 3, title: 'Ready Made Curtains', img: "/curtains.jpg" },
    { id: 4, title: 'Cushion Covers', img: "/cushins.jpg" },
    { id: 5, title: 'Decor Accessories', img: "/accessories.jpg" },

  ];
  return (
    <>

      <div className="p-4" >
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu

            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {items.map(({ id, title, img }) => (
              <div
                key={id}
                className="z-0 transition-transform duration-300 transform scale-90 hover:scale-100"
              >
                <EcommerceCard img={img} name={title} />
              </div>
            ))}
          </ScrollMenu>
        </div>

      </div>
    </>
  );
}
export default Multi;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

