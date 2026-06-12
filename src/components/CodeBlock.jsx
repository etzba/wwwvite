import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/code.css";

const CodeBlock = ({ code }) => {
  return (
    <div>
      <div className="code-container">
        <pre className="code-snippet">
          <code>{code}</code><CopyToClipboard className="code-copy" text={code}><button>Copy</button></CopyToClipboard>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
