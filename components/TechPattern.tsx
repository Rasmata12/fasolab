/**
 * Decorative, purely visual SVG elements used to give hero/section
 * backgrounds a "high-tech / science" feel — a benzene-ring style molecule
 * outline and a small circuit/network of connected nodes. Both are
 * rendered with currentColor-friendly opacity so they stay subtle behind
 * content. Purely decorative: aria-hidden.
 */

export function MoleculeHex({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M120 20 L196 62 L196 178 L120 220 L44 178 L44 62 Z"
        stroke="#1AA89C"
        strokeWidth="1"
        opacity="0.16"
      />
      <path
        d="M120 60 L160 82 L160 130 L120 152 L80 130 L80 82 Z"
        stroke="#1AA89C"
        strokeWidth="1"
        opacity="0.22"
      />
      {[
        [120, 20],
        [196, 62],
        [196, 178],
        [120, 220],
        [44, 178],
        [44, 62],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#1AA89C" opacity="0.25" />
      ))}
      <circle cx="120" cy="120" r="2" fill="#1AA89C" opacity="0.3" />
    </svg>
  );
}

export function CircuitNetwork({ className = "" }: { className?: string }) {
  const nodes: [number, number, number][] = [
    [40, 40, 3],
    [120, 20, 2],
    [200, 60, 4],
    [260, 30, 2],
    [80, 110, 2],
    [180, 130, 3],
    [250, 110, 2],
    [40, 190, 2],
    [130, 200, 4],
    [220, 210, 2],
    [300, 170, 3],
    [10, 130, 2],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [4, 5],
    [5, 6],
    [2, 6],
    [4, 7],
    [7, 8],
    [8, 9],
    [9, 10],
    [5, 9],
    [0, 7],
    [4, 0],
  ];
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#1AA89C"
          strokeWidth="0.75"
          opacity="0.1"
        />
      ))}
      {nodes.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={Math.max(r - 1, 1.2)} fill="#1AA89C" opacity="0.2" />
      ))}
    </svg>
  );
}
