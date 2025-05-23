import AdminSidebarLayout from '@/layouts/admin/admin-sidebar-layout';
import type { BreadcrumbItem } from '@/types';
import type { ReactNode } from 'react';

type AdminLayoutProps = {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

export default ({ children, breadcrumbs, ...props }: AdminLayoutProps) => (
    <AdminSidebarLayout breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AdminSidebarLayout>
);
