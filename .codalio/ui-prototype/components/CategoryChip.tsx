
        import React from "react";
import { Chip } from "@heroui/react";
        export default function CategoryChip({ label, onClick }) {
        return (
            <Chip onClick={onClick} variant="flat" className="cursor-pointer rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/25 transition-colors text-sm">
    {label}
    </Chip>
        );
        }
