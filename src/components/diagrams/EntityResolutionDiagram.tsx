export const EntityResolutionDiagram = () => {
  return (
    <div className="w-full bg-white/[0.02] rounded-lg p-6 border border-white/[0.06] mt-6">
      <svg viewBox="0 0 800 200" className="w-full h-auto">
        {/* Raw Data */}
        <g>
          <rect x="10" y="70" width="100" height="60" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2"/>
          <text x="60" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Raw Data</text>
          <text x="60" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">50M records</text>
        </g>

        {/* Arrow 1 */}
        <path d="M 120 100 L 150 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

        {/* Standardize */}
        <g>
          <rect x="160" y="70" width="100" height="60" rx="8" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2"/>
          <text x="210" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Standardize</text>
          <text x="210" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Clean data</text>
        </g>

        {/* Arrow 2 */}
        <path d="M 270 100 L 300 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

        {/* Blocking */}
        <g>
          <rect x="310" y="70" width="100" height="60" rx="8" fill="rgba(236, 72, 153, 0.2)" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2"/>
          <text x="360" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Blocking</text>
          <text x="360" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Multi-pass</text>
        </g>

        {/* Arrow 3 */}
        <path d="M 420 100 L 450 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

        {/* Matching */}
        <g>
          <rect x="460" y="70" width="100" height="60" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2"/>
          <text x="510" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Matching</text>
          <text x="510" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Splink</text>
        </g>

        {/* Arrow 4 */}
        <path d="M 570 100 L 600 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead)"/>

        {/* Golden Records */}
        <g>
          <rect x="610" y="70" width="100" height="60" rx="8" fill="rgba(250, 204, 21, 0.2)" stroke="rgba(250, 204, 21, 0.5)" strokeWidth="2"/>
          <text x="660" y="95" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Golden</text>
          <text x="660" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Records</text>
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.3)" />
          </marker>
        </defs>

        {/* Performance label */}
        <text x="400" y="170" textAnchor="middle" fill="rgba(139, 92, 246, 0.9)" fontSize="11" fontWeight="600">
          99.996% Comparison Reduction (O(n²) → O(n))
        </text>
      </svg>
    </div>
  );
};
