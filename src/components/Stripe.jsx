import React from "react";

function Stripe({ val }) {
  return (
    <div className="px-6 py-4 border-t-[0.8px] border-b-[0.8px] border-r-[0.8px] text-white border-zinc-400 flex justify-between item-center gap-6">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
