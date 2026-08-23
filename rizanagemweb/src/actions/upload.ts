"use server";

import { put } from "@vercel/blob";

export async function uploadImageToBlob(formData: FormData) {
  const file = formData.get("file") as File;
  
  if (!file) {
    throw new Error("No file provided");
  }

  // Upload the file to Vercel Blob with a unique timestamp
  const blob = await put(`products/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  // Return the secure public URL
  return blob.url;
}