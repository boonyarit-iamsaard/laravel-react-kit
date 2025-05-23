import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative grid aspect-video place-items-center overflow-hidden rounded-xl border">
                    <PlaceholderPattern className="stroke-muted dark:stroke-muted absolute inset-0 size-full" />
                    <h1 className="z-10 text-2xl font-bold">Welcome</h1>
                </div>
            </div>
        </AppLayout>
    );
}
