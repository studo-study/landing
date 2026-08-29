// Shared driver for scroll-scrubbed stage animations.
//
// DemoFlow sets `--stage-p` (0 -> 1) on each `.demo-stage` while it is the
// active stage. An animation page calls `driveStage('.my-root', (p, root) => …)`
// and gets that progress on every scroll tick, re-querying the DOM so it keeps
// working across Astro view transitions.

export type StageDriver = (p: number, root: HTMLElement) => void;

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Map global progress `p` to a local 0..1 ramp inside the [start, end] window.
export const phase = (p: number, start: number, end: number) =>
    clamp01((p - start) / (end - start));

export function driveStage(rootSelector: string, cb: StageDriver) {
    const tick = () => {
        const root = document.querySelector<HTMLElement>(rootSelector);
        if (!root) return;
        const stage = root.closest<HTMLElement>('.demo-stage');
        const raw = stage?.style.getPropertyValue('--stage-p') ?? '0';
        cb(raw ? parseFloat(raw) : 0, root);
    };

    document.addEventListener('scroll', tick, {passive: true});
    window.addEventListener('resize', tick);
    document.addEventListener('astro:page-load', tick);
    tick();
}
