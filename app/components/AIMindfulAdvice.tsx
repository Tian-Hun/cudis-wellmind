import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BotMessageSquare, Lollipop, Music, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export const AIMindfulAdvice: React.FC = () => {
    const generateAdvice = (): string => {
        let advice = "Meditation: Try a 10-minute guided meditation to relax your mind.\n";

        advice += "Emotional Management: Practice deep breathing exercises to manage your stress levels.\n";

        advice += "Sleep Improvement: Aim for a consistent sleep schedule to improve sleep quality.\n";

        advice += "\nRemember, small steps can lead to significant improvements in your mental well-being.";

        return advice;
    };

    const advice = generateAdvice();

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    AI Mindful Advice
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="whitespace-pre-wrap text-sm">
                    {advice}
                </div>
                <Link href="/chat" className="flex items-center justify-end mt-6 gap-2">
                    <BotMessageSquare className="h-5 w-5" />
                    Chat with AI
                    <ArrowRight className="h-5 w-5" />
                </Link>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href="/meditation">
                    <Button variant="outline" className="bg-green-primary text-white">
                        <Lollipop className="h-4 w-4 mr-2" />
                        Start Meditation
                    </Button>
                </Link>
                <Link href="/music-therapy">
                    <Button variant="outline" className="bg-green-primary text-white">
                        <Music className="h-4 w-4 mr-2" />
                        Music Therapy
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};
