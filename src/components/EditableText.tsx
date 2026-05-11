"use client";
import { useEffect, useRef, useState } from "react";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  tagName?: any;
  placeholder?: string;
  renderValue?: (value: string) => React.ReactNode;
}

export default function EditableText({ value, onChange, className = "", tagName = "div", placeholder = "Enter text...", renderValue }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const Tag = tagName as any;

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    const isMultiline = tagName === "p" || tagName === "div";
    if (isMultiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className={`bg-transparent outline-none border-b border-gray-300 w-full resize-none overflow-hidden ${className}`}
          placeholder={placeholder}
          rows={value.split('\n').length || 1}
        />
      );
    }
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setIsEditing(false)}
        className={`bg-transparent outline-none border-b border-gray-300 w-full ${className}`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <Tag 
      onClick={() => setIsEditing(true)} 
      className={`cursor-pointer hover:bg-gray-100/50 transition-colors empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 ${className}`}
      data-placeholder={placeholder}
    >
      {renderValue ? renderValue(value) : (value || "")}
    </Tag>
  );
}
