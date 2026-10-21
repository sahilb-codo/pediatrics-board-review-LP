import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  className?: string;
  /** Background of the check bubble; white reads best on tinted cards. */
  bubbleClassName?: string;
};

export function CheckList({ items, className, bubbleClassName = "bg-white" }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-3.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-body">
          <span className={cn("mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-brand", bubbleClassName)}>
            <Icon name="check" className="size-3.5" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
