"use client";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light"}
      className="toaster group"
      position="top-center"
      {...props}
    />
  );
};

export { Toaster };
