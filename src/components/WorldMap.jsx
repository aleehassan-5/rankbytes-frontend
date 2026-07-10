import { useMemo } from 'react';
import { hubs } from '../data';

export default function WorldMap() {
  const dots = useMemo(
    () => Array.from({ length: 90 }, () => ({
      cx: Math.random() * 1000,
      cy: 60 + Math.random() * 380,
    })),
    []
  );

  const center = hubs[4]; // UAE acts as the network center

  return (
    <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={1.1} fill="rgba(255,255,255,0.10)" />
      ))}

      {hubs.map((hub, i) => {
        if (hub === center) return null;
        const midX = (hub.x + center.x) / 2;
        const midY = Math.min(hub.y, center.y) - 40;
        return (
          <path
            key={hub.name}
            d={`M ${center.x} ${center.y} Q ${midX} ${midY} ${hub.x} ${hub.y}`}
            fill="none"
            stroke="rgba(127,196,255,0.35)"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="map-arc"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        );
      })}

      {hubs.map((hub, i) => (
        <g key={hub.name}>
          <circle
            cx={hub.x}
            cy={hub.y}
            r={4}
            fill="none"
            stroke="#7FC4FF"
            strokeWidth="1.5"
            className="map-pulse"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
          <circle cx={hub.x} cy={hub.y} r={3} fill="#EAF4FF" />
        </g>
      ))}
    </svg>
  );
}
