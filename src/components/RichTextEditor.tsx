import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Minus,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Code,
  Eye,
} from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  onUploadImage?: (file: File) => Promise<string>;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  onUploadImage,
}) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [rawHtml, setRawHtml] = useState(content);
  const [uploadingImage, setUploadingImage] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#0e5a46] underline font-medium hover:text-[#478a3f]',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-xl max-w-full my-4 border border-[#e6dec9] shadow-sm',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setRawHtml(html);
      onChange(html);
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-stone max-w-none focus:outline-none min-h-[260px] p-4 text-[#2f3437] text-sm leading-relaxed',
      },
    },
  });

  const handleToggleHtml = () => {
    if (isHtmlMode) {
      editor?.commands.setContent(rawHtml);
      onChange(rawHtml);
      setIsHtmlMode(false);
    } else {
      if (editor) {
        setRawHtml(editor.getHTML());
      }
      setIsHtmlMode(true);
    }
  };

  const handleInsertLink = () => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter destination URL:', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const handleInsertImagePrompt = () => {
    if (!editor) return;
    const url = window.prompt('Enter Image URL (or use Upload button below):');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUploadImage || !editor) return;
    try {
      setUploadingImage(true);
      const url = await onUploadImage(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err: any) {
      alert(err.message || 'Failed to upload image into editor');
    } finally {
      setUploadingImage(false);
      e.target.value = '';
    }
  };

  if (!editor) {
    return (
      <div className="border border-[#e6dec9] rounded-xl p-4 bg-white text-xs text-[#2f3437]/60">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="border border-[#e6dec9] rounded-2xl overflow-hidden bg-white shadow-sm focus-within:border-[#0e5a46] transition-colors">
      {/* WYSIWYG Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-[#f9f7f2] border-b border-[#e6dec9] select-none text-[#2f3437]">
        {/* Bold */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('bold')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Bold (Ctrl+B)"
        >
          <Bold className="w-4 h-4" />
        </button>

        {/* Italic */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('italic')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Italic (Ctrl+I)"
        >
          <Italic className="w-4 h-4" />
        </button>

        {/* Strikethrough */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('strike')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>

        <span className="w-px h-5 bg-[#e6dec9] mx-1" />

        {/* H2 */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>

        {/* H3 */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('heading', { level: 3 })
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </button>

        <span className="w-px h-5 bg-[#e6dec9] mx-1" />

        {/* Bullet List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('bulletList')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>

        {/* Ordered List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('orderedList')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>

        {/* Blockquote */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('blockquote')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>

        {/* Horizontal Rule */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded-lg hover:bg-[#e6dec9]/60 text-[#2f3437] transition-colors cursor-pointer"
          title="Divider Line"
        >
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-px h-5 bg-[#e6dec9] mx-1" />

        {/* Insert Link */}
        <button
          type="button"
          onClick={handleInsertLink}
          className={`p-2 rounded-lg transition-colors cursor-pointer ${
            editor.isActive('link')
              ? 'bg-[#0e5a46] text-white'
              : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
          }`}
          title="Insert / Edit Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>

        {/* Insert Image from URL */}
        <button
          type="button"
          onClick={handleInsertImagePrompt}
          className="p-2 rounded-lg hover:bg-[#e6dec9]/60 text-[#2f3437] transition-colors cursor-pointer"
          title="Insert Image from Web URL"
        >
          <ImageIcon className="w-4 h-4" />
        </button>

        {/* Direct Upload Image from Computer */}
        {onUploadImage && (
          <label
            className={`p-2 rounded-lg hover:bg-[#e6dec9]/60 text-[#2f3437] transition-colors cursor-pointer flex items-center gap-1 text-xs font-medium ${
              uploadingImage ? 'opacity-50 pointer-events-none' : ''
            }`}
            title="Upload image from computer directly into post"
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileInput}
              disabled={uploadingImage}
            />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0e5a46]">
              {uploadingImage ? 'Uploading...' : '+ Upload Pic'}
            </span>
          </label>
        )}

        <div className="ml-auto flex items-center gap-1">
          {/* Toggle HTML Code View */}
          <button
            type="button"
            onClick={handleToggleHtml}
            className={`p-2 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono ${
              isHtmlMode
                ? 'bg-[#0e5a46] text-white'
                : 'hover:bg-[#e6dec9]/60 text-[#2f3437]'
            }`}
            title={isHtmlMode ? 'Switch to Visual Editor' : 'Edit Raw HTML'}
          >
            {isHtmlMode ? <Eye className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{isHtmlMode ? 'Visual' : 'HTML'}</span>
          </button>

          {/* Undo */}
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="p-2 rounded-lg hover:bg-[#e6dec9]/60 text-[#2f3437] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Undo"
          >
            <Undo className="w-3.5 h-3.5" />
          </button>

          {/* Redo */}
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="p-2 rounded-lg hover:bg-[#e6dec9]/60 text-[#2f3437] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Redo"
          >
            <Redo className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Editor Content or Raw HTML Mode */}
      {isHtmlMode ? (
        <textarea
          value={rawHtml}
          onChange={(e) => {
            setRawHtml(e.target.value);
            onChange(e.target.value);
          }}
          className="w-full min-h-[300px] p-4 font-mono text-xs text-[#2f3437] bg-[#fbfaf7] focus:outline-none resize-y"
          placeholder="Type or paste HTML markup here..."
        />
      ) : (
        <div className="min-h-[300px] bg-white cursor-text" onClick={() => editor.chain().focus().run()}>
          <EditorContent editor={editor} />
        </div>
      )}

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#fdfcf9] border-t border-[#e6dec9] text-[11px] text-[#2f3437]/60">
        <span>
          Format: Paragraph, H2, H3, Lists, Blockquotes, Links &amp; Images
        </span>
        <span>
          {editor.getText().trim() ? `${editor.getText().trim().split(/\s+/).length} words` : '0 words'}
        </span>
      </div>
    </div>
  );
};
