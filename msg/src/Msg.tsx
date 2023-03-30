import { FC } from 'react';
import useMsg from './useMsg';

const TextInput: FC = () => {
  const {text, setText} = useMsg();

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
