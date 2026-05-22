
        import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Input, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge, Switch, Spacer, Card, ScrollShadow } from "@heroui/react";
import { HomeIcon, CheckIcon, PlusIcon, BookmarkIcon, Cog6ToothIcon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
        export default function Layout({ children }) {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(() => {
  if (typeof window === 'undefined') return true;
  const current = document.documentElement.getAttribute('data-theme');
  return current !== 'light';
  });

  const handleThemeToggle = (value) => {
  setIsDark(value);
  if (typeof document !== 'undefined') {
  if (value) {
  document.documentElement.removeAttribute('data-theme'); // dark mode default
  } else {
  document.documentElement.setAttribute('data-theme', 'light');
  }
  }
  };
        return (
            <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] flex">
    {/* Sidebar */}
    <aside className="hidden md:flex w-64 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
    <div className="p-4 border-b border-[var(--color-border)]">
    <div className="flex items-center gap-2">
    <HomeIcon className="w-6 h-6 text-[var(--color-primary)]" />
    <span className="text-xl font-bold text-[var(--color-text)]">Simplify Tasks</span>
    </div>
    </div>
    <ScrollShadow hideScrollBar className="flex-1 px-2 py-4">
    <nav className="flex flex-col gap-1">
    <NavLink exact to="/" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]">
    <HomeIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-[var(--color-text)]">Home</span>
    </NavLink>
    <NavLink to="/tasks" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]">
    <CheckIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-[var(--color-text)]">Task List</span>
    </NavLink>
    <NavLink to="/add-task" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]">
    <PlusIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-[var(--color-text)]">Add Task</span>
    </NavLink>
    <NavLink to="/categories" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]">
    <BookmarkIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-[var(--color-text)]">Categories</span>
    </NavLink>
    <NavLink to="/settings" activeClassName="bg-[var(--color-primary)]/15 text-[var(--color-primary)]" className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]">
    <Cog6ToothIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-[var(--color-text)]">Settings</span>
    </NavLink>
    </nav>
    <Spacer y={4} />
    <Card className="bg-[var(--color-background)]/70 border border-[var(--color-border)] p-4 rounded-2xl">
    <p className="text-[var(--color-text)] text-sm">
    Pro tip: Press <span className="px-2 py-0.5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)]">/</span> to search
    </p>
    </Card>
    </ScrollShadow>
    </aside>

    {/* Main content area */}
    <div className="flex-1 flex flex-col min-w-0">
    {/* Header bar */}
    <Navbar maxWidth="xl" className="sticky top-0 z-40 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
    <NavbarContent justify="start" className="gap-2">
    <NavbarMenuToggle className="md:hidden text-[var(--color-text)]" />
    <NavbarBrand className="md:hidden">
    <span className="text-[var(--color-text)] font-semibold">Simplify Tasks</span>
    </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="flex-1 justify-center max-w-xl">
    <Input
    aria-label="Search tasks"
    value={search}
    onValueChange={setSearch}
    placeholder="Search tasks..."
    classNames={{
    base: "w-full",
    inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70",
    label: "text-[var(--color-text)]"
    }}
    startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
    />
    </NavbarContent>
    <NavbarContent justify="end" className="items-center gap-2">
    <Switch
    isSelected={isDark}
    onValueChange={handleThemeToggle}
    size="sm"
    className="text-[var(--color-text)]"
    >
    <span className="text-xs text-[var(--color-text)]">{isDark ? "Dark" : "Light"}</span>
    </Switch>
    <Dropdown>
    <DropdownTrigger>
    <Button isIconOnly variant="flat" className="rounded-full bg-[var(--color-background)] border border-[var(--color-border)]">
    <Badge content={3} color="danger">
    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Badge>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Notifications" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[260px]" }}>
    <DropdownItem key="n1" className="text-[var(--color-text)]">New comment on task</DropdownItem>
    <DropdownItem key="n2" className="text-[var(--color-text)]">Task due today</DropdownItem>
    <DropdownItem key="n3" className="text-[var(--color-text)]">Reminder: Weekly review</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    <Dropdown>
    <DropdownTrigger>
    <Button className="px-2 rounded-full bg-[var(--color-background)] border border-[var(--color-border)]">
    <div className="flex items-center gap-2">
    <Avatar name="ST" className="w-7 h-7" />
    <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
    </div>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="User actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[200px]" }}>
    <DropdownItem key="profile" className="text-[var(--color-text)]">Profile</DropdownItem>
    <DropdownItem key="settings" className="text-[var(--color-text)]">Settings</DropdownItem>
    <DropdownItem key="logout" color="danger" className="text-[var(--color-text)]">Logout</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </NavbarContent>
    </Navbar>

    <main className="flex-1 p-4 md:p-6">
    {children}
    </main>
    </div>
    </div>
        );
        }
