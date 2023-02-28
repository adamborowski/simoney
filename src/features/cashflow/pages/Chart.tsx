import { CashFlowAccomodated } from "../serivices/useCashflowEvents";
import React, { FC, useMemo } from "react";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
export interface ChartProps {
  data: Exclude<CashFlowAccomodated["timeline"], null>;
}

const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const event = payload[0].payload;
    return (
      <div
        className="custom-tooltip"
        style={{
          background: "white",
          padding: 10,
        }}
      >
        <p className="label">
          {new Date(Number(payload[0].value)).toISOString().split("T")[0]}
        </p>
        <p className="label">
          {event.name}: {event.amount}
        </p>
        <p className="label">{payload[1].value}</p>
      </div>
    );
  }

  return null;
};

export const Chart: FC<ChartProps> = ({ data }) => {
  const translatedData = useMemo(
    () => data.map((d) => ({ ...d, date: d.date.getTime() })),
    [data]
  );
  return (
    <ResponsiveContainer height={400}>
      <ScatterChart>
        <Scatter
          data={translatedData}
          line={{ stroke: "#eee" }}
          lineJointType="monotoneX"
          lineType="joint"
          name="Values"
          dataKey="accomodatedAmount"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis
          dataKey="date"
          type="number"
          domain={["auto", "auto"]}
          tickFormatter={(value) => new Date(value).toISOString().split("T")[0]}
        />
        <YAxis dataKey="accomodatedAmount" />
        <Tooltip content={<CustomTooltip />} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
