"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; 
import { uploadImageToBlob } from "@/actions/upload";
import { Upload, Plus, CheckCircle, Trash2, ImagePlus, Edit3, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const groupedCategories = [
  {
    label: "Jewelry",
    options: [
      { label: "All Jewelry", value: "jewelry" },
      { label: "Rings", value: "rings" },
      { label: "Necklaces", value: "necklaces" },
    ]
  },
  {
    label: "Gemstones",
    options: [
      { label: "All Gemstones", value: "gemstones" },
    ]
  },
  {
    label: "Tools & Equipment",
    options: [
      { label: "Welders", value: "welders" },
      { label: "Storage & Organizers", value: "storage-organizers" },
      { label: "Burs & Drills", value: "burs-drills" },
      { label: "Casting Supplies", value: "casting-supplies" },
      { label: "Enameling Supplies & Equipment", value: "enameling-supplies" },
      { label: "Engraving Tools & Equipment", value: "engraving-tools" },
      { label: "Files", value: "files" },
      { label: "Flex Shafts & Rotary Tools", value: "flex-shafts" },
      { label: "Measuring & Testing", value: "measuring-testing" },
      { label: "Metal Forming", value: "metal-forming" },
      { label: "Plating Solutions, Supplies & Equipment", value: "plating-solutions" },
      { label: "Pliers & Cutters", value: "pliers-cutters" },
      { label: "Polishing & Finishing Tools", value: "polishing-finishing" },
      { label: "Safety Equipment", value: "safety-equipment" },
      { label: "Jewelry Saw Blades & Saw Frames", value: "saw-blades-frames" },
      { label: "Jewelry Soldering Supplies & Equipment", value: "soldering-supplies" },
      { label: "Stamping Tools for Jewelry", value: "stamping-tools" },
      { label: "Stone Setting Tools", value: "stone-setting-tools" },
      { label: "Benches & Accessories", value: "benches-accessories" },
      { label: "Adhesives", value: "adhesives" },
      { label: "3D Manufacturing", value: "3d-manufacturing" },
      { label: "Bead Stringing", value: "bead-stringing" },
      { label: "Gemstone Testing", value: "gemstone-testing" },
      { label: "Jewelry Cleaning", value: "jewelry-cleaning" },
      { label: "Kilns & Furnaces", value: "kilns-furnaces" },
      { label: "Lapidary Supplies", value: "lapidary-supplies" },
      { label: "Lighting & Photography", value: "lighting-photography" },
      { label: "Magnifiers & Optical Gear", value: "magnifiers-optical" },
      { label: "Mold & Model Making", value: "mold-model-making" },
      { label: "Tweezers", value: "tweezers" },
      { label: "Watch Batteries & Tools", value: "watch-batteries" },
      { label: "Wire Working & Wrapping", value: "wire-working" },
      { label: "Jewelry Production Equipment", value: "production-equipment" }
    ]
  }
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // INVENTORY STATE
  const [inventory, setInventory] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    brand: "", 
    price: "",
    description: "",
  });

  // NEW: Specifications State
  const [specifications, setSpecifications] = useState<{key: string, value: string}[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategoryParent, setNewCategoryParent] = useState("Tools & Equipment");
  const [newCategoryName, setNewCategoryName] = useState("");

  // IMAGE STATES
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // FETCH INVENTORY
  const fetchInventory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      productsData.sort((a: any, b: any) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setInventory(productsData);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // FORM HANDLERS
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SPECIFICATION HANDLERS
  const addSpecification = () => {
    setSpecifications([...specifications, { key: "", value: "" }]);
  };

  const updateSpecification = (index: number, field: 'key' | 'value', val: string) => {
    const newSpecs = [...specifications];
    newSpecs[index][field] = val;
    setSpecifications(newSpecs);
  };

  const removeSpecification = (index: number) => {
    setSpecifications(specifications.filter((_, i) => i !== index));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImageFiles((prev) => [...prev, ...filesArray]);
      const previewsArray = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...previewsArray]);
    }
  };

  const removeNewImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  // RESET FORM
  const resetForm = () => {
    setFormData({ title: "", brand: "", price: "", description: "" });
    setSpecifications([]); // Reset specs
    setSelectedCategory("");
    setNewCategoryName("");
    setImageFiles([]);
    setImagePreviews([]);
    setExistingImages([]);
    setIsEditing(false);
    setEditingId("");
  };

  // EDIT PRODUCT TRIGGER
  const handleEdit = (product: any) => {
    setIsEditing(true);
    setEditingId(product.id);
    setFormData({
      title: product.title || "",
      brand: product.brand || "",
      price: product.price ? product.price.toString() : "",
      description: product.description || "",
    });
    
    // Load specs if they exist
    setSpecifications(product.specifications || []);
    
    const categoryExists = groupedCategories.some(g => g.options.some(opt => opt.value === product.category));
    if (categoryExists) {
      setSelectedCategory(product.category);
    } else {
      setSelectedCategory("ADD_NEW");
      setNewCategoryName(product.category); 
    }

    setExistingImages(product.images || []);
    setImageFiles([]);
    setImagePreviews([]);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // DELETE PRODUCT TRIGGER
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product? This action cannot be undone.")) return;
    
    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully.");
      fetchInventory(); 
      if (isEditing && editingId === id) resetForm();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  // SUBMIT FORM
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    let finalCategorySlug = "";
    let finalMainCategory = "";

    if (selectedCategory === "ADD_NEW") {
      finalCategorySlug = newCategoryName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      finalMainCategory = newCategoryParent;
    } else {
      finalCategorySlug = selectedCategory;
      const foundGroup = groupedCategories.find(g => g.options.some(opt => opt.value === selectedCategory));
      finalMainCategory = foundGroup ? foundGroup.label : "Uncategorized";
    }

    if (!finalCategorySlug) {
      alert("Please select or create a category.");
      setLoading(false);
      return;
    }

    // Filter out any blank specifications before saving
    const cleanedSpecifications = specifications.filter(spec => spec.key.trim() !== "" && spec.value.trim() !== "");

    try {
      const uploadedUrls: string[] = [...existingImages]; 

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

      const productPayload = {
        title: formData.title,
        brand: formData.brand.trim(),
        price: parseFloat(formData.price),
        category: finalCategorySlug,
        mainCategory: finalMainCategory,
        description: formData.description,
        specifications: cleanedSpecifications, // Save to Firebase
        images: uploadedUrls,
      };

      if (isEditing) {
        await updateDoc(doc(db, "products", editingId), {
          ...productPayload,
          updatedAt: new Date(), 
        });
      } else {
        await addDoc(collection(db, "products"), {
          ...productPayload,
          createdAt: new Date(),
        });
      }

      setSuccess(true);
      resetForm();
      fetchInventory(); 

    } catch (error: any) {
      console.error("Error saving product: ", error);
      alert(`Error: ${error.message || "Failed to save product."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24 px-6 md:px-12 text-white font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-3xl md:text-4xl">Admin Dashboard</h1>
          <Link href="/" className="text-brand-silver hover:text-brand-gold text-xs uppercase tracking-widest transition-colors">
            View Live Site &rarr;
          </Link>
        </div>

        {/* TOP SECTION: ADD/EDIT FORM */}
        <div className="bg-brand-dark border border-neutral-900 rounded-sm p-8 md:p-10 relative">
          
          {isEditing && (
            <button onClick={resetForm} className="absolute top-8 right-8 text-neutral-400 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest">
              <X size={14} /> Cancel Edit
            </button>
          )}

          <h2 className="font-serif text-2xl mb-8 flex items-center gap-3">
            {isEditing ? <><Edit3 className="text-brand-gold" /> Edit Product</> : <><Plus className="text-brand-gold" /> Add New Product</>}
          </h2>

          {success && (
            <div className="mb-8 p-4 bg-emerald-900/30 border border-emerald-900 text-emerald-400 text-sm flex items-center gap-2 rounded-sm">
              <CheckCircle size={16} /> Product successfully {isEditing ? "updated" : "added"} to the database!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Column: Text Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Product Name</label>
                  <input type="text" name="title" required value={formData.title} onChange={handleChange} placeholder="e.g. Royal Blue Sapphire" className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Brand (Optional)</label>
                  <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="e.g. Grobet, Foredom, etc." className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Price (USD)</label>
                  <input type="number" name="price" required min="0" step="0.01" value={formData.price} onChange={handleChange} placeholder="e.g. 2850.00" className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Category</label>
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors" required>
                    <option value="" disabled>Select a category</option>
                    {groupedCategories.map((group, groupIndex) => (
                      <optgroup key={groupIndex} label={group.label} className="text-brand-silver font-semibold bg-brand-dark uppercase tracking-widest text-[10px]">
                        {group.options.map((cat) => (
                          <option key={cat.value} value={cat.value} className="text-white text-sm normal-case font-normal bg-brand-black">{cat.label}</option>
                        ))}
                      </optgroup>
                    ))}
                    <optgroup label="Custom" className="text-brand-gold font-semibold bg-brand-dark uppercase tracking-widest text-[10px]">
                      <option value="ADD_NEW" className="font-semibold text-brand-gold bg-brand-black text-sm normal-case">+ Create New Subcategory...</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Right Column: Image Uploads */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Product Images</label>
                <input type="file" multiple accept="image/*" onChange={handleFileChange} id="image-upload" className="hidden" />
                <label htmlFor="image-upload" className="w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-neutral-700 rounded-sm p-8 text-neutral-500 hover:text-brand-gold hover:border-brand-gold cursor-pointer transition-colors bg-brand-black h-48">
                  <ImagePlus size={24} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Click to Add Images</span>
                </label>

                {(existingImages.length > 0 || imagePreviews.length > 0) && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {existingImages.map((img, index) => (
                      <div key={`existing-${index}`} className="relative aspect-square rounded-sm overflow-hidden border border-brand-gold/30 group bg-brand-black">
                        <Image src={img} alt="Existing Preview" fill className="object-cover opacity-80" unoptimized />
                        <button type="button" onClick={() => removeExistingImage(index)} className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                          <Trash2 size={20} className="hover:text-red-500 transition-colors mb-1" />
                        </button>
                      </div>
                    ))}
                    {imagePreviews.map((preview, index) => (
                      <div key={`new-${index}`} className="relative aspect-square rounded-sm overflow-hidden border border-emerald-500/50 group bg-brand-black">
                        <Image src={preview} alt={`New Preview ${index}`} fill className="object-cover" unoptimized />
                        <button type="button" onClick={() => removeNewImage(index)} className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white z-20">
                          <Trash2 size={20} className="hover:text-red-500 transition-colors" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* DESCRIPTION & SPECIFICATIONS */}
            <div className="pt-6 border-t border-neutral-800 space-y-8">
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Description</label>
                <textarea name="description" required rows={4} value={formData.description} onChange={handleChange} placeholder="Describe the product..." className="w-full bg-brand-black border border-neutral-800 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"></textarea>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-silver mb-2">Specifications & Features (Optional)</label>
                {specifications.map((spec, index) => (
                  <div key={index} className="flex gap-4 mb-3">
                    <input
                      type="text"
                      placeholder="Attribute (e.g. Material)"
                      value={spec.key}
                      onChange={(e) => updateSpecification(index, 'key', e.target.value)}
                      className="w-1/3 bg-brand-black border border-neutral-800 rounded-sm px-4 py-2 text-white text-sm focus:border-brand-gold focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Value (e.g. Steel)"
                      value={spec.value}
                      onChange={(e) => updateSpecification(index, 'value', e.target.value)}
                      className="flex-1 bg-brand-black border border-neutral-800 rounded-sm px-4 py-2 text-white text-sm focus:border-brand-gold focus:outline-none"
                    />
                    <button type="button" onClick={() => removeSpecification(index)} className="text-neutral-500 hover:text-red-500 transition-colors px-2">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                
                <button type="button" onClick={addSpecification} className="text-brand-gold text-[10px] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1 mt-3 py-2 px-4 border border-brand-gold/30 hover:border-brand-gold rounded-sm rounded-sm">
                  <Plus size={14} /> Add Specification
                </button>
              </div>

            </div>

            <button type="submit" disabled={loading} className="w-full py-4 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-colors font-semibold flex justify-center items-center gap-2 disabled:opacity-50 mt-8">
              {loading ? (isEditing ? "Updating Database..." : "Uploading & Saving...") : <><Upload size={16} /> {isEditing ? "Update Product" : "Publish Product"}</>}
            </button>
          </form>
        </div>

        {/* BOTTOM SECTION: INVENTORY */}
        <div className="bg-brand-dark border border-neutral-900 rounded-sm p-8 md:p-10">
          <h2 className="font-serif text-2xl mb-8 border-b border-neutral-800 pb-4">Current Inventory</h2>
          
          {inventory.length === 0 ? (
            <p className="text-neutral-500 text-sm italic">No products found in the database.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-brand-silver">
                <thead className="text-xs uppercase tracking-widest text-neutral-500 bg-brand-black border-b border-neutral-800">
                  <tr>
                    <th className="px-4 py-3 font-medium">Product Name</th>
                    <th className="px-4 py-3 font-medium">Category</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((product) => (
                    <tr key={product.id} className="border-b border-neutral-800/50 hover:bg-brand-black/30 transition-colors">
                      <td className="px-4 py-4 text-white font-medium flex items-center gap-3">
                        <div className="w-10 h-10 relative bg-brand-black rounded-sm border border-neutral-800 overflow-hidden shrink-0">
                          <Image src={(product.images && product.images.length > 0) ? product.images[0] : "https://placehold.co/100x100"} alt="preview" fill className="object-cover" unoptimized />
                        </div>
                        {product.title}
                      </td>
                      <td className="px-4 py-4">{product.category}</td>
                      <td className="px-4 py-4">${product.price?.toLocaleString()}</td>
                      <td className="px-4 py-4 text-right">
                        <div className="flex justify-end gap-3">
                          <button onClick={() => handleEdit(product)} className="text-brand-gold hover:text-white transition-colors text-xs uppercase tracking-widest flex items-center gap-1">
                            <Edit3 size={14} /> Edit
                          </button>
                          <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-white transition-colors text-xs uppercase tracking-widest flex items-center gap-1">
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}