import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Book, Smile, Activity, Moon, Box } from 'lucide-react';

interface MetricItem {
    icon: React.ReactNode;
    title: string;
    data: string;
    link: string;
}

const metricItems: MetricItem[] = [
    {
        icon: <Clock className="h-10 w-10 text-yellow-500" />,
        title: "Mindful Hours",
        data: `${Math.floor(Math.random() * 8) + 1} hrs`,
        link: "/mindful-hours"
    },
    {
        icon: <Book className="h-10 w-10 text-green-500" />,
        title: "Mindful Journal",
        data: `${Math.floor(Math.random() * 10) + 1} entries`,
        link: "/mindful-journal"
    },
    {
        icon: <Smile className="h-10 w-10 text-blue-500" />,
        title: "Mood Tracker",
        data: `${Math.floor(Math.random() * 5) + 1}/5`,
        link: "/mood-tracker"
    },
    {
        icon: <Activity className="h-10 w-10 text-purple-500" />,
        title: "Stress Level",
        data: `${Math.floor(Math.random() * 100)}%`,
        link: "/stress-level"
    },
    {
        icon: <Moon className="h-10 w-10 text-pink-500" />,
        title: "Sleep Quality",
        data: `${Math.floor(Math.random() * 100)}%`,
        link: "/sleep-quality"
    },
];

export const MindfulMetrics: React.FC = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Box className="h-5 w-5" />
                    Mindful Metrics
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {metricItems.map((item, index) => (
                        <Link href={item.link} key={index} className="block">
                            <div className="flex items-center space-x-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                                <div className="flex-shrink-0 text-primary">
                                    {item.icon}
                                </div>
                                <div className="flex-grow">
                                    <div className="text-sm font-medium text-muted-foreground">{item.title}</div>
                                    <div className="text-2xl font-bold">{item.data}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
