import { usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';

import AdminSidebarLayout from '@/layouts/app/admin-sidebar-layout';
import type { BreadcrumbItem, SharedData } from '@/types';

interface AdminLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({ children, breadcrumbs, ...props }: AdminLayoutProps) {
    const { auth } = usePage<SharedData>().props;

    // Require authentication for admin layout
    // TODO: the typescript guarantee user here, but actual behavior need to be confirmed
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!auth.user) {
        // This will be handled by Laravel middleware, but adding check for type safety
        return null;
    }

    return (
        <AdminSidebarLayout breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AdminSidebarLayout>
    );
}
