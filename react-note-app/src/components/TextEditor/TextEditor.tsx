import React from "react";
import ReactQuill from "react-quill";
import { Container } from "./TextEditor.styles";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const TextEditor = ({ color, value, setValue }: TextEditorProps) => {
  const modules = {
    toolbar: [
      [{ list: "ordered" }, { list: "bullet" }],
      [],
      ["italic", "underline", "strike"],
      [],
      [{ color: [] }, { background: [] }],
      [],
      ["image", "blockquote", "code-block"],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",

    "color",
    "background",

    "image",
    "blockquote",
    "code-block",
  ];

  return (
    <Container noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder="글을 작성하세요."
      />
    </Container>
  );
};

export default TextEditor;
