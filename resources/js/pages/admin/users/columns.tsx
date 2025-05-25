import { type User } from '@/types';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
];
