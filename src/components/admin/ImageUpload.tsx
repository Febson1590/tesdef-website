"use client";

import { useRef, useState } from "react";

const ACCEPT = "image/jpeg,image/png,image/webp";
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];
const MAX_BYTES = 4 * 1024 * 1024; // 4 MB

type Props = {
  /** Form field name the uploaded URL is submitted under (e.g. "coverImage"). */
  name: string;
  label?: string;
  /** Existing URL (for edit forms). */
  initialUrl?: string;
  /** Helper text shown under the dropzone. */
  hint?: string;
};

type Status = "idle" | "uploading" | "success" | "error";

export function ImageUpload({ name, label = "Image", initialUrl = "", hint }: Props) {
  const [url, setUrl] = useState(initialUrl);
  const [preview, setPreview] = useState(initialUrl); // local object URL while uploading, then the blob URL
  const [status, setStatus] = useState<Status>(initialUrl ? "success" : "idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [urlMode, setUrlMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function reset() {
    setUrl("");
    setPreview("");
    setStatus("idle");
    setProgress(0);
    setError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function validate(file: File): string | null {
    if (!ALLOWED.includes(file.type)) return "Only JPG, PNG and WebP images are allowed.";
    if (file.size > MAX_BYTES) return "Image must be 4 MB or smaller.";
    return null;
  }

  function upload(file: File) {
    const err = validate(file);
    if (err) {
      setError(err);
      setStatus("error");
      return;
    }
    setError("");
    setStatus("uploading");
    setProgress(0);
    const local = URL.createObjectURL(file);
    setPreview(local);

    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    fd.append("file", file);
    xhr.open("POST", "/api/admin/upload");
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      URL.revokeObjectURL(local);
      if (xhr.status === 200) {
        try {
          const { url: uploaded } = JSON.parse(xhr.responseText) as { url: string };
          setUrl(uploaded);
          setPreview(uploaded);
          setStatus("success");
        } catch {
          setStatus("error");
          setError("Unexpected response from server.");
        }
      } else {
        let msg = "Upload failed. Please try again.";
        try {
          msg = (JSON.parse(xhr.responseText) as { error?: string }).error ?? msg;
        } catch {}
        setStatus("error");
        setError(msg);
      }
    };
    xhr.onerror = () => {
      URL.revokeObjectURL(local);
      setStatus("error");
      setError("Network error during upload.");
    };
    xhr.send(fd);
  }

  function onFiles(files: FileList | null) {
    if (files && files[0]) upload(files[0]);
  }

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <label className="block text-sm font-semibold text-forest">{label}</label>
        <button
          type="button"
          onClick={() => setUrlMode((v) => !v)}
          className="text-xs font-medium text-primary hover:underline"
        >
          {urlMode ? "Upload an image instead" : "Use image URL instead"}
        </button>
      </div>

      {/* The value actually submitted with the form. */}
      <input type="hidden" name={name} value={url} readOnly />

      {urlMode ? (
        <input
          type="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setPreview(e.target.value);
            setStatus(e.target.value ? "success" : "idle");
          }}
          placeholder="https://…"
          className="w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
        />
      ) : preview ? (
        // Preview with remove / replace
        <div className="rounded-xl border border-black/10 bg-offwhite p-3">
          <div className="relative mx-auto aspect-video w-full max-w-sm overflow-hidden rounded-lg bg-mint">
            {/* Use a plain img for arbitrary/object URLs to avoid next/image host constraints in preview */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Selected image preview" className="h-full w-full object-cover" />
            {status === "uploading" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
                <span className="text-sm font-semibold">Uploading… {progress}%</span>
                <div className="mt-2 h-1.5 w-2/3 overflow-hidden rounded-full bg-white/30">
                  <div className="h-full bg-fresh transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}
          </div>
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={status === "uploading"}
              className="rounded-full border border-black/15 px-4 py-1.5 text-xs font-semibold text-ink hover:bg-white disabled:opacity-50"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={status === "uploading"}
              className="rounded-full border border-red-200 px-4 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-50 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
          {status === "success" && <p className="mt-2 text-center text-xs font-medium text-primary">✓ Image ready</p>}
        </div>
      ) : (
        // Dropzone
        <div
          role="button"
          tabIndex={0}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click(); }}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); onFiles(e.dataTransfer.files); }}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors ${
            dragOver ? "border-primary bg-mint/40" : "border-black/15 hover:border-primary/50 hover:bg-offwhite"
          }`}
        >
          <svg viewBox="0 0 24 24" className="mb-2 h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M17 8l-5-5-5 5" /><path d="M12 3v12" />
          </svg>
          <p className="text-sm font-semibold text-forest">Drag &amp; drop an image, or <span className="text-primary underline">choose image</span></p>
          <p className="mt-1 text-xs text-muted">JPG, PNG or WebP · up to 4 MB</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => onFiles(e.target.files)}
      />

      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
      {status === "error" && error && <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>}
    </div>
  );
}
