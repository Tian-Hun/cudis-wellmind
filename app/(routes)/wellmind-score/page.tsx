import Link from 'next/link';
import React from 'react';
import { BarChart3, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WellMindScorePage = () => {
    return (
        <main className="h-screen bg-lime-100 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <Link href="/">
                    <ChevronLeft />
                </Link>
                <h1 className="text-xl font-semibold">WellMind Score</h1>
                <div className="w-6" /> {/* Placeholder for right alignment */}
            </div>

            <div className="p-4">
                <div className="text-center py-4">
                    <span className="text-7xl font-bold text-[#5F8D4E]">80</span>
                    <p className="text-xl mt-2">Mentally Stable</p>
                </div>
                <div className="bg-[#5F8D4E] rounded-full p-2 w-16 h-16 mx-auto mb-4">
                    <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-6 mt-8">
                    <h4 className="text-sm font-semibold flex justify-between">
                        Score History
                    </h4>
                    <div className="space-y-4">
                        {[
                            { date: 'SEP 12', status: 'Anxious, Depressed', action: 'Do 25m Breathing.', score: 65 },
                            { date: 'SEP 11', status: 'Very Happy', action: 'No Recommendation.', score: 95 },
                            { date: 'SEP 10', status: 'Neutral', action: 'Keep it up', score: 65 },
                        ].map((item, index) => (
                            <Card key={index}>
                                <CardHeader className="pb-0">
                                    <CardTitle>{item.date}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <p>{item.status}</p>
                                        <p className="opacity-70">{item.action}</p>
                                    </div>
                                    <Progress value={item.score} className="w-10 h-10" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WellMindScorePage;
