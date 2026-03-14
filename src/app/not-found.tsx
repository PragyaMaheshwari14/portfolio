import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="flex flex-col items-center text-center max-w-md relative">
          <h1 className="text-[200px] font-semibold font-mono absolute -top-40 left-1/2 -translate-x-1/2 bg-clip-text text-transparent bg-gradient-to-b from-primary/40 to-primary/5 tracking-tighter uppercase [-webkit-text-stroke:2px_var(--primary)] opacity-60">
            404
          </h1>
          <h2 className="text-4xl tracking-tight font-semibold text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 text-balance tracking-tight font-medium">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/">
              <Button
                variant="outline"
                className="gap-2 cursor-pointer border-border text-foreground hover:bg-accent hover:text-primary hover:border-primary/40 transition-all duration-200"
              >
                <Home className="h-4 w-4" />
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}