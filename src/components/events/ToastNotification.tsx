import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, FlaskConical, Sparkles } from "lucide-react";
import type { GameNotice } from "@/hooks/useCultivation";
import { cn } from "@/lib/utils";

const ICONS = {
  minor: CheckCircle2,
  alchemy: FlaskConical,
  gain: Sparkles,
  loss: AlertTriangle,
};

export function ToastNotification({ notice }: { notice: GameNotice }) {
  const [visible, setVisible] = useState(true);
  const Icon = ICONS[notice.kind];

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 4500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-3 top-16 z-[60] flex justify-center sm:inset-x-auto sm:right-20 sm:top-5"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={cn(
          "event-toast flex w-full max-w-md items-start gap-3 rounded-lg border bg-card/95 px-4 py-3 shadow-2xl backdrop-blur sm:w-96",
          notice.kind === "minor" && "border-jade/60 text-jade",
          notice.kind === "alchemy" && "border-jade bg-jade/15 text-jade",
          notice.kind === "gain" && "border-primary/70 bg-primary/15 text-primary",
          notice.kind === "loss" && "border-destructive/70 bg-destructive/15 text-destructive",
        )}
      >
        <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <p className="font-serif text-sm leading-relaxed">{notice.text}</p>
      </div>
    </div>
  );
}