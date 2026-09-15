import { useEffect } from "react";
import { CircleCheckBig, CircleX, X } from "lucide-react";
import type { EventResult } from "@/hooks/useCultivation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EventResultModal({ result, onClose }: { result: EventResult; onClose: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [onClose, result.id]);

  const Icon = result.success ? CircleCheckBig : CircleX;

  return (
    <div className="event-overlay fixed inset-0 z-[65] grid place-items-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-result-title"
        className="event-modal relative w-full max-w-lg overflow-hidden rounded-lg border border-primary/40 bg-card px-5 py-7 shadow-2xl sm:px-8"
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Đóng kết quả biến cố"
          className="absolute right-3 top-3 text-muted-foreground"
        >
          <X />
        </Button>
        <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
          <Icon className={cn("size-6", result.success ? "text-jade" : "text-destructive")} />
        </div>
        <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-primary/80">Biến cố đã định</p>
        <h2 id="event-result-title" className="mt-2 text-center font-serif text-2xl text-primary">
          {result.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-7 text-muted-foreground">
          {result.text}
        </p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Button type="button" onClick={onClose} className="mt-6 h-11 w-full">
          Đã rõ thiên ý
        </Button>
      </section>
    </div>
  );
}