import Link from 'next/link';
import React from 'react';
import { ChevronLeft, Settings } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const MoodTrackerPage = () => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const moodData = [20, 30, 40, 80, 60, 25, 15];

    return (
        <main className="h-screen bg-yellow-100 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <Link href="/">
                    <ChevronLeft />
                </Link>
                <h1 className="text-xl font-semibold">Mood Tracker</h1>
                <div className="w-6" /> {/* Placeholder for right alignment */}
            </div>

            <Card className="flex-grow flex flex-col justify-between bg-yellow-200 rounded-3xl shadow-lg">
                <CardContent className="pt-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full relative">
                            <div className="absolute w-2 h-2 bg-black rounded-full left-3 top-4" />
                            <div className="absolute w-2 h-2 bg-black rounded-full right-3 top-4" />
                            <div className="absolute w-8 h-4 border-b-4 border-black rounded-full left-4 top-6" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Happy</h2>
                    <button className="bg-gray-800 text-white rounded-full p-3">
                        <Settings className="w-6 h-6" />
                    </button>
                </CardContent>

                <CardContent className="pb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Mood Statistics</h3>
                    <div className="flex justify-between items-end h-[220px]">
                        {daysOfWeek.map((day, index) => (
                            <div key={day} className="flex flex-col items-center justify-end h-full">
                                <div
                                    className="w-8 bg-green-400 rounded-t-full"
                                    style={{ height: `${moodData[index]}%` }}
                                />
                                <span className="text-xs mt-2">{day}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </main>
    );
};

export default MoodTrackerPage;
