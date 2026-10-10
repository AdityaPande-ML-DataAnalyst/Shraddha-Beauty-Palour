'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { GALLERY_CATEGORIES, type GalleryCategoryId } from '@/lib/galleryCategories';
import { useAdminAuth } from '@/context/AdminAuthContext';

type GalleryRecord = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  cloudinaryPublicId: string;
  order?: number;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function AdminPageClient() {
  const { user, loading, login, logout } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [galleryItems, setGalleryItems] = useState<GalleryRecord[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategoryId>(GALLERY_CATEGORIES[0].id);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? '';

  useEffect(() => {
    if (!user || !db) {
      setGalleryItems([]);
      return;
    }

    const q = query(collection(db, 'galleryItems'), orderBy('category'), orderBy('order'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((docSnap: QueryDocumentSnapshot) => ({
          id: docSnap.id,
          ...(docSnap.data() as Omit<GalleryRecord, 'id'>),
        }));
        setGalleryItems(items);
      },
      (error) => {
        console.error('Unable to fetch gallery items:', error);
      },
    );

    return () => unsubscribe();
  }, [user]);

  const categoryOptions = useMemo(() => GALLERY_CATEGORIES, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError('');

    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUploadError('');
    setSuccessMessage('');

    if (!db) {
      setUploadError('Firebase has not been configured yet. Add your environment values to enable uploads.');
      return;
    }

    if (!file) {
      setUploadError('Please choose an image file to upload.');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setUploadError('Only image files are allowed.');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setUploadError('Please select an image under 10MB.');
      return;
    }

    if (!cloudName || !uploadPreset) {
      setUploadError('Cloudinary upload settings are not configured yet.');
      return;
    }

    if (!title.trim()) {
      setUploadError('Please enter a title for the gallery image.');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);

      const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const uploadResult = await uploadResponse.json();

      if (!uploadResponse.ok || !uploadResult?.secure_url || !uploadResult?.public_id) {
        throw new Error(uploadResult?.error?.message || 'Cloudinary upload failed.');
      }

      try {
        await addDoc(collection(db, 'galleryItems'), {
          imageUrl: uploadResult.secure_url,
          cloudinaryPublicId: uploadResult.public_id,
          title: title.trim(),
          category: selectedCategory,
          order: Date.now(),
          createdAt: serverTimestamp(),
        });

        setSuccessMessage('Gallery image uploaded successfully.');
        setTitle('');
        setSelectedCategory(GALLERY_CATEGORIES[0].id);
        setFile(null);
      } catch (firestoreError) {
        console.error('Firestore write failed after upload:', firestoreError);
        setUploadError(
          'The image uploaded successfully, but the gallery record could not be saved. Please try again.',
        );
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadError('Image upload failed. Please check the file and try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (itemId: string) => {
    if (!db) {
      setUploadError('Firebase has not been configured yet.');
      return;
    }

    const confirmed = window.confirm('Delete this gallery item?');
    if (!confirmed) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'galleryItems', itemId));
      setSuccessMessage('Gallery item deleted.');
    } catch (error) {
      console.error('Delete failed:', error);
      setUploadError('Unable to delete the gallery item right now.');
    }
  };

  if (loading) {
    return <div className="min-h-[50vh] flex items-center justify-center text-sm text-slate-600">Loading admin access…</div>;
  }

  if (!user) {
    return (
      <div className="min-h-[70vh] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-md rounded-2xl border border-cream-200 bg-white p-6 shadow-soft">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-700">Owner Access</p>
          <h1 className="mb-6 text-2xl font-bold text-slate-900">Admin Login</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-cream-300 bg-cream-50 px-3 py-2.5 text-sm text-slate-800 outline-none ring-0 transition focus:border-primary-300 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-cream-300 bg-cream-50 px-3 py-2.5 text-sm text-slate-800 outline-none ring-0 transition focus:border-primary-300 focus:bg-white"
                required
              />
            </div>

            {loginError ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{loginError}</p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-cream-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-cream-200 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-700">Owner Dashboard</p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">Admin Gallery Manager</h1>
          </div>

          <button
            type="button"
            onClick={() => logout()}
            className="rounded-xl border border-cream-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-200 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          <section className="rounded-2xl border border-cream-200 bg-white p-5 shadow-soft">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Upload image</h2>

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label htmlFor="gallery-image" className="mb-1 block text-sm font-semibold text-slate-700">
                  Image file
                </label>
                <input
                  id="gallery-image"
                  type="file"
                  accept="image/*"
                  onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                  className="block w-full rounded-xl border border-dashed border-cream-300 bg-cream-50 px-3 py-2.5 text-sm text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-primary-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-primary-700"
                />
              </div>

              <div>
                <label htmlFor="gallery-title" className="mb-1 block text-sm font-semibold text-slate-700">
                  Title
                </label>
                <input
                  id="gallery-title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Example: Bridal Styling"
                  className="w-full rounded-xl border border-cream-300 bg-cream-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-primary-300 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="gallery-category" className="mb-1 block text-sm font-semibold text-slate-700">
                  Category
                </label>
                <select
                  id="gallery-category"
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value as GalleryCategoryId)}
                  className="w-full rounded-xl border border-cream-300 bg-cream-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-primary-300 focus:bg-white"
                >
                  {categoryOptions.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {(uploadError || successMessage) && (
                <div
                  className={`rounded-xl border px-3 py-2 text-sm ${
                    uploadError
                      ? 'border-red-200 bg-red-50 text-red-700'
                      : 'border-green-200 bg-green-50 text-green-700'
                  }`}
                >
                  {uploadError || successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={uploading}
                className="w-full rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary-300"
              >
                {uploading ? 'Uploading…' : 'Upload to gallery'}
              </button>
            </form>
          </section>

          <section className="rounded-2xl border border-cream-200 bg-white p-5 shadow-soft">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Existing gallery items</h2>

            {galleryItems.length === 0 ? (
              <div className="rounded-xl border border-dashed border-cream-300 bg-cream-50 p-4 text-sm text-slate-600">
                No gallery items yet. Upload the first photo to start the live gallery.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {galleryItems.map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-xl border border-cream-200 bg-cream-50">
                    <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
                      <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>

                    <div className="space-y-3 p-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary-700">
                          {GALLERY_CATEGORIES.find((category) => category.id === item.category)?.label || item.category}
                        </p>
                        <h3 className="mt-1 text-sm font-semibold text-slate-900">{item.title}</h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        className="w-full rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        Delete
                      </button>

                      <p className="text-[11px] text-slate-600">
                        Removes from the website gallery. The original file remains safely stored in Cloudinary.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
