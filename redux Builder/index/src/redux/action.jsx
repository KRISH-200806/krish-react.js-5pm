

export const ADD = " ADD"
export const REDUCE = " REDUCE"
export const light_theme = "light_theme"


export const handleAdd = (value) => {
  return { type: ADD, payload: value };
};
export const handleReduce = (value) => {
  return { type: REDUCE, payload: value };
};

export const handletheme = (theme) => {
  return { type: light_theme, payload: theme };
};