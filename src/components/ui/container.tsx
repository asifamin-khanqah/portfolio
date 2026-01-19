import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-10 xl:px-16 2xl:px-20", className)}>
      {children}
    </div>
  );
}
