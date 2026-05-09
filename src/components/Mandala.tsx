export default function Mandala({ className = "", half = false, flip = false }: { className?: string, half?: boolean, flip?: boolean }) {
  // A simplified elegant SVG mandala representation
  return (
    <svg 
      viewBox={half ? "0 0 200 100" : "0 0 200 200"} 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.8">
        {/* Center circles */}
        <circle cx="100" cy={half ? "0" : "100"} r="15" strokeWidth="1.5"/>
        <circle cx="100" cy={half ? "0" : "100"} r="25" strokeDasharray="2 2"/>
        <circle cx="100" cy={half ? "0" : "100"} r="35" />
        
        {/* Inner petals */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <path 
              key={`petal1-${i}`}
              d={`M 100 ${half ? "0" : "100"} Q 110 ${half ? "20" : "120"} 100 ${half ? "50" : "150"} Q 90 ${half ? "20" : "120"} 100 ${half ? "0" : "100"}`}
              transform={`rotate(${angle} 100 ${half ? "0" : "100"})`}
              fill="none"
            />
          );
        })}

        {/* Outer details */}
        <circle cx="100" cy={half ? "0" : "100"} r="65" />
        <circle cx="100" cy={half ? "0" : "100"} r="70" strokeDasharray="1 3" strokeWidth="2"/>
        
        {/* Large outer petals */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <path 
              key={`petal2-${i}`}
              d={`M 100 ${half ? "65" : "35"} Q 115 ${half ? "80" : "20"} 100 ${half ? "95" : "5"} Q 85 ${half ? "80" : "20"} 100 ${half ? "65" : "35"}`}
              transform={`rotate(${angle} 100 ${half ? "0" : "100"})`}
              fill="none"
            />
          );
        })}

        {/* Small decorative dots */}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i * 360) / 48;
          return (
            <circle 
              key={`dot-${i}`}
              cx="100" 
              cy={half ? "98" : "2"} 
              r="1.5"
              fill="currentColor"
              transform={`rotate(${angle} 100 ${half ? "0" : "100"})`}
            />
          );
        })}
      </g>
    </svg>
  );
}
