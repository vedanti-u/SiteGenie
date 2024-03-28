import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...inputs) {
  return twMerge(clsx(inputs));
}

// Define cn function with similar functionality
export function cn(...args) {
  return classNames(...args);
}
