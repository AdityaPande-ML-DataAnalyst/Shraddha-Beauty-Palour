import type { Metadata } from 'next';
import AdminPageClient from '@/components/admin/AdminPageClient';

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminPageClient />;
}
