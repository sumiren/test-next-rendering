This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Then, you can test how each rendering method works.

## Caution

Remember that you **shouldn't use** `next dev` command when you like to test rendering methods, because next dev server puts a twist on rendering.<br>
For example, even if you requested a static-generated page, next dev server always server-side-renders the page in order to reflect your changes seamlessly.
