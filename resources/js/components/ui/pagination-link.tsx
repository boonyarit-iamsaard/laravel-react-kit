import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface PaginationLinkProps {
    href?: string;
    isActive?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function PaginationLink({
    href,
    isActive,
    disabled,
    children,
    className,
    size = 'icon',
    ...props
}: PaginationLinkProps) {
    const classes = cn(
        buttonVariants({
            variant: isActive ? 'outline' : 'ghost',
            size,
        }),
        className
    );

    if (!href || disabled) {
        return (
            <span
                className={classes}
                data-state={isActive ? 'active' : undefined}
                data-disabled={disabled || undefined}
                {...props}
            >
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            preserveScroll
            className={classes}
            data-state={isActive ? 'active' : undefined}
            {...props}
        >
            {children}
        </Link>
    );
}

export function PaginationPrevious({
    className,
    href,
    disabled,
    ...props
}: PaginationLinkProps) {
    return (
        <PaginationLink
            href={href}
            disabled={disabled}
            size="default"
            className={cn('gap-1 px-2.5', className)}
            aria-label="Go to previous page"
            {...props}
        >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="hidden sm:block">Previous</span>
        </PaginationLink>
    );
}

export function PaginationNext({
    className,
    href,
    disabled,
    ...props
}: PaginationLinkProps) {
    return (
        <PaginationLink
            href={href}
            disabled={disabled}
            size="default"
            className={cn('gap-1 px-2.5', className)}
            aria-label="Go to next page"
            {...props}
        >
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon className="h-4 w-4" />
        </PaginationLink>
    );
}
