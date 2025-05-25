import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination';
import { PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination-link';
import AdminLayout from '@/layouts/admin-layout';
import type { BreadcrumbItem, User } from '@/types';
import { Head } from '@inertiajs/react';
import { columns } from './columns';
import { DataTable } from './data-table';

type PaginationLinks = {
    url: string | null;
    label: string;
    active: boolean;
};

type UsersPageProps = {
    result: {
        data: User[];
        current_page: number;
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: PaginationLinks[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/admin/users',
    },
];

export default function Users({ result }: UsersPageProps) {
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="rounded-md border">
                    <DataTable columns={columns} data={result.data} />
                    <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-muted-foreground text-sm">
                            {result.total > 0 ? `Showing ${result.from} to ${result.to} of ${result.total} results` : 'No results'}
                        </p>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href={result.prev_page_url || undefined} disabled={!result.prev_page_url} />
                                </PaginationItem>
                                {result.links
                                    .filter((link: PaginationLinks) => !['&laquo; Previous', 'Next &raquo;'].includes(link.label))
                                    .map((link: PaginationLinks) => (
                                        <PaginationItem key={link.label}>
                                            <PaginationLink href={link.url || undefined} isActive={link.active} disabled={!link.url}>
                                                {link.label}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                <PaginationItem>
                                    <PaginationNext href={result.next_page_url || undefined} disabled={!result.next_page_url} />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
