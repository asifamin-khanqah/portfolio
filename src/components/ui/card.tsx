import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition duration-200 ease-out hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
