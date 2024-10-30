// Textarea component extending from shadcnui
"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "@/utils/util";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Change this to adjust the hover effect radius
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              var(--primary-blueDark),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <textarea
          className={cn(
            `flex h-32 w-full resize-none  border-none bg-gray-50  text-black shadow-input rounded-md px-3 py-2 text-sm
            placeholder:text-neutral-400 
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 
            disabled:cursor-not-allowed disabled:opacity-50
            
            group-hover/input:shadow-none transition duration-400
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
