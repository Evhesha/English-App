import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./RichTextEditor.css";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeEditorContent(value) {
  if (!value) {
    return "<p></p>";
  }

  const trimmedValue = value.trim();

  if (trimmedValue.startsWith("<") && trimmedValue.endsWith(">")) {
    return value;
  }

  const paragraphs = value
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll("\n", "<br />")}</p>`);

  return paragraphs.length > 0 ? paragraphs.join("") : "<p></p>";
}

function ToolbarButton({ isActive = false, onClick, children }) {
  return (
    <button
      type="button"
      className={`rich-text-editor__button ${isActive ? "is-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: normalizeEditorContent(value),
    immediatelyRender: false,
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const normalizedValue = normalizeEditorContent(value);
    if (editor.getHTML() !== normalizedValue) {
      editor.commands.setContent(normalizedValue, false);
    }
  }, [editor, value]);

  if (!editor) {
    return null;
  }

  return (
    <div className="rich-text-editor">
      <div className="rich-text-editor__toolbar">
        <ToolbarButton
          isActive={editor.isActive("paragraph")}
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          P
        </ToolbarButton>
        <ToolbarButton
          isActive={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolbarButton>
        <ToolbarButton
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          B
        </ToolbarButton>
        <ToolbarButton
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          I
        </ToolbarButton>
        <ToolbarButton
          isActive={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          List
        </ToolbarButton>
        <ToolbarButton
          isActive={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1.
        </ToolbarButton>
        <ToolbarButton
          isActive={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Quote
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
          Undo
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
          Redo
        </ToolbarButton>
      </div>
      <EditorContent editor={editor} className="rich-text-editor__content" />
    </div>
  );
}

export default RichTextEditor;
