import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-web-primary-main hover:bg-web-primary-hover active:bg-web-primary-pressed disabled:bg-web-neutral-40 text-white shadow-xs",
        error:
          "bg-web-error-main text-white shadow-xs hover:bg-web-error-hover active:bg-web-error-pressed",
        success:
          "bg-web-success-main text-white shadow-xs hover:bg-web-success-hover active:bg-web-success-pressed",
        ghost:
          "bg-web-neutral-40 text-black shadow-xs hover:bg-web-neutral-60 active:bg-web-neutral-80",
        outline:
          "bg-transparent text-web-primary-main hover:bg-web-neutral-60 active:bg-web-neutral-80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[48px] text-lg  px-4 py-2",
        sm: "h-[36px] rounded-md px-3",
        lg: "h-[60px] text-[24px] rounded-md px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconSizes: Record<string, number> = {
  default: 24,
  sm: 20,
  lg: 32,
  icon: 20,
};

//union for button style
type BorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "initial"
  | "inherit";

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconLeft?: React.ElementType;
  iconRight?: React.ElementType;
  outline?: {
    color?: string;
    style?: BorderStyle;
    width?: number;
  };
}

function Button({
  className,
  variant,
  size = "default",
  iconLeft: IconLeft,
  iconRight: IconRight,
  asChild = false,
  outline, //this should control the border => pass it like normal tailwind css
  // outline="border border-web-primary-main"
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const buttonIconSize = iconSizes[size ?? "default"] ?? 16;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        borderWidth: outline?.width || "2px",
        borderStyle: outline?.style || "solid",
        borderColor: outline?.color || "red",
      }}
      {...props}
    >
      {IconLeft && <IconLeft size={buttonIconSize} className="mr-2" />}
      {props.children}
      {IconRight && <IconRight size={buttonIconSize} className="ml-2" />}
    </Comp>
  );
}

export { Button, buttonVariants };
