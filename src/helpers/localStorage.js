const KEY = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem(KEY, serializedState);
  } catch (error) {
    console.log('error while getting state from local storage');
  }
};
