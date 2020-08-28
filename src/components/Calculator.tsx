import React from "react";

import { useCalculator } from "../hooks/useCalculator";

export default function Calculator(props: any) {
  const { error, bindInput, handleClick } = useCalculator();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col p-2 rounded border border-solid border-gray-700">
        <div
          className={"rounded  border border-solid border-gray-700 box-content"}
        >
          <input
            autoFocus
            className="bg-transparent py-6 px-2 text-right whitespace-pre-wrap text-xl text-white w-full outline-none opacity-50 focus:border-4 focus:border-yellow-500"
            type="text"
            {...bindInput}
          />
          <p className="p-2 text-center text-red-700">{error}</p>
        </div>
        <div className={"flex justify-between p-2"}>
          <div className={"p-1 "}>
            <button
              className={
                "btn bg-gray-100 text-black focus:text-black hover:text-gray-500"
              }
              onClick={(e) => handleClick(e, "ac")}
            >
              AC
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={
                "btn bg-gray-100 text-black focus:text-black hover:text-gray-500"
              }
              onClick={(e) => handleClick(e, "toggleSign")}
            >
              +/-
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={
                "btn bg-gray-100 text-black focus:text-black hover:text-gray-500"
              }
              onClick={(e) => handleClick(e, "input", "%")}
            >
              %
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn bg-orange-500 text-black"}
              onClick={(e) => handleClick(e, "input", "/")}
            >
              /
            </button>
          </div>
        </div>
        <div className={"flex justify-between p-2"}>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "7")}
            >
              7
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "8")}
            >
              8
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "9")}
            >
              9
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn bg-orange-500 text-black"}
              onClick={(e) => handleClick(e, "input", "*")}
            >
              x
            </button>
          </div>
        </div>
        <div className={"flex justify-between p-2"}>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "4")}
            >
              4
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "5")}
            >
              5
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "6")}
            >
              6
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn bg-orange-500 text-black"}
              onClick={(e) => handleClick(e, "input", "-")}
            >
              -
            </button>
          </div>
        </div>
        <div className={"flex justify-between p-2"}>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "1")}
            >
              1
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "2")}
            >
              2
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "3")}
            >
              3
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn bg-orange-500 text-black"}
              onClick={(e) => handleClick(e, "input", "+")}
            >
              +
            </button>
          </div>
        </div>
        <div className={"flex justify-between p-2"}>
          <div className={"p-1 flex-grow"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", "0")}
            >
              0
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn"}
              onClick={(e) => handleClick(e, "input", ".")}
            >
              .
            </button>
          </div>
          <div className={"p-1"}>
            <button
              className={"btn bg-orange-500 text-black"}
              onClick={(e) => handleClick(e, "result")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
