
        import React from "react";
import { Card, CardBody, Badge, Button, Checkbox } from "@heroui/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
        export default function TaskItemRow({ item, onToggle, onEdit, onDelete }) {
        return (
            <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
    <CardBody className="flex items-center gap-3 p-4">
    <Checkbox isSelected={item.completed} onValueChange={() => onToggle?.(item)} className="text-[var(--color-text)]" />
    <div className="flex-1 min-w-0">
    <p className="text-[var(--color-text)] font-semibold truncate">{item.title}</p>
    <p className="text-[var(--color-text)]/80 text-xs truncate">Due: {item.due || "—"}</p>
    </div>
    <div className="flex items-center gap-2">
    <Badge color={item.priority === 'High' ? 'danger' : item.priority === 'Medium' ? 'warning' : 'success'} className="text-[var(--color-text)]" content={item.priority}>
    <span className="sr-only">Priority</span>
    </Badge>
    <Button isIconOnly variant="light" onPress={() => onEdit?.(item)} className="rounded-full text-[var(--color-text)]">
    <PencilIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Button>
    <Button isIconOnly variant="light" onPress={() => onDelete?.(item)} className="rounded-full text-[var(--color-text)]">
    <TrashIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Button>
    </div>
    </CardBody>
    </Card>
        );
        }
