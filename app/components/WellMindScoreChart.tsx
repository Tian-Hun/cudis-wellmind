"use client";

import { Label, PolarAngleAxis, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
    ChartConfig,
    ChartContainer,
} from "@/components/ui/chart";

const chartData = [
    {
        name: 'Score',
        score: 86,
        fill: "#B4C48D",
    },
];

const chartConfig = {
    score: {
        label: "Score",
        color: "hsl(var(--green-foreground))",
    },
} satisfies ChartConfig;

export const WellMindScoreChart = () => {
    const score = chartData[0].score;

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full"
        >
            <RadialBarChart
                innerRadius={70}
                data={chartData}
                startAngle={0}
                endAngle={360}
            >
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-green-foreground text-4xl font-bold"
                                        >
                                            {score.toLocaleString()}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-green-foreground"
                                        >
                                            Healthy
                                        </tspan>
                                    </text>
                                );
                            }
                        }}
                    />
                </PolarRadiusAxis>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    background
                    dataKey="score"
                    cornerRadius={5}
                />
            </RadialBarChart>
        </ChartContainer>
    );
};
