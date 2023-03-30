import { bind } from '@react-rxjs/core';
import { createSignal } from '@react-rxjs/utils';

const [textChange$, setText] = createSignal<string>();
const [useText, text$] = bind(textChange$, "");

const useMsg = () => {
  const text = useText();

  return {text, setText};
};

export default useMsg;
