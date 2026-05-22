
        import React from "react";
import { Button, Badge, Tooltip } from "@heroui/react";
import { BellIcon } from "@heroicons/react/24/outline";
        export default function NotificationBell({ count = 0, onClick }) {
        return (
            <Tooltip content={<span className="text-[var(--color-text)]">Notifications</span>}>
    <Button isIconOnly onPress={onClick} variant="flat" className="rounded-full bg-[var(--color-background)] border border-[var(--color-border)]">
    <Badge content={count} color="danger">
    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Badge>
    </Button>
    </Tooltip>
        );
        }
