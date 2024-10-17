import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Bell } from 'lucide-react';

interface UserWelcomeBarProps {
    userName: string;
    avatarUrl?: string;
    notificationCount?: number;
}

export const UserWelcomeBar: React.FC<UserWelcomeBarProps> = ({
    userName,
    avatarUrl,
    notificationCount = 0
}) => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <Card className="w-full">
            <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={avatarUrl} alt={userName} />
                        <AvatarFallback>{userName.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-2xl font-bold">{getGreeting()}, {userName}</h2>
                        <p className="text-muted-foreground">Welcome back! We hope you have a great day.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Bell className="h-6 w-6 text-muted-foreground" />
                        {notificationCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                                {notificationCount}
                            </span>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
