
        import React, { useState } from "react";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
        export default function QuickAddBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleAdd = () => {
  if (!value.trim()) return;
  if (typeof onSubmit === 'function') onSubmit(value.trim());
  setValue("");
  };
        return (
            <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl shadow-primary">
    <CardBody className="flex items-center gap-3 p-4">
    <Input
    aria-label="Quick add task"
    value={value}
    onValueChange={setValue}
    placeholder="Quick add a task..."
    classNames={{
    base: "flex-1",
    inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70"
    }}
    startContent={<PlusIcon className="w-4 h-4 text-[var(--color-text)]" />}
    />
    <Button onPress={handleAdd} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-4 py-2 hover:opacity-90 transition">Add</Button>
    </CardBody>
    </Card>
        );
        }
