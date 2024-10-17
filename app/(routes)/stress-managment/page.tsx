import Link from 'next/link';
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Flag, TriangleAlert } from 'lucide-react';

const StressManagementPage = () => {
    return (
        <main className="h-screen bg-orange-300 text-white p-4">
            <div className="flex justify-between items-center mb-8">
                <Link href="/">
                    <ChevronLeft />
                </Link>
                <h1 className="text-xl font-semibold">Stress Level</h1>
                <div className="w-6"></div>
            </div>

            <div className="flex flex-col items-center mb-12">
                <div className="text-8xl font-bold mb-2">3</div>
                <div className="text-xl">Elevated Stress</div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Stress Stats</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <Card className="bg-white/10 border-none">
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Stressor</span>
                            <TriangleAlert className="text-[#ED7E1C]" />
                        </div>
                        <div className="font-bold mb-2">Loneliness</div>
                        <div className="space-y-1">
                            <div className="bg-green-300 h-2 w-3/4 rounded"></div>
                            <div className="bg-green-300 h-2 w-1/2 rounded"></div>
                            <div className="bg-green-200 h-2 w-1/4 rounded"></div>
                            <div className="bg-green-200 h-2 w-1/3 rounded"></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white/10 border-none">
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Impact</span>
                            <Flag className="text-[#ED7E1C]" />
                        </div>
                        <div className="font-bold mb-2">Very High</div>
                        <svg viewBox="0 0 100 30" className="w-full h-12">
                            <path d="M0,15 Q25,5 50,15 T100,15" fill="none" stroke="purple" strokeWidth="2"/>
                        </svg>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

export default StressManagementPage;
