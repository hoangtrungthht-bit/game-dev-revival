import { Gauge, Hourglass, Sparkles } from "lucide-react";
import type { BreakthroughResult } from "@/hooks/useCultivation";
import { Button } from "@/components/ui/button";

const REALM_VERSES = [
  "Nhất niệm dẫn linh khai tiên lộ, phàm tâm từ đây chạm trường sinh.",
  "Đạo cơ vững tựa sơn hà cổ, một bước đăng thiên phá tử sinh.",
  "Kim đan chiếu rọi ba ngàn giới, kiếm khí tung hoành động cửu tiêu.",
  "Anh linh xuất khiếu du thiên địa, vạn pháp quy tâm ngộ bản nguyên.",
  "Thần niệm hóa phong lay nhật nguyệt, đạo tâm bất diệt trấn càn khôn.",
  "Hư không luyện tận thành chân ngã, một niệm xuyên qua vạn cổ sầu.",
  "Thiên nhân hợp nhất, thân cùng đạo; nhật nguyệt đồng huy, ý ngự không.",
  "Đại đạo vô biên chân ý hiện, nhân gian từ đó ngước tiên tung.",
  "Cửu lôi rèn cốt, thiên môn mở; kiếp tận mây tan, đạo quả thành.",
];

function Totem({ side }: { side: "dragon" | "phoenix" }) {
  const mirrored = side === "phoenix";
  return (
    <svg
      viewBox="0 0 80 360"
      aria-hidden="true"
      className="h-full w-full text-primary/70"
      style={{ transform: mirrored ? "scaleX(-1)" : undefined }}
    >
      <path d="M45 8c-30 22 22 44-8 72S12 126 47 151s-20 55-3 88 22 62-13 109" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M43 27 25 39l21 9-25 18 22 8M39 103l26 14-30 12 27 20-31 10M43 190l-25 18 29 9-21 24 30 8M43 278l20 14-27 14 20 22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="44" cy="81" r="5" fill="currentColor" />
      <path d="M31 348c8-13 18-13 27 0M20 12c14 8 27 7 39-2" fill="none" stroke="currentColor" />
    </svg>
  );
}

export function BreakthroughModal({ result, onClaim }: { result: BreakthroughResult; onClaim: () => void }) {
  const verse = REALM_VERSES[result.realmIndex] ?? REALM_VERSES[0];

  return (
    <div className="breakthrough-overlay fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-background/90 p-3 backdrop-blur-md sm:p-6">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="breakthrough-title"
        className="breakthrough-modal relative my-auto w-full max-w-3xl overflow-hidden rounded-lg border-2 border-primary bg-card px-12 py-7 text-center shadow-2xl sm:px-24 sm:py-10"
      >
        <div className="absolute inset-y-4 left-2 w-8 sm:left-5 sm:w-12"><Totem side="dragon" /></div>
        <div className="absolute inset-y-4 right-2 w-8 sm:right-5 sm:w-12"><Totem side="phoenix" /></div>
        <p className="absolute left-9 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-serif text-xs text-primary/80 sm:block">龍威鎮世乾坤</p>
        <p className="absolute right-9 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] font-serif text-xs text-primary/80 sm:block">鳳舞九天陰陽</p>

        <Sparkles className="mx-auto size-8 text-primary breakthrough-spark" aria-hidden="true" />
        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-primary/80">Thiên địa chứng giám</p>
        <h2 id="breakthrough-title" className="mt-2 font-serif text-2xl font-bold text-primary sm:text-4xl">
          ĐỘT PHÁ THÀNH CÔNG!
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-serif text-sm italic leading-7 text-muted-foreground sm:text-base">
          “{verse}”
        </p>

        <div className="mt-6 border-y border-primary/30 py-4 text-left">
          <dl className="grid gap-3 text-sm sm:grid-cols-3">
            <div><dt className="text-xs text-muted-foreground">Đạo hiệu</dt><dd className="mt-1 font-serif text-foreground">{result.name}</dd></div>
            <div><dt className="text-xs text-muted-foreground">Thể chất / Linh căn</dt><dd className="mt-1 font-serif text-foreground">{result.rootTitle}</dd></div>
            <div><dt className="text-xs text-muted-foreground">Cảnh giới mới</dt><dd className="mt-1 font-serif text-primary">{result.realmTitle}</dd></div>
          </dl>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-md border border-primary/30 bg-primary/10 p-3">
            <Gauge className="mx-auto size-5 text-primary" />
            <p className="mt-2 text-xs text-muted-foreground">Tốc độ hấp thụ</p>
            <p className="mt-1 font-serif text-lg text-primary">+{result.absorptionBonus}%</p>
          </div>
          <div className="rounded-md border border-primary/30 bg-primary/10 p-3">
            <Hourglass className="mx-auto size-5 text-primary" />
            <p className="mt-2 text-xs text-muted-foreground">Thọ nguyên</p>
            <p className="mt-1 font-serif text-lg text-primary">+{result.lifespanBonus} năm</p>
          </div>
        </div>

        <Button type="button" onClick={onClaim} className="breakthrough-claim mt-6 h-12 w-full font-semibold">
          <Sparkles /> THU NHẬN ĐẠO QUẢ
        </Button>
      </section>
    </div>
  );
}