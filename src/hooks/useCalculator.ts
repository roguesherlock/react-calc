/* eslint-disable no-eval */
import { useCallback, useReducer, useRef } from "react";

type inputReducerActionTypes = { type: string; value?: string | number };

type inputReducerStateType = {
  results: string[];
  value: string;
  error: string;
};

const initialState: inputReducerStateType = {
  results: [],
  value: "0",
  error: "",
};

const numberRegex = /^[+-.*/%\d]*$/;

const inputReducer = (
  state: inputReducerStateType,
  action: inputReducerActionTypes
) => {
  switch (action.type) {
    case "ac": {
      return { ...initialState };
    }
    case "inputBox": {
      const input = action?.value! as string;

      if (numberRegex.test(input)) return { ...state, error: "", value: input };
      else return state;
    }
    case "input": {
      let value = state.value;
      if (state.value === "Infinity") value = "";
      value = `${value}${action.value!}`;
      return { ...state, value, error: "" };
    }
    case "result": {
      try {
        let value;
        if (state.value.startsWith("-0")) {
          value = `-${state.value.slice(2)}`;
        } else if (state.value.startsWith("0")) {
          value = `${state.value.slice(1)}`;
        } else {
          value = state.value;
        }
        value = String(eval(value));
        const error = value === "Infinity" || value === "NaN" ? "Infinty" : "";
        return { ...state, value, error };
      } catch (error) {
        console.error(error);
        return { ...state, error: "Invalid Input!" };
      }
    }
    case "toggleSign": {
      const value =
        state.value[0] === "-"
          ? (state.value as String).slice(1)
          : `-${state.value}`;
      return { ...state, value };
    }
    default: {
      return state;
    }
  }
};

export const useCalculator = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, dispatch] = useReducer(inputReducer, initialState);
  const handleClick = (event: any, type: string, value?: string) => {
    dispatch({ type, value });
    inputRef?.current?.focus();
  };

  return {
    error: state.error,
    value: state.value,
    handleClick,
    bindInput: {
      value: state.value,
      ref: inputRef,
      onChange: useCallback(
        (event: any) => {
          dispatch({ type: "inputBox", value: inputRef?.current?.value });
          inputRef?.current?.focus();
        },
        [dispatch]
      ),
      onKeyPress: useCallback(
        (event: any) => {
          if (event.key === "Enter") dispatch({ type: "result" });
          inputRef?.current?.focus();
        },
        [dispatch]
      ),
    },
  } as const;
};
