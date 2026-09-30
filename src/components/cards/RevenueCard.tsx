// src/components/cards/RevenueCard.tsx
type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  change: string;
  progress?: number; // 0-100. When set, shows a progress bar instead of the badge below the amount.
  className?: string;
};

export default function RevenueCard({ title, period, amount, change, progress, className = "" }: RevenueCardProps) {
  const changeBadge = (
    <span className="w-fit rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium leading-5 text-[#242528]">
      {change}
    </span>
  );
  const amountText = <p className="font-heading text-2xl font-semibold leading-8">{amount}</p>;

  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-brand-blue p-4 text-white ${className}`}>
      <div>
        <p className="font-medium leading-[19px]">{title}</p>
        <p className="text-[10px] leading-3 text-white/70">{period}</p>
      </div>

      {progress === undefined ? (
        <>
          {amountText}
          {changeBadge}
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            {amountText}
            {changeBadge}
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-secondary" style={{ width: `${progress}%` }} />
          </div>
        </>
      )}
    </div>
  );
}
