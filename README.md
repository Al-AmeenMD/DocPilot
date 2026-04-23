# DocPilot

DocPilot is an AI-powered document chat application built with Next.js 14, Prisma, Supabase, and OpenAI.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- Supabase
- OpenAI

## Notes

- Local secrets live in `.env.local` and are ignored by git.
- Prisma-managed schema lives in `prisma/schema.prisma`.
- Supabase vector setup SQL lives in `supabase/setup_pgvector.sql`.
