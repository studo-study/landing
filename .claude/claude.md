You are working on the Studo landing page and pricing experience.

First inspect the repository and understand the existing Astro/component structure, routes, styles, animations and conventions. Do not rewrite the architecture. Preserve the current visual identity: minimal, premium, white space, green accents, study cards and editorial/product-led feel.

Work through the priorities below. Fix clear technical and visual issues directly. For subjective product decisions, make the smallest sensible improvement and document what you changed. Do not invent backend functionality or change pricing entitlements without making that explicit.

Pages to inspect:
- /
- /select
- /pricing
- /about
- /changelog
- /contact
- /terms-of-service
- /privacy
- /gdpr

==================================================
P0 — FIX FIRST: BROKEN OR HIGH-VISIBILITY ISSUES
==================================================

1. Fix all registration CTA URLs

The following URL is currently malformed or inconsistent:

www.studo.spaces/register

Use the same canonical registration URL as the header:

https://www.spaces.studo.study/register

Audit every CTA, including:
- Header Register
- Hero “start for free”
- Hero “sign in”
- Free plan “get started free”
- Select “Sign Up”
- Group “Start a Group”
- Institution “Contact Sales”
- Bottom landing CTA “create free account”

Every CTA must either:
- have a valid href;
- use a clearly implemented client-side action;
- or be removed/replaced if the destination does not exist.

Do not leave buttons that visually look actionable but do nothing.

2. Fix the empty Sven capabilities/demo frame

On the landing page, the “Explore Sven’s capabilities” section can render a large empty white frame with only a very faint placeholder label, even after waiting for the animation to load.

Investigate the actual cause:
- scroll-driven animation state not being triggered;
- skipped scroll thresholds when jumping through the page;
- asset loading;
- hydration/client-side script issues;
- incorrect initial state;
- race conditions;
- failed imports;
- missing fallback content.

The section must never show an unexplained blank frame.

Requirements:
- Ensure it renders correctly during normal incremental scrolling.
- Ensure it also has a useful static fallback if JavaScript or the animation fails.
- Keep the animation when it works.
- Make the active content readable at normal desktop and mobile sizes.
- Do not rely exclusively on scroll events that can be skipped by fast scrolling.
- Respect prefers-reduced-motion and show the static state when necessary.

3. Fix hero headline overlap

At approximately 1280–1310px desktop width, the hero visual cards overlap and visually cut off the second line of:

“One space
for everything you study”

The complete headline must remain readable at:
- 1280px;
- 1366px;
- 1440px;
- 1536px;
- tablet widths;
- mobile widths.

Possible solutions:
- reserve more width for the text column;
- lower the visual cards behind the text;
- adjust card positions at desktop breakpoints;
- reduce card scale at intermediate widths;
- change the headline max-width;
- move the visual composition slightly right;
- use a different mobile composition.

Do not solve this by simply shrinking the headline until it loses impact.

4. Fix sticky-header overlap and clipped section headings

During scroll-driven sections, headings near the top of the viewport can be partially hidden underneath the sticky navigation.

Audit all scroll-triggered sections and fix this using the correct combination of:
- scroll-margin-top;
- section offsets;
- sticky header height awareness;
- animation start/end positions;
- safe top padding;
- responsive adjustments.

This must be fixed for:
- the product demo sections;
- the Core section;
- Sven capabilities;
- FAQ;
- CTA transitions.

5. Correct pricing calculations

Current prices:

Monthly:
- Individual: €9.99/month
- Group: €34.99/month

Yearly:
- Individual: €79.99/year
- Group: €359.99/year

Calculate all displayed equivalents and discounts from the actual values instead of hardcoding them.

Expected values:
- Individual annual equivalent is approximately €6.67/month, not €6.66 if standard rounding is used.
- Group annual equivalent is approximately €30.00/month, not €29.99 if standard rounding is used.
- Individual annual saving is approximately 33%.
- Group annual saving is approximately 14%, not 15%, unless the underlying annual price is intentionally changed.

Either:
- display the exact annual total and a correctly rounded monthly equivalent;
- or change the source prices intentionally and document the decision.

Never display a discount that does not match the actual prices.

6. Audit all navigation and footer links

Inspect every internal and external link for:
- valid destination;
- correct route;
- no accidental link to `/`;
- no placeholder link;
- correct anchor;
- correct external domain.

Specific things to verify:
- Blog currently appears to link to `/`. If there is no blog page, remove it or create/use the correct route.
- FAQ links from pricing should go to the FAQ section, for example `/#faq`, if that is the intended destination.
- Generic social links such as `https://x.com` or `https://www.tiktok.com` should either point to Studo’s actual profile or be removed until the profile exists.
- Footer links must not visually promise pages that are not implemented.

==================================================
P1 — IMPROVE CLARITY, CONVERSION AND PRODUCT PRESENTATION
==================================================

7. Sharpen the hero message

The current headline is elegant but broad:

“One space for everything you study”

Keep the visual style, but make the supporting copy communicate the actual value more directly.

Possible direction:

“Upload your course. Know what to study next.”

Supporting copy:

“Studo turns your course material into a structured study system for planning, practising and finding what you still need to learn.”

Do not make the copy generic AI marketing language. The important product idea is:

course material → structured knowledge → study plan → practice → learning gaps → next action

8. Explain “Core” in plain language before using it heavily

“Core” is a strong internal product concept, but new visitors may not immediately understand it.

Before repeatedly using “Core”, explain it in simple language:

“Upload your course material once. Studo organizes the chapters and concepts into a studyable knowledge base that powers your planning, sets and AI tools.”

Then introduce the product term:

“We call this your Core.”

Make sure the user understands the benefit before learning the terminology.

9. Make the first product loop obvious

The landing should clearly show one complete flow:

1. Upload a course.
2. Studo understands its chapters and concepts.
3. Studo suggests what to study.
4. Studo creates study material.
5. The student learns.
6. Studo identifies weak areas.
7. Studo suggests the next useful action.

This should be visible in the visual ordering of the landing page. Do not present every feature as equally important.

The most important product proof should be:
- upload;
- structured course/Core;
- suggested plan;
- generated set;
- actual learning;
- identified gaps.

10. Improve the product demo scale and spacing

Some demo sections currently show a relatively small product interface inside a very large empty container.

Improve the ratio between:
- product UI;
- surrounding whitespace;
- explanatory copy;
- section height.

The demo should feel premium, not empty.

Possible solutions:
- increase the UI scale;
- reduce the section height;
- reveal the meaningful product state earlier;
- show one clear interaction per section;
- reduce inactive empty frames;
- use static screenshots as fallbacks.

Do not remove the scroll storytelling entirely. Make it more information-dense and readable.

11. Remove or standardize mixed-language demo content

The product mockups currently show language examples such as:
- “erklären”;
- “opposite of postpone”;
- “¿Cómo te va?”

This can look accidental rather than intentionally multilingual.

Choose one of:
- use English consistently;
- use Dutch consistently if that is the primary market;
- explicitly make the multilingual nature intentional and visually consistent.

Also standardize:
- Sven vs SVEN;
- capitalization;
- button labels;
- terminology for Studosets, Visualsets, Flow and Core.

12. Improve CTA hierarchy

Use one clear primary action throughout the landing:

“Start for free”

Use secondary actions consistently:
- “Sign in”
- “See how it works”
- “Explore the product”

Avoid switching unnecessarily between:
- start for free;
- get started free;
- create free account;
- Sign Up;
- Register.

The copy can vary where the context is different, but the hierarchy must remain obvious.

13. Improve the pricing comparison page

The `/select` page currently communicates:

- Free;
- Select;
- AI generation;
- group sharing.

Improve it so the user immediately understands:
- what remains free;
- what Sven does;
- what is paid;
- why someone would upgrade.

Suggested positioning:

“Study with your own material for free. Upgrade when you want Studo to create, organize and guide more for you.”

Make it clear that:
- the Core/knowledge layer is free;
- basic planning is free;
- self-created study material is free;
- paid value comes from Sven doing work for the student;
- sharing is part of the Group use case.

14. Make plan entitlements internally consistent

Check these issues:

- The Free plan says students can build their own Studosets and Visualsets.
- The Select plan says “Unlimited Studosets”, but it is unclear what is limited in Free.
- “Everything in Individual” on Group must match the real entitlement model.
- “Institution-wide admin controls” should not appear on the Group plan if Group is limited to four seats.
- “Group progress tracking” must match Studo’s privacy model.

If Flow and learning progress remain personal, do not imply that group members can see each other’s private progress. Clarify exactly what is shared:
- shared course content;
- shared Studosets;
- shared group activity;
- or actual progress.

15. Make Group pricing unambiguous

The Group plan currently says:
- €34.99/month;
- up to 4 seats.

State clearly whether this is:
- €34.99 total for up to 4 members;
- or €34.99 per member.

Use copy such as:

“€34.99/month for up to 4 members”

if that is the intended model.

Also consider whether Group should be visually emphasized yet. Individual students are currently the most obvious initial audience. Keep Group available, but do not let it overpower the individual student offer unless group usage has already been validated.

16. Clarify the trial and billing terms

The page currently says Individual and Groups include a 7-day trial.

Make clear:
- whether a card is required;
- whether the plan auto-renews;
- how cancellation works;
- when billing starts;
- whether annual plans are charged upfront;
- whether the Group price is total or per seat.

Do not add claims that are not implemented. If this is not ready, use honest copy such as:
“7-day trial — billing details shown before confirmation.”

17. Reconsider absolute pricing language

“Free to use, and it stays that way” is strong branding, but it creates an absolute long-term promise.

Consider a safer but still confident alternative:

“Your study workspace, free by default”

or:

“Study for free. Upgrade when you want Sven to do more.”

The pricing philosophy should remain:
- free knowledge workspace;
- paid automation and generation.

18. Add the missing product-value FAQs

Add or verify FAQ entries covering:
- What is a Core?
- What happens to uploaded course material?
- How long does processing take?
- Can I verify where an AI answer came from?
- Does Studo support scanned PDFs?
- What is free?
- What does Sven generate?
- Is generated material editable before saving?
- Who can see shared course content?
- Is personal Flow progress private?
- What happens when a shared course is deleted?
- Can I export my material?
- How does the trial work?

==================================================
P2 — DESIGN, ACCESSIBILITY AND QUALITY POLISH
==================================================

19. Improve the FAQ layout

The FAQ screenshots show a large amount of unused space on the left while the questions sit on the right.

Either:
- add a strong left-side FAQ heading/illustration/summary;
- or use a centered single-column FAQ layout.

Do not leave an empty half of the page unless the negative space is clearly intentional.

20. Improve final CTA specificity

The final CTA currently says:

“Create a free account to see how Studo makes your student life easier”

Make it more connected to the product loop, for example:

“Upload your first course and see what Studo can do with it.”

Keep the CTA low-friction and consistent with the free plan.

21. Add reduced-motion support

For users with `prefers-reduced-motion: reduce`:
- disable or simplify scroll-driven animations;
- show stable static product states;
- keep all content readable;
- do not hide important information inside motion-only sequences.

22. Check accessibility

Audit:
- one clear `h1` per page;
- logical heading hierarchy;
- keyboard navigation;
- visible focus states;
- accessible hamburger menu;
- accessible Monthly/Yearly tabs;
- correct `aria-selected` state;
- buttons versus links used correctly;
- sufficient text contrast;
- meaningful alt text;
- no information available only through animation;
- FAQ controls announce expanded/collapsed state;
- no keyboard traps.

23. Check responsive layouts

Test at minimum:
- 375px;
- 390px;
- 430px;
- 768px;
- 1024px;
- 1280px;
- 1366px;
- 1440px;
- 1536px.

Specifically check:
- hero headline overlap;
- card clipping;
- sticky navigation;
- pricing cards stacking;
- toggle readability;
- CTA sizes;
- FAQ layout;
- footer columns;
- demo UI legibility;
- horizontal overflow;
- scroll-animation behavior.

24. Improve performance of visual sections

Audit:
- image dimensions;
- lazy loading;
- unnecessary duplicate assets;
- large animation payloads;
- repeated renders;
- hydration errors;
- layout shifts;
- font loading;
- animation work on low-power devices.

The landing can remain visually ambitious, but it should not require loading every heavy visual asset before the first useful content appears.

25. Add SEO and sharing metadata

Verify route-specific:
- document title;
- meta description;
- canonical URL;
- Open Graph title/description/image;
- Twitter/X card;
- favicon;
- semantic page structure.

Suggested landing title direction:

“Studo — Your course, turned into a study system”

Suggested pricing title direction:

“Studo Select — AI-powered study tools for your courses”

Do not use misleading metadata for unfinished pages.

==================================================
P3 — PRODUCT DIRECTION TO KEEP IN MIND
==================================================

Do not attempt to build all of the following just because they appear in the broader product scope:

- every Flow view;
- advanced custom columns;
- full Boards abstraction;
- public set discovery;
- advanced Visualsets;
- complete social features;
- institutional admin;
- complex automatic deadline planning;
- every AI generation flow;
- advanced remediation automation;
- every print/export variation.

The first product loop should be:

course upload
→ processing and structure recognition
→ understandable Core
→ suggested study actions
→ generated or manual Studoset
→ Learn with FSRS
→ weak areas
→ next action

The landing can communicate the larger vision, but the product UI should prioritize this loop.

Also maintain these product principles:
- knowledge retrieval and the Core can remain free;
- expensive AI generation should be metered or fair-use limited;
- generated content should be reviewable before saving;
- AI output should include source references;
- plan completion and knowledge mastery should be separate metrics;
- Flow should remain personal unless group privacy rules explicitly say otherwise;
- shared content and personal progress must remain separate;
- processing, errors and incomplete documents must have visible states;
- users should never silently lose links when a course or resource is deleted.

==================================================
IMPLEMENTATION ORDER
==================================================

1. Inspect existing routes, components and scripts.
2. Fix malformed CTAs and invalid navigation.
3. Fix the empty Sven capability state.
4. Fix hero overlap and sticky-section clipping.
5. Correct pricing math and plan copy.
6. Audit all footer and social links.
7. Improve Core/product-loop explanation.
8. Improve pricing clarity and trial/billing explanation.
9. Improve demo scale, fallback states and language consistency.
10. Add accessibility and reduced-motion support.
11. Run responsive checks at all listed viewports.
12. Run the project’s existing checks/build/lint commands.
13. Report:
- files changed;
- bugs fixed;
- subjective copy/design changes;
- anything intentionally left untouched;
- remaining issues;
- screenshots or test evidence;
- any assumptions made.