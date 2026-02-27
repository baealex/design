# AI Design Reference Guide

## Goal
Provide a deterministic workflow for selecting and applying design references from this repository.

## Read Order (Mandatory)
1. `ai/README.md`
2. `ai/task-profiles.json`
3. `ai/design-manifest.json`
4. Selected HTML references: `src/pages/<slug>/index.html`
5. `ai/output-checklist.md`

## Manifest Generation
Use CLI command:

```bash
npm run ai:manifest
```

This regenerates `ai/design-manifest.json` from `src/pages/*/index.html`.

## Selection Algorithm
1. Classify the request to one `taskProfileId` from `ai/task-profiles.json`.
2. Pick top 1-2 slugs from that profile.
3. Validate slugs exist in `ai/design-manifest.json`.
4. Read selected HTML and extract concrete decisions for:
   - typography
   - color and surface
   - spacing and layout
   - motion and interaction
5. Apply principles, not direct visual copying.

## Output Contract (Must Include)
- `design profile: <taskProfileId>`
- `design refs: <slug1>, <slug2>`
- `applied decisions: <3-6 concrete points>`

## Guardrails
- Use at most 2 references per screen by default.
- Keep accessibility consistency over visual novelty.
