# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Laravel + React starter kit using Inertia.js for a seamless SPA-like experience. The stack includes:

- **Backend**: Laravel 12 with PHP 8.2+
- **Frontend**: React 19 with TypeScript
- **Bridge**: Inertia.js for server-side routing with React components
- **Styling**: Tailwind CSS v4 with Radix UI components
- **Testing**: Pest (PHP), TypeScript checking
- **Code Quality**: PHPStan, Pint, Rector, ESLint, Prettier

## Development Commands

### Start Development Environment

- `composer dev` - Starts full development stack (server, queue, logs, vite) with hot reload
- `composer dev:ssr` - Development with server-side rendering
- `npm run dev` - Vite dev server only
- `docker compose up -d` - Start PostgreSQL and Mailpit services

### Code Quality & Testing

- `composer test` - Run all tests (static analysis and Pest tests)
- `composer test:static` - All static analysis (format, lint, types, pint, phpstan, rector)
- `composer test:pest` - PHP tests only
- `npm run typecheck` - TypeScript checking
- `npm run lint:check` / `npm run lint:fix` - ESLint
- `npm run format:check` / `npm run format:fix` - Prettier

### Code Formatting & Analysis

- `composer pint:fix` - Fix PHP code style
- `composer rector:fix` - Apply PHP refactoring rules
- `composer test:phpstan` - Static analysis with PHPStan

### Building

- `npm run build` - Build frontend assets
- `npm run build:ssr` - Build with SSR support

## Architecture

### Directory Structure

- `app/Http/Controllers/` - Laravel controllers (Auth, Settings)
- `app/Http/Middleware/` - Custom middleware including `HandleInertiaRequests`
- `resources/js/pages/` - React page components rendered by Inertia
- `resources/js/components/` - Reusable React components
- `resources/js/layouts/` - Layout components (auth, app, settings, admin)
- `resources/js/hooks/` - Custom React hooks
- `routes/` - Laravel route files (web.php, auth.php, settings.php)

### Key Components

- **Inertia Integration**: `HandleInertiaRequests` middleware shares data like user, ziggy routes, sidebar state
- **Authentication**: Built-in auth controllers with email verification
- **UI Components**: Radix UI and Tailwind with custom components in `resources/js/components/ui/`
- **Theming**: Light/dark mode support with appearance hooks

### Database & Services

- **PostgreSQL**: Primary database (Docker container)
- **Mailpit**: Email testing (http://localhost:8025)
- **Queue**: Laravel queue system for background jobs

### Frontend Architecture

- **Page Resolution**: Inertia resolves `./pages/${name}.tsx` components
- **Routing**: Server-side routing with Laravel, client-side navigation with Inertia
- **State Management**: Inertia props, React state, appearance theme persistence
- **Type Safety**: Full TypeScript support with Laravel Ziggy route types

### Code Standards

- **PHP**: PSR-12 via Pint, strict types declarations, PHPStan level enforcement
- **TypeScript**: Strict mode, ESLint with React hooks rules
- **Git Hooks**: Husky and lint-staged for pre-commit quality checks

## Commit Message Guidelines

Write clear, concise git commit messages following the conventional commit format:

- Use conventional commit format: `<type>(<scope>): <subject>`
- Write a subject line in an imperative mood (e.g., "fix bug" not "fixed bug")
- Keep the subject line lowercase except for proper nouns and acronyms
- Limit subject line to 72 characters maximum
- Omit commit message body - keep commits concise
- Do not end the subject line with a period
- Use common commit types: feat, fix, docs, style, refactor, test, chore

## Code Quality Requirements

When any code changes or tasks are completed, ensure respective code quality checks are performed:

- **PHP changes**: Run `composer test:static` (includes pint, phpstan, rector checks)
- **TypeScript/React changes**: Run `npm run typecheck`, `npm run lint:check`, `npm run format:check`
- **All changes**: Run `composer test` to ensure full test suite passes
- **Before commits**: Pre-commit hooks will automatically run lint-staged checks

## Important Notes

- Pages are React components in `resources/js/pages/` that receive props from Laravel controllers
- All routes defined in Laravel route files, not React Router
- Shared data (user, ziggy, etc.) available in all components via Inertia props
- Theme state persisted via cookies and handled by `use-appearance` hook
- Tests use the Pest framework with Laravel-specific assertions
