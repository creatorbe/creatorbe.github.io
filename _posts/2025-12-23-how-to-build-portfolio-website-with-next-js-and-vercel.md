---
layout: post
title: "Building a Portfolio site with Next.js and Vercel"
date: 2025-10-09 23:00:13 +0700
categories: [programming]
description: "A step-by-step guide to creating a clean portfolio website"
---

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

اَلْحَمْدُ للّٰهِ رَبِّ العَالَمِيْنَ والعاقبة للمتقين

وَالصَّلاَةُ وَالسَّلَامُ عَلىَ إمام الْمُرْسَلِيْنَ،نبيين مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ اَجْمَعِيْنَ

ربى اشرح لى صدرى ويسر لى امرى واحلل عقدة من لسانى يفقهو قولي 

اللّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ، وَمِنْ قَلْبٍ لاَ يَخْشَعُ، وَمِنْ نَفْسٍ لاَ تَشْبَعُ، وَمِنْ دَعْوَةٍ لاَ يُسْتَجَابُ لَهَا

اَمَّا بَعْدُ


### Muslim Intro : QS. Ash-Sharh (Al-Insyirah) - 94:7
فَإِذَا فَرَغْتَ فَٱنصَبْ


> When you have completed your affairs and obligations (both worldly and deen akhirah) then devote yourself diligently to worship. And supplicate, to your Lord alone, hoping for what lies with Him.

> An educator once said: “On the last day of my exams, I was thinking about all the things I would do during the holidays : sleeping, playing, joking around, and so on. Suddenly, my thoughts were interrupted by the voice of the Imam leading the Maghrib prayer, reciting:
{ So when you have finished [your duties], then stand up [for worship]. And to your Lord direct [your] longing. } (Quran 94:7–8)
At that moment, I realized that a Muslim should never cease being in a state of obedience to Allah. Rather, one should move from one act of obedience to another.”

> If someone says: “If I were serious all the time in my life, I would surely grow tired and bored.” and We respond: Your rest to regain your energy is itself a form of engagement and deed—that is, being occupied does not always mean being in motion. Your rest to renew your vigor for other tasks is also an act. What matters is that you consistently make your entire life one of seriousness and work.

_"hanya kepada Allah kita meminta, semoga lelah kita lillah"_

 رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ

---
# A step-by-step guide to creating a clean portfolio website

## Introduction

As developers, our portfolio is often the first impression we make on potential employers or clients. In this post, I'll walk you through how I built my personal portfolio website using **Next.js 16**, **Tailwind CSS v4**, and deployed it on **Vercel** — all with a minimalist, terminal-inspired aesthetic that screams "I'm an engineer."

**Live Demo:** [creatorbe.vercel.app](https://creatorbe.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Theme:** next-themes (Dark/Light mode)
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Font:** System monospace

---

## Step 1: Setting Up the Project

First, create a new Next.js project:

```bash
npx create-next-app@latest my-vercel
```

Select the following options:
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ ESLint
- ✅ App Router
- ❌ src/ directory (optional, I used it)
- ❌ Import alias customization

Navigate to your project:

```bash
cd my-vercel
```

---

## Step 2: Install Dependencies

Install the required packages for theming:

```bash
npm install next-themes lucide-react
```

---

## Step 3: Configure Tailwind CSS v4 for Dark Mode

In Tailwind CSS v4, dark mode configuration is different. Update your `globals.css`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

This enables the `dark:` variant to work with class-based dark mode.

---

## Step 4: Create the Theme Provider

Create `src/components/theme-provider.tsx`:

```tsx
"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

---

## Step 5: Create the Theme Toggle

Create `src/components/theme-toggle.tsx`:

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded border border-neutral-300 dark:border-neutral-700" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center w-8 h-8 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-500" />
      ) : (
        <Moon className="h-4 w-4 text-neutral-600" />
      )}
    </button>
  );
}
```

> **Important:** Use `resolvedTheme` instead of `theme` to get the actual theme value, especially when `enableSystem` is true.

---

## Step 6: Setup the Root Layout

Update `src/app/layout.tsx`:

```tsx
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name - Developer Portfolio",
  description: "Your description here",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0d1117]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## Step 7: Design Philosophy — Terminal Aesthetic

I wanted my portfolio to feel like a developer's natural habitat: **the terminal**. Here's the design approach:

### Monospace Font
```tsx
<div className="font-mono">
```

### Terminal-style Header
```tsx
<span className="text-green-600 dark:text-green-400">~/creatorbe</span>
```

### Command-style About Section
```tsx
<div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg border">
  {/* Terminal window dots */}
  <div className="flex items-center gap-2 px-4 py-2 bg-neutral-200 dark:bg-neutral-800">
    <div className="w-3 h-3 rounded-full bg-red-500" />
    <div className="w-3 h-3 rounded-full bg-yellow-500" />
    <div className="w-3 h-3 rounded-full bg-green-500" />
    <span className="ml-2 text-xs text-neutral-500">about.sh</span>
  </div>

  {/* Terminal content */}
  <div className="p-4 text-sm">
    <p className="text-green-600 dark:text-green-400">$ whoami</p>
    <p className="text-neutral-600 dark:text-neutral-400 mt-1">
      A Software Engineer with expertise in building scalable applications...
    </p>
  </div>
</div>
```

### Markdown-style Headings
```tsx
<h2 className="text-lg font-bold flex items-center gap-2">
  <span className="text-green-600 dark:text-green-400">#</span> Tech Stack
</h2>
```

### Config-file Style Tech Lists
```tsx
<div className="border-l-2 border-green-500 pl-4">
  <p>
    <span className="text-cyan-600 dark:text-cyan-400">frontend:</span>
    Next.js, React.js, TypeScript
  </p>
</div>
```

---

## Step 8: The Matrix Banner

To add that extra "nerd" touch, I used a Matrix-style animated GIF as a banner:

```tsx
<div className="w-full h-48 sm:h-64 relative overflow-hidden">
  <Image
    src="https://raw.githubusercontent.com/CreatorB/creatorb/main/creatorbe-hasanbasri-matrix.gif"
    alt="Matrix Banner"
    fill
    className="object-cover opacity-60 dark:opacity-40"
    unoptimized
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#0d1117]" />
</div>
```

The gradient overlay creates a smooth fade into the content below.

---

## Step 9: Deploy to Vercel

Deploying to Vercel is incredibly simple:

### Option 1: Via GitHub Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel automatically detects Next.js and configures everything.

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

---

## Step 10: Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Key Takeaways

1. **Tailwind CSS v4** requires `@custom-variant` for dark mode with classes
2. **Use `resolvedTheme`** from next-themes for reliable theme detection
3. **Monospace fonts** give that authentic developer feel
4. **Subtle animations** (like the Matrix banner) add personality without being distracting
5. **Vercel deployment** is literally one-click with GitHub integration

---

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
```

---

## Final Thoughts

Building a portfolio doesn't have to be complicated. With Next.js and Tailwind CSS, you can create something that's both **functional** and **expressive** of your personality as a developer.

The terminal aesthetic isn't just about looking cool—it's a statement that says *"I live in the command line, and I'm proud of it."*

Feel free to fork my repository and make it your own!

---

**Source Code:** [github.com/CreatorB/my-vercel](https://github.com/CreatorB/my-vercel)

**Live Site:** [creatorbe.vercel.app](https://creatorbe.vercel.app)

---
اَللّٰهُ أَعْلَم

_al-faqiir ilaa rahmatillahi ta'ala_

✎ Hasan B

◉ Kiunara, KP Tengah, Cileungsi, Bogor, West Java, Indonesia

📅 Tuesday, 4 Rajab 1447 H, 22:10
