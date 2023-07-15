import { LineChart, Line, XAxis, Tooltip, YAxis, Rectangle } from "recharts";
import React, { useState } from "react";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            fontSize: "10px",
            padding: "10px",
          }}
        >
          {`${payload[0].value} min`}
        </div>
      </>
    );
  }
  return null;
}

const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;

  if (payload.visible) {
    return (
      <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="white">
        <g transform="translate(4 4)">
          <circle r="4" fill="black" />
          <circle r="2" fill="white" />
        </g>
      </svg>
    );
  }

  return null;
};

export default function SessionsChart(props) {
  const { sessions } = props;

  const data = sessions?.map((item) => ({
    name: item.day,
    minutes: item.sessionLength,
  }));

  const minutesValues = data?.map((item) => item.minutes);
  const minMinutes = minutesValues ? Math.min(...minutesValues) : null;
  const maxMinutes = minutesValues ? Math.max(...minutesValues) + 40 : null;

  return (
    <LineChart
      width={270}
      height={260}
      data={data}
      style={{
        background: "#FF0000",
        fontSize: "16px",
        padding: "10px 0",
        borderRadius: "5px",
        margin: "0 40px 0 0",
      }}
    >
      <text x={30} y={40} fill="#fff" fillOpacity={0.5}>
        Durée moyenne des sessions
      </text>
      <XAxis
        dataKey="name"
        tickLine={false}
        axisLine={false}
        tickSize={17}
        tick={{ fill: "#fff", opacity: "0.5" }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tick={() => <text style={{ display: "none" }} />}
        domain={[minMinutes === 0 ? minMinutes : 0, maxMinutes]}
        hide
      />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="minutes"
        stroke="#ededed"
        opacity={0.8}
        strokeWidth={2}
        dot={<CustomizedDot />}
      />
    </LineChart>
  );
}

// const CustomCursor = (props) => {
//   const { points, width, height, fill, active, payload } = props;
//   const x = points[0]?.payload?.name;

//   if (!active || !payload) {
//     return null;
//   }
//   const cursorWidth = width + 10;

//   return (
//     <svg
//       x={x}
//       width={cursorWidth}
//       height={height}
//       style={{ position: "absolute", zIndex: 9999 }}
//     >
//       <rect x={width / 2} y={0} width={width} height={height} fill={fill} />
//     </svg>
//   );

// (
//   <svg
//     width={width}
//     height={height}
//     style={{ position: "absolute", zIndex: 9999 }}
//   >
//     <rect width={width} height={height} fill={fill} />
//   </svg>
// );
// (
//   <svg
//     x={x}
//     width={width}
//     height={height}
//     style={{ transform: "translate(-50%, -50%)" }} // Dodajemy styl, aby wycentrować kursor
//   >
//     <rect x={0} y={0} width={width} height={height} fill={fill} />
//   </svg>
// );
// <Rectangle x={x} width={width} height={height} fill={fill} />;
// };

// export default function SessionsChart(props) {
//   const { sessions } = props;
//   const [activeIndex, setActiveIndex] = useState(null);

//   const data = sessions?.map((item, index) => ({
//     name: item.day,
//     uv: item.sessionLength,
//     active: activeIndex === index,
//     index: index,
//   }));

//   const handleMouseEnter = (data, index) => {
//     setActiveIndex(data.index);
//   };

//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   const tooltipStyle = {
//     color: "#000000",
//   };

//   return (
//     <div className="sessions-wrapper">
//       <LineChart
//         width={300}
//         height={300}
//         data={data}
//         style={{ background: "#FF0000" }}
//       >
//         <XAxis
//           dataKey="name"
//           tickLine={false}
//           axisLine={false}
//           tickSize={17}
//           stroke="#c7c7c7"
//         />
//         <Tooltip
//           itemStyle={tooltipStyle}
//           cursor={<CustomCursor width={30} height={50} fill="white" />}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         />
//         <Line type="monotone" dataKey="uv" stroke="#ededed" strokeWidth={2} />
//       </LineChart>
//     </div>
//   );
// }
