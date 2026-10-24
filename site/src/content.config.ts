import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { DOMAIN_IDS } from './data/ontology';

const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(2),
    summary: z.string().min(6),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    domain: z.enum(DOMAIN_IDS),
    subdomains: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    kind: z.enum(['concept', 'proof', 'research', 'argument', 'inquiry', 'reading', 'experiment', 'project', 'reflection']),
    claim: z.enum(['formal', 'empirical', 'interpretive', 'normative', 'personal', 'mixed']),
    question: z.enum(['decidable', 'open', 'mixed']),
    evidence: z.enum(['established', 'supported', 'contested', 'tentative', 'notApplicable']),
    sources: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
      role: z.enum(['primary', 'secondary', 'background']).default('background')
    })).default([]),
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    sample: z.boolean().default(false),
    originalUrl: z.string().url().optional()
  })
});

export const collections = { entries };
