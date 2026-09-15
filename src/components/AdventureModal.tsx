import React from "react";
import { Compass, ShieldAlert, Sparkles } from "lucide-react";
import { elementName, type ModalEventData } from "@/utils/adventureLogic";
import type { SpiritRoot } from "@/lib/cultivation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AdventureModalProps {
  event: ModalEventData;
  root: SpiritRoot | null;
  onSelect: (optionIndex: 1 | 2) => void;
}

export const AdventureModal: React.FC<AdventureModalProps> = ({ event, root, onSelect }) => {
  const hasReqLinhCan = event.option1.reqElement
    ? root?.element === event.option1.reqElement
    : true;

  return (
    <div className="event-overlay fixed inset-0 z-[65] flex items-center justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md">
      <section
        className="event-modal relative w-full max-w-lg overflow-hidden rounded-lg border border-primary/50 bg-card p-5 shadow-2xl sm:p-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="adventure-title"
      >
        <div className="mb-5 flex items-center gap-3 border-b border-primary/30 pb-4">
          <div className="grid size-10 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10">
            <Compass className="size-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.25em] text-primary/70">Thiên cơ chợt hiện</p>
            <h2 id="adventure-title" className="mt-1 font-serif text-xl font-bold text-primary">{event.title}</h2>
          </div>
        </div>

        <p className="mb-6 text-sm leading-7 text-muted-foreground">{event.description}</p>

        <div className="space-y-3">
          <Button
            variant="outline"
            onClick={() => onSelect(1)}
            disabled={!hasReqLinhCan}
            className={cn("h-auto w-full justify-start whitespace-normal border-primary/40 bg-primary/5 p-3 text-left", !hasReqLinhCan && "border-border bg-muted/30")}
          >
            <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
            <div>
              <div className="text-sm font-semibold">{event.option1.text}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Tỷ lệ thành công: {Math.round(event.option1.winRate * 100)}%
                {event.option1.reqElement && ` • ${elementName(event.option1.reqElement)} Linh Căn ${root && hasReqLinhCan ? "đã cộng hưởng" : "chưa cộng hưởng"}`}
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            onClick={() => onSelect(2)}
            className="h-auto w-full justify-start whitespace-normal border-border bg-secondary/60 p-3 text-left"
          >
            <ShieldAlert className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <div>
              <div className="text-sm font-semibold">{event.option2.text}</div>
              <div className="mt-1 text-xs text-muted-foreground">Tỷ lệ thành công: {Math.round(event.option2.winRate * 100)}%</div>
            </div>
          </Button>
        </div>
      </section>
    </div>
  );
};
