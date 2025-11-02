"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  type TooltipProps,
  type LegendProps,
  type TooltipPayload,
  type LegendPayload,
} from "recharts";

import { cn } from "./utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = { config: ChartConfig };

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within a <ChartContainer />");
  return ctx;
}

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export const ChartTooltip = RechartsTooltip;
export const ChartLegend = RechartsLegend;

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  formatter,
  labelFormatter,
}: TooltipProps<number, string> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
  className?: string;
}) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload.length) return null;
    const [item] = payload;
    const key = item?.dataKey ?? item?.name ?? "value";
    const itemConfig = config[key as keyof typeof config];
    const value =
      typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label || label;

    if (labelFormatter) {
      return <div className="font-medium">{labelFormatter(value, payload)}</div>;
    }
    return value ? <div className="font-medium">{value}</div> : null;
  }, [label, labelFormatter, payload, hideLabel, config]);

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item: TooltipPayload, index) => {
          const key = item.dataKey ?? item.name ?? "value";
          const itemConfig = config[key as keyof typeof config];
          const indicatorColor =
            (item.color as string) || (item.payload?.fill as string);

          return (
            <div
              key={key}
              className={cn(
                "flex w-full flex-wrap items-center gap-2",
                "[&>svg]:h-2.5 [&>svg]:w-2.5"
              )}
            >
              {!hideIndicator && (
                <div
                  className={cn("rounded-[2px]", {
                    "h-2.5 w-2.5": indicator === "dot",
                    "w-1 h-2.5": indicator === "line",
                    "w-0 border-[1.5px] border-dashed h-2.5":
                      indicator === "dashed",
                  })}
                  style={{
                    backgroundColor:
                      indicator === "dot" ? indicatorColor : "transparent",
                    borderColor: indicatorColor,
                  }}
                />
              )}
              <div className="flex flex-1 justify-between">
                <span className="text-muted-foreground">
                  {itemConfig?.label || item.name}
                </span>
                {item.value !== undefined && (
                  <span className="text-foreground font-mono font-medium tabular-nums">
                    {Number(item.value).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ChartLegendContent({
  payload,
  className,
  hideIcon = false,
  verticalAlign = "bottom",
}: LegendProps & {
  hideIcon?: boolean;
  className?: string;
}) {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {(payload as LegendPayload[]).map((item) => {
        const key = item.dataKey ?? "value";
        const itemConfig = config[key as keyof typeof config];
        return (
          <div
            key={item.value}
            className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          >
            {!hideIcon ? (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            ) : null}
            {itemConfig?.label ?? item.value}
          </div>
        );
      })}
    </div>
  );
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([, v]) => v.theme || v.color
  );
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}`
          )
          .join("\n"),
      }}
    />
  );
}
