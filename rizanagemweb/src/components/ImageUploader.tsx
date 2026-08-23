"use client";

import { useState, useRef } from "react";

export default function ImageUploader({ onUploadSuccess }: { onUploadSuccess: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    
    setUploading(true);
    setErrorMsg(""); // Clear previous errors
    const file = e.target.files[0];

    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: "POST",
        body: file,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onUploadSuccess(data.url);
    } catch (error: any) {
      console.error("Upload Error:", error);
      setErrorMsg(error.message || "Failed to connect to Vercel Blob.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-neutral-700 bg-brand-dark p-6 rounded-sm w-full">
      <p className="text-sm text-brand-silver mb-4">
        {uploading ? "Uploading to Vercel Blob..." : "Upload High-Res Image"}
      </p>
      
      <input
        name="file"
        ref={inputFileRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="text-xs text-brand-silver file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-brand-gold file:text-brand-black hover:file:bg-white transition-colors cursor-pointer"
      />

      {/* Display Error Message if it fails */}
      {errorMsg && (
        <p className="text-red-400 text-xs mt-4 text-center font-semibold">
          Error: {errorMsg} <br/>
          (Did you restart your server after adding the .env token?)
        </p>
      )}
    </div>
  );
}