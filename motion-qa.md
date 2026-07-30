# Sourcixa Scroll Motion QA

## Reference direction

- Lux Capital: sticky full-viewport storytelling, scroll-driven active states and persistent navigation.
- Blackbird: layered movement, bold scene transitions and contrasting motion speeds.
- Sourcixa adaptation: restrained SaaS motion using progress, counter-parallax, staggered reveals and a sticky evidence story. No reference visual styling was copied.

## Implementation evidence

- Desktop opening state: `qa/motion-desktop-top.png`
- Desktop scrolled state: `qa/motion-desktop-scroll.png`
- Sticky evidence state: `qa/motion-evidence-sticky.png`
- Mobile opening state: `qa/motion-mobile-top.png`

## Verified behavior

- The 2px top progress line changed from scale 0 at page start to a non-zero scale while scrolling.
- Hero copy and workflow moved at different controlled speeds without changing document flow.
- Problem cards, team cards, product cards and section headers entered in staggered groups.
- The decision-evidence section remained pinned on desktop while the active state changed from supplier sources to RFQ comparison.
- Buyer-outcome buttons retained click behavior and accessible `aria-pressed` states.
- At 390px, the document width remained 390px with no horizontal page overflow.
- Mobile scroll progress updated correctly.
- Browser console errors: 0.
- Targeted ESLint: passed.
- Production build: passed.

## Accessibility and performance

- `prefers-reduced-motion: reduce` disables smooth scrolling, long animation durations and parallax/reveal movement.
- Scroll effects use Motion values and transforms rather than synchronous scroll listeners or layout writes.
- Animations run once where repetition does not add value.

## React review

- Shared hooks are declared unconditionally.
- Static data remains module-scoped.
- No new data fetching, global listeners or render-time DOM access was introduced.
- Scroll-driven state updates resolve to three primitive states and React ignores identical state assignments.

final result: passed
