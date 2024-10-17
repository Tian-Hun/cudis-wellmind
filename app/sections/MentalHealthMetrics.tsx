'use client';

import Link from 'next/link';
import { Brain, Heart, Smile } from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { WellMindScoreChart } from '@/components/WellMindScoreChart';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const MentalHealthMetrics: React.FC = () => {
    return (
        <>
            <div className="w-full max-w-6xl gap-2">
                <h1 className="text-2xl font-semibold">Mental Health Metrics</h1>
            </div>
            <ScrollArea className="w-full">
                <div className="flex space-x-4">
                    <Link href="/wellmind-score">
                        <Card className="bg-green-primary w-[180px] h-[210px]">
                            <CardHeader className="p-4">
                                <CardTitle className="flex gap-2 text-white">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-[14px]">WellMind Score</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <WellMindScoreChart />
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/mood-tracker">
                        <Card className="bg-amber-300 min-w-[180px] h-[210px]">
                            <CardHeader className="p-4">
                                <CardTitle className="flex gap-2 text-white">
                                    <Smile className="w-4 h-4" />
                                    <span className="text-[14px]">Mood</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <span className="text-white font-bold text-2xl">Happy</span>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/stress-managment">
                        <Card className="bg-[#ED7E1C] min-w-[180px] h-[210px]">
                            <CardHeader className="p-4">
                                <CardTitle className="flex gap-2 text-white">
                                    <Brain className="w-4 h-4" />
                                    <span className="text-[14px]">Stress Level</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-white font-bold text-2xl">65/100</div>
                                <div className="text-white font-bold text-2xl">Low</div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
};
