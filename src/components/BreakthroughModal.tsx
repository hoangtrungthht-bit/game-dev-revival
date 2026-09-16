import { useEffect } from "react";
import { rootTitle, type SpiritRoot } from "@/lib/cultivation";
import type { GameNotice } from "@/hooks/useCultivation";

interface BreakthroughModalProps {
  notice: GameNotice;
  onClose: () => void;
  root: SpiritRoot | null;
}

export function BreakthroughModal({ notice, onClose, root }: BreakthroughModalProps) {
  const data = notice.breakthrough;

  useEffect(() => {
    if (!data || data.type !== "minor") return;
    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [data, onClose]);

  if (!data) return null;

  if (data.type === "minor") {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose} role="presentation">
        <div
          className="event-toast w-full max-w-md cursor-pointer rounded-xl border border-primary/60 bg-black/95 px-5 py-4 text-center text-primary shadow-2xl shadow-primary/20 backdrop-blur"
          role="status"
          aria-live="assertive"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/75">Đột phá thành công!</p>
          <p className="mt-2 font-serif text-lg">Tiến vào {data.realmTitle}</p>
          <p className="mt-1 text-sm text-primary/80">Linh khí/giây tăng nhẹ · +{data.qiRateGain.toFixed(1)}</p>
          <p className="mt-3 text-[11px] text-muted-foreground">Tự động ẩn sau 5 giây · Chạm ra ngoài để đóng</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md" onClick={onClose} role="presentation">
      <div
        className="breakthrough-modal relative w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-primary bg-black px-5 py-7 text-primary shadow-2xl shadow-primary/30 sm:px-10 sm:py-9"
        role="dialog"
        aria-modal="true"
        aria-labelledby="breakthrough-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-y-0 left-3 hidden items-center sm:flex"><span className="breakthrough-runes">符<br />文<br />天<br />道<br />玄<br />黄</span></div>
        <div className="pointer-events-none absolute inset-y-0 right-3 hidden items-center sm:flex"><span className="breakthrough-runes">黄<br />玄<br />道<br />天<br />文<br />符</span></div>
        <div className="relative mx-auto max-w-xl text-center">
          <span className="inline-flex rounded-full border border-primary/70 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em]">THIÊN ĐỊA DỊ TƯỢNG</span>
          <p className="mt-5 text-xs uppercase tracking-[0.38em] text-primary/70">Đại đạo khai hoa</p>
          <h2 id="breakthrough-title" className="mt-2 font-serif text-3xl font-bold tracking-wide text-primary sm:text-5xl">ĐỘT PHÁ ĐẠI CẢNH GIỚI</h2>
          <p className="mx-auto mt-4 max-w-lg font-serif text-base italic leading-relaxed text-primary/80 sm:text-lg">“Một bước vượt thiên quan, vạn kiếp hóa trường sinh.”</p>

          <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">
            <Info label="Đạo hiệu" value={data.name} />
            <Info label="Thể chất / Linh căn" value={root ? rootTitle(root) : "Chưa khai mở"} />
            <Info label="Cảnh giới tiến vào" value={data.realmTitle} highlight />
            <Info label="Linh khí / giây" value={`+${data.qiRateGain.toFixed(1)}`} />
          </div>
          <div className="mt-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm">Thọ nguyên gia tăng <strong className="ml-1 text-base text-primary">+{data.lifespanGain} năm</strong></div>
          <button type="button" onClick={onClose} className="mt-7 min-h-12 w-full rounded-lg border border-primary bg-primary px-5 py-3 text-sm font-bold tracking-[0.18em] text-black transition hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">THU NHẬN ĐẠO QUẢ</button>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return <div className="rounded-lg border border-primary/25 bg-primary/[0.04] px-4 py-3"><p className="text-[10px] uppercase tracking-[0.2em] text-primary/60">{label}</p><p className={`mt-1 font-serif ${highlight ? "text-xl font-bold text-primary" : "text-base text-primary/90"}`}>{value}</p></div>;
}

export default BreakthroughModal;
