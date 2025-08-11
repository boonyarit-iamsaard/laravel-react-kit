import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';

export default function Home() {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 overflow-x-auto rounded-xl p-4">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">Welcome to Laravel React Kit</h1>
                    <p className="text-lg text-muted-foreground">A modern Laravel application with React and TypeScript</p>
                </div>
            </div>
        </AppLayout>
    );
}
