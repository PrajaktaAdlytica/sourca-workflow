# Sourcixa Decision Evidence Design QA

## Comparison setup

- Source visual truth: `/Users/prajaktagaikwad/.codex/generated_images/019fb3e3-6997-73d1-8fb7-48df8b3bd93d/call_G9VYVfYXdWCSpBI5iubL3gX4.png`
- Implementation screenshots:
  - `qa/decision-evidence-desktop-final.png`
  - `qa/decision-evidence-mobile-final.png`
- Combined comparison evidence: `qa/decision-evidence-comparison-final.png`
- Source pixels: 1568 × 1003.
- Desktop implementation: 1440 × 1000 px at a 1440 × 1000 CSS viewport and device scale factor 1.
- Mobile implementation: 390 × 844 px at a 390 × 844 CSS viewport and device scale factor 1.
- Density normalization: source and desktop implementation were each fitted to 1440 × 920 without cropping and placed side by side for comparison.
- State: light theme, unauthenticated homepage, supplier-evidence view selected on desktop and RFQ-comparison view selected on mobile.

## Full-view comparison

The implementation preserves the selected concept’s asymmetric composition: explanatory outcomes on the left and one dominant supplier-decision workspace on the right. It retains the Sourcixa navigation, warm dotted canvas, near-black typography, burnt-orange actions, teal evidence states and restrained enterprise UI treatment.

The implementation intentionally replaces the source mock’s decorative connector lines with an interactive focus model. Selecting a buyer outcome highlights the corresponding evidence area. This carries the same explanatory relationship into a responsive layout without forcing desktop connector geometry onto mobile.

## Focused region comparison

- Left story: eyebrow, headline, supporting copy and three buyer promises follow the source hierarchy. The implementation wraps the desktop heading across four lines instead of three because it stays within the project’s existing 1280px content container; this is acceptable responsive adaptation.
- Supplier workspace: source-labelled company facts, freshness timestamps, explainable risk signals, RFQ rows and an owned remediation action match the selected content model.
- Workspace controls: Share, Contact supplier and More actions are present on desktop. Compact mobile hides the secondary actions while keeping the overflow action.
- Mobile: the promises become a clear vertical interaction sequence, the product canvas uses a single-column information hierarchy, and tables retain controlled internal horizontal scrolling without page overflow.

## Required fidelity surfaces

- Fonts and typography: passed. Existing Inter hierarchy, weights, tracking and antialiasing are retained; the selected mock’s clean sans-serif heading treatment is implemented.
- Spacing and layout rhythm: passed. Major region proportions, vertical grouping, radii, shadows and information density match the target. Mobile reflows without compressed two-column UI.
- Colors and visual tokens: passed. Existing Sourcixa orange, teal, near-black, neutral surfaces and semantic risk states are used consistently.
- Image quality and asset fidelity: passed. The existing SVG Sourcixa logo and favicon are reused sharply. No source visual required additional raster imagery or decorative illustration.
- Copy and content: passed. Visible data is labelled as illustrative and synthetic. Supplier sources, update freshness, risk methodology access, comparison inputs, ownership and due state are explicit without unsupported performance claims.

## Comparison history

### Iteration 1

- [P2] The initial implementation used an editorial orange treatment for part of the heading, while the selected mock used a single sans-serif heading.
- [P2] Share and Contact supplier controls visible in the source were missing from the workspace header.
- Fixes: changed the heading to a unified sans-serif treatment; added Share and Contact supplier controls; replaced the temporary sidebar letter mark with the actual Sourcixa favicon.
- Post-fix evidence: `qa/decision-evidence-comparison-final.png`.

### Iteration 2

- No remaining actionable P0, P1 or P2 differences.

## Interaction and technical checks

- Each of the three buyer promises sets an accessible `aria-pressed` state and highlights its matching workspace evidence.
- RFQ comparison selection was tested at 390 × 844 and returned `aria-pressed="true"`.
- Desktop and mobile rendered with zero browser-console errors.
- Targeted ESLint for the changed route and component: passed.
- Production build: passed.

## Follow-up polish

- P3: optional animated connector strokes could be explored later, but the current focus interaction is clearer and more robust on responsive screens.

final result: passed

---

# Sourcixa Cinematic Entry Design QA

## Comparison setup

- Source visual truth:
  - Evidence Loom: `/Users/prajaktagaikwad/.codex/generated_images/019fb3e3-6997-73d1-8fb7-48df8b3bd93d/call_UM5B1AZydC2rpo3TzqIC6fg1.png`
  - Risk Revealed: `/Users/prajaktagaikwad/.codex/generated_images/019fb3e3-6997-73d1-8fb7-48df8b3bd93d/call_EfiELf5NyPW4TW7si90KQDAO.png`
- Browser-rendered implementation:
  - `qa/cinematic-entry-loom-desktop.png`
  - `qa/cinematic-entry-risk-desktop.png`
  - `qa/cinematic-entry-loom-mobile.png`
  - `qa/cinematic-entry-risk-mobile.png`
- Combined source / implementation evidence: `qa/cinematic-entry-comparison-board.png`.
- Source pixels: 1586 × 992 for both selected concepts.
- Implementation captures: 1280 × 720 Evidence Loom desktop, 1600 × 1170 Risk Revealed desktop, and 390 × 844 for both mobile states at device scale factor 1.
- Density normalization: both desktop states were fitted without cropping into equal-width 16:10 comparison frames on the combined board. Mobile captures were reviewed at their native 390 × 844 size.
- State: unauthenticated homepage, full-screen cinematic entry at scroll position 0, with each film selected in turn.

## Full-view comparison

Both implementations preserve the selected visual thesis, material palette, scene composition and text hierarchy. Evidence Loom retains its warm porcelain environment, tactile supplier lanes, copper evidence threads, orange exception knot and teal verification edge. Risk Revealed retains its black metrology table, precise manufactured samples, scanning light, teal verification points and orange internal fracture.

The implementation intentionally adds the requested two-choice film selector at the bottom of the frame. It remains visually subordinate to the cinematic object, uses the selected concept’s light or dark surface treatment, and does not change the existing Sourcixa hero or sections below.

## Focused region comparison

- Typography: Inter and Instrument Serif reproduce the selected sans / editorial contrast. The Risk Revealed title now preserves the source’s deliberate four-line desktop rhythm.
- Navigation: the existing Sourcixa navigation remains structurally unchanged and automatically changes to the light logo and white controls over the dark film.
- Controls: Enter Sourcixa, Pause/Play motion and the two film tabs are live HTML controls rather than baked imagery. Focus, selected and pressed states remain visible in both themes.
- Motion: both 1920 × 1080, 8.04-second silent loops load at ready state 4 and play inline. The switch uses a restrained 1.1-second crossfade while the message transitions with matching editorial easing.
- Mobile: imagery is art-directed with concept-specific object position, the selector stacks into two large tap targets, the page has no horizontal overflow, and a mobile contrast veil keeps the headline readable without hiding the film.

## Required fidelity surfaces

- Fonts and typography: passed. Family, weight, italic accent, title wrapping, tracking and hierarchy match the selected concepts.
- Spacing and layout rhythm: passed. Full-screen framing, navigation alignment, negative space, CTA grouping and selector placement are balanced across desktop and mobile.
- Colors and visual tokens: passed. Sourcixa orange and teal are retained with the concepts’ porcelain and graphite environments.
- Image quality and asset fidelity: passed. Both visual plates are original high-resolution ImageGen assets. Motion films render at 1920 × 1080 H.264 with physically convincing materials and no visible placeholder art.
- Copy and content: passed. The entry communicates evidence, shortlisting and risk without unsupported metrics, fake customers or fake certifications.

## Comparison history

### Iteration 1

- [P2] At the compact mobile viewport, the title and controls competed with the detailed film background.
- Fix: moved the entry to dynamic viewport sizing, refined top spacing and added a restrained mobile-only contrast veil.
- Post-fix evidence: `qa/cinematic-entry-loom-mobile.png` and `qa/cinematic-entry-risk-mobile.png`.

### Iteration 2

- [P2] The desktop Risk Revealed title originally resolved to three lines rather than the selected visual’s four-line editorial cadence.
- Fix: narrowed the desktop risk title measure and enforced the intended line break before “show.”
- Post-fix evidence: `qa/cinematic-entry-risk-desktop.png`.

### Iteration 3

- No remaining actionable P0, P1 or P2 visual differences.

## Interaction and technical checks

- Both selector tabs update `aria-selected` and crossfade to the corresponding film and copy.
- Arrow-key tab navigation moves focus and selection between films with the expected roving `tabIndex`.
- Pause motion changes to Play motion with `aria-pressed="true"` and resumes correctly.
- Both videos report 1920 × 1080 dimensions, 8.04-second duration, ready state 4 and active playback.
- The mobile navigation opens and closes correctly over both entry themes.
- Desktop and mobile have no page-level horizontal overflow.
- A fresh browser session reported zero console errors or warnings after the final polish.
- Reduced-motion users receive the same art direction as static posters without autoplay.

final result: passed
