import { Button as ShadButton } from "./components/ui/button";

export const Button = () => {
  return (
    <ShadButton asChild>
      <a href="https://ui.shadcn.com/docs">
        Read the docs
        <span className="ml-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          →
        </span>
      </a>
    </ShadButton>
  );
};
