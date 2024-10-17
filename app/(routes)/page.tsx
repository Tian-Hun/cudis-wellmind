import Link from "next/link";

import { CircleUser, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MentalHealthMetrics } from "@/sections/MentalHealthMetrics";
import { UserWelcomeBar } from "@/components/UserWelcomeBar";
import { AIMindfulAdvice } from "@/components/AIMindfulAdvice";
import { MindfulMetrics } from "@/components/MindfulMetrics";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <h1 className="text-lg font-semibold">Cudis WellMind</h1>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Chat
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Smart Home
                    </Link>
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Settings
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Chat
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Smart Home
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <h1 className="text-lg font-semibold">Cudis WellMind</h1>
                    <Button variant="secondary" size="icon" className="rounded-full ml-auto">
                        <CircleUser className="h-5 w-5" />
                    </Button>
                </div>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <UserWelcomeBar
                    userName="John Doe"
                    avatarUrl="https://picsum.photos/200/200"
                    notificationCount={3}
                />
                <MentalHealthMetrics />
                <AIMindfulAdvice />
                <MindfulMetrics />
            </main>
        </div>
    );
}
