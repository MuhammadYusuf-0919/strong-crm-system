import React, { useState, useRef } from "react";
import ClipboardJS from "clipboard";
import { useClipboard } from 'react-use-clipboard';
import copyToClipboard from 'copy-text-to-clipboard';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ClipboardCopyProps {
  textToCopy: string;
}

const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ textToCopy }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    const clipboard = new ClipboardJS(textRef.current!);
    clipboard.on("success", (e) => {
      e.clearSelection();
    });
    clipboard.on("error", (e) => {
      console.error("Copy failed:", e);
    });
    clipboard.onClick({ action: "copy" });
  };

  return (
    <div>
      <div ref={textRef} data-clipboard-text={textToCopy} style={{ display: "none" }}>
        {textToCopy}
      </div>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
};

const Clipboard: React.FC = () => {
  const textToCopy = "This is the text to copy to the clipboard.";

  return (
    <div className="App">
      <h1>Clipboard Copy Example</h1>
      <ClipboardCopy textToCopy={textToCopy} />
    </div>
  );
};

const Clipboard2: React.FC = () => {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
      />

      <CopyToClipboard text={value} onCopy={handleCopy}>
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>

      <CopyToClipboard text={value} onCopy={handleCopy}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>

      {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
    </div>
  );
};

const Clipboard3: React.FC = () => {
  const [text, setText] = useState('Bu matn nusxalangan bo\'ladi!');
  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 1000,
  });

  return (
    <div className="App">
      <h1>React Clipboard Example</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matnni kiriting..."
      />
      <button onClick={setCopied}>Matnni Nusxalash</button>
      {isCopied ? <span style={{ color: 'green' }}>Nusxalandi!</span> : null}
    </div>
  );
}

const Clipboard4: React.FC = () => {
  const [text, setText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error('Nusxalashda xatolik yuz berdi: ', err);
    }
  };

  return (
    <div className="App">
      <h1>React Clipboard Example</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matnni kiriting..."
      />
      <button onClick={copyToClipboard}>Matnni Nusxalash</button>
      {isCopied && <span style={{ color: 'green' }}>Nusxalandi!</span>}
    </div>
  );
}

const Clipboard5: React.FC = () => {
  const [textToCopy, setTextToCopy] = useState('Hello, clipboard!');
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    copyToClipboard(textToCopy);
    setCopied(true);
  };

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={handleCopyToClipboard}>
        Copy to Clipboard
      </button>
      {copied && <p>Copied to clipboard!</p>}
    </div>
  );
};

export default Clipboard5;
export { Clipboard, Clipboard2, Clipboard3, Clipboard4 };
