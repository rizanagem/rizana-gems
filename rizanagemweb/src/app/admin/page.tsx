"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; 
import { uploadImageToBlob } from "@/actions/upload"; // The new Server Action
import { Upload, Plus, CheckCircle, Trash2, ImagePlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Grouped categories for an organized admin dropdown
const groupedCategories = [
  {
    label: "Main Categories",
    options: [
      { label: "Jewelry", value: "jewelry" },
      { label: "Gemstones", value: "gemstones" },
    ]
  },
  {
    label: "Jewelry Subcategories",
    options: [
      { label: "Rings", value: "rings" },
      { label: "Necklaces", value: "necklaces" },
    ]
  },
  {
    label: "Tools & Equipment",
    options: [
      { label: "Welders", value: "welders" },
      { label: "Burs & Drills", value: "burs-drills" },
      { label: "Storage & Organizers", value: "storage-organizers" },
      // Add more tool categories here as needed
    ]
  }
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Basic Form State (Category removed from here)
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  // Dynamic Category State
  const [selectedCategory, setSelectedCategory] = useState("gemstones");
  const [newCategoryName, setNewCategoryName] = useState("");

  // Physical File State
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle actual file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImageFiles((prev) => [...prev, ...filesArray]);
      
      // Generate temporary local URLs to show live previews
      const previewsArray = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...previewsArray]);
    }
  };

  // Remove a selected image
  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // 1. Determine the final category string/slug
    let finalCategorySlug = "";
    if (selectedCategory === "ADD_NEW") {
      finalCategorySlug = newCategoryName
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    } else {
      finalCategorySlug = selectedCategory;
    }

    if (!finalCategorySlug) {
      alert("Please select or create a category.");
      setLoading(false);
      return;
    }

    try {
      const uploadedUrls: string[] = [];

      // 2. Upload all selected images to Vercel Blob
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        const uploadData = new FormData();
        uploadData.append("file", file);
        
        const blobUrl = await uploadImageToBlob(uploadData);
        uploadedUrls.push(blobUrl);
      }

      if (uploadedUrls.length === 0) {
        uploadedUrls.push("https://placehold.co/800x1000/1a1a1a/666666?text=No+Image");
      }

      // 3. Save product data + Vercel Blob URLs to Firebase
      await addDoc(collection(db, "products"), {
        title: formData.title,
        price: parseFloat(formData.price),
        category: finalCategorySlug, // Saved dynamically!
        description: formData.description,
        images: uploadedUrls,
        createdAt: new Date(),
      });

      // 4. Reset Form
      setSuccess(true);
      setFormData({ title: "", price: "", description: "" });
      setSelectedCategory("gemstones");
      setNewCategoryName("");
      setImageFiles([]);
      setImagePreviews([]);
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Failed to add product. Check your terminal for Blob errors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24 px-6 md:px-12 text-white font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl">Admin Dashboard</h1>
          <Link href="/" className="text-brand-silver hover:text-brand-gold text-xs uppercase tracking-widest transition-colors">
            View Live Site &rarr;
          </Link>
        </div>

        <div className="bg-brand-dark border border-neutral-900 rounded-sm p-8 md:p-10">
          <h2 className="font-serif text-2xl mb-8 flex items-center gap-3">
            <Plus className="text-brand-gold" /> Add New Product
          </h2>

          {success && (
            <div className="mb-8 p-4 bg-emerald-900/30 border border-emerald-900 text-emerald-400 text-sm flex items-center gap-2 rounded-sm">
              <CheckCircle size={16} /> Product successfully added to the database!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Basic Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Product Name</label>
                  <input 
                    type="text" name="title" required value={formData.title} onChange={handleChange}
                    placeholder="e.g. Royal Blue Sapphire" 
                    className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Price (USD)</label>
                  <input 
                    type="number" name="price" required min="0" step="0.01" value={formData.price} onChange={handleChange}
                    placeholder="e.g. 2850.00" 
                    className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* DYNAMIC CATEGORY SECTION WITH OPTGROUPS */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Category</label>
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    <option value="" disabled>Select a category</option>
                    
                    {groupedCategories.map((group, groupIndex) => (
                      <optgroup 
                        key={groupIndex} 
                        label={group.label} 
                        className="text-brand-silver font-semibold bg-brand-dark uppercase tracking-widest text-[10px]"
                      >
                        {group.options.map((cat) => (
                          <option key={cat.value} value={cat.value} className="text-white text-sm normal-case font-normal bg-brand-black">
                            {cat.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    
                    <optgroup label="Custom" className="text-brand-gold font-semibold bg-brand-dark uppercase tracking-widest text-[10px]">
                      <option value="ADD_NEW" className="font-semibold text-brand-gold bg-brand-black text-sm normal-case">+ Create New Category...</option>
                    </optgroup>

                  </select>

                  {/* Pops up only if 'Create New Category' is selected */}
                  {selectedCategory === "ADD_NEW" && (
                    <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <input
                        type="text"
                        placeholder="Enter new category (e.g. Diamond Testers)"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="w-full bg-brand-dark border border-neutral-700 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        required
                      />
                      <p className="text-xs text-neutral-500 mt-2">
                        Creates a new page at <code className="text-brand-gold">/collections/your-new-category</code>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Physical Image Uploads */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Product Images</label>
                
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  id="image-upload" 
                  className="hidden" 
                />
                <label 
                  htmlFor="image-upload" 
                  className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-neutral-700 rounded-sm p-8 text-neutral-500 hover:text-brand-gold hover:border-brand-gold cursor-pointer transition-colors bg-brand-black"
                >
                  <ImagePlus size={24} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Click to Upload Images</span>
                </label>

                {/* Live Image Previews */}
                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative aspect-square rounded-sm overflow-hidden border border-neutral-800 group bg-brand-black">
                        <Image src={preview} alt={`Preview ${index}`} fill className="object-cover" unoptimized />
                        <button 
                          type="button" 
                          onClick={() => removeImage(index)}
                          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                        >
                          <Trash2 size={20} className="hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Description</label>
              <textarea 
                name="description" required rows={4} value={formData.description} onChange={handleChange}
                placeholder="Describe the gemstone or jewelry piece..." 
                className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-colors font-semibold flex justify-center items-center gap-2 disabled:opacity-50"
            >
              {loading ? "Uploading & Saving..." : <><Upload size={16} /> Publish Product</>}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}