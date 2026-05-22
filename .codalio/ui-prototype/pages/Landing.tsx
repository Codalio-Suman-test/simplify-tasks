import { AdjustmentsHorizontalIcon, ClockIcon, PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardHeader, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    const [quick, setQuick] = useState("");
    const tasks = [
      { id: 1, title: "Plan weekly agenda", due: "Today", priority: "High", status: "In Progress" },
      { id: 2, title: "Email project update", due: "Tomorrow", priority: "Medium", status: "Pending" },
      { id: 3, title: "Organize workspace", due: "Fri", priority: "Low", status: "Pending" }
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
          <section className="relative py-16 px-4 sm:px-8">
      <div className="absolute inset-0 opacity-20" aria-hidden="true"></div>
      <div className="relative max-w-5xl mx-auto text-center space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">Get organized in seconds</h1>
      <p className="text-[var(--color-text)]/90 text-base sm:text-lg max-w-3xl mx-auto">Capture tasks instantly, prioritize with ease, and stay focused. Simplify Tasks keeps your day tidy so you can do more of what matters.</p>
      <div className="max-w-2xl mx-auto">
      <Card className="bg-[var(--color-background)]/80 border border-[var(--color-border)] rounded-2xl shadow-primary">
      <CardBody className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3">
      <Input
      aria-label="Add a task"
      value={quick}
      onValueChange={setQuick}
      placeholder="Add a task..."
      classNames={{
      base: "flex-1",
      inputWrapper: "input-focus-primary bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70"
      }}
      startContent={<PlusIcon className="w-4 h-4 text-[var(--color-text)]" />}
      />
      <Button onPress={() => setQuick("")} className="rounded-xl bg-[var(--color-accent)] text-[var(--color-text)] font-semibold px-6 py-2 hover:opacity-90 transition">Add</Button>
      <Link to="/tasks" className="sm:ml-2">
      <Button variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)] px-6 py-2 hover:bg-[var(--color-background)]/10 transition">Go to Task List</Button>
      </Link>
      </CardBody>
      </Card>
      </div>
      </div>
      </section>
  <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text)]">Why Simplify Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-shadow">
      <CardHeader className="flex items-center gap-3 p-4">
      <StarIcon className="w-6 h-6 text-[var(--color-accent)]" />
      <p className="text-[var(--color-text)] font-semibold">Quick Add</p>
      </CardHeader>
      <CardBody className="px-4 pb-4 text-[var(--color-text)] text-sm">
      Add tasks in a flash and keep moving. Press "/" to jump to search and "+" to add.
      <div className="mt-3">
      <Badge className="text-[var(--color-text)]" content="Fast" color="success">
      <span className="sr-only">fast</span>
      </Badge>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-shadow">
      <CardHeader className="flex items-center gap-3 p-4">
      <AdjustmentsHorizontalIcon className="w-6 h-6 text-[var(--color-primary)]" />
      <p className="text-[var(--color-text)] font-semibold">Smart Categories</p>
      </CardHeader>
      <CardBody className="px-4 pb-4 text-[var(--color-text)] text-sm">
      Group tasks by projects or tags with clean chips and filters.
      <div className="mt-3">
      <Badge className="text-[var(--color-text)]" content="Organized" color="primary">
      <span className="sr-only">organized</span>
      </Badge>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-shadow">
      <CardHeader className="flex items-center gap-3 p-4">
      <ClockIcon className="w-6 h-6 text-[var(--color-secondary)]" />
      <p className="text-[var(--color-text)] font-semibold">Focus-friendly</p>
      </CardHeader>
      <CardBody className="px-4 pb-4 text-[var(--color-text)] text-sm">
      Minimal, high-contrast design that keeps your attention on doing, not managing.
      <div className="mt-3">
      <Badge className="text-[var(--color-text)]" content="Calm" color="secondary">
      <span className="sr-only">calm</span>
      </Badge>
      </div>
      </CardBody>
      </Card>
      </div>
      </div>
      </section>
  <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">A quick peek at your tasks</h2>
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody>
      <Table aria-label="Task preview table" className="backdrop-blur-sm">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">TASK</TableColumn>
      <TableColumn className="text-[var(--color-text)]">DUE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">PRIORITY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
      </TableHeader>
      <TableBody>
      {tasks.map((t) => (
      <TableRow key={t.id} className="hover:bg-[var(--color-background)]/40">
      <TableCell className="text-[var(--color-text)]">{t.title}</TableCell>
      <TableCell className="text-[var(--color-text)]/90">{t.due}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Badge color={t.priority === 'High' ? 'danger' : t.priority === 'Medium' ? 'warning' : 'success'} className="text-[var(--color-text)]" content={t.priority}>
      <span className="sr-only">{t.priority}</span>
      </Badge>
      </TableCell>
      <TableCell className="text-[var(--color-text)]">{t.status}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
