export const AddressValidationDiagram = () => {
  return (
    <div className="w-full bg-white/[0.02] rounded-lg p-6 border border-white/[0.06] mt-6">
      <svg viewBox="0 0 800 240" className="w-full h-auto">
        {/* Input */}
        <g>
          <rect x="10" y="90" width="90" height="60" rx="8" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2"/>
          <text x="55" y="115" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Input</text>
          <text x="55" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">10M/day</text>
        </g>

        {/* Arrow 1 */}
        <path d="M 110 120 L 140 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead2)"/>

        {/* Standardize */}
        <g>
          <rect x="150" y="90" width="90" height="60" rx="8" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2"/>
          <text x="195" y="115" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Standardize</text>
          <text x="195" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Normalize</text>
        </g>

        {/* Arrow 2 */}
        <path d="M 250 120 L 280 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead2)"/>

        {/* Deduplicate */}
        <g>
          <rect x="290" y="90" width="90" height="60" rx="8" fill="rgba(236, 72, 153, 0.2)" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2"/>
          <text x="335" y="115" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Dedupe</text>
          <text x="335" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">-40%</text>
        </g>

        {/* Arrow 3 - splits */}
        <path d="M 390 120 L 410 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <path d="M 410 120 L 410 60" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
        <path d="M 410 120 L 410 180" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead2)"/>

        {/* Cache Check - top path */}
        <g>
          <rect x="420" y="20" width="100" height="60" rx="8" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="2"/>
          <text x="470" y="45" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Cache Hit</text>
          <text x="470" y="65" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">70% (DDB)</text>
        </g>

        {/* API Call - bottom path */}
        <g>
          <rect x="420" y="160" width="100" height="60" rx="8" fill="rgba(251, 146, 60, 0.2)" stroke="rgba(251, 146, 60, 0.5)" strokeWidth="2"/>
          <text x="470" y="185" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">API Call</text>
          <text x="470" y="205" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">30% only</text>
        </g>

        {/* Merge paths */}
        <path d="M 530 50 L 560 50 L 560 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <path d="M 530 190 L 560 190 L 560 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
        <path d="M 560 120 L 590 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowhead2)"/>

        {/* Output */}
        <g>
          <rect x="600" y="90" width="90" height="60" rx="8" fill="rgba(250, 204, 21, 0.2)" stroke="rgba(250, 204, 21, 0.5)" strokeWidth="2"/>
          <text x="645" y="115" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600">Validated</text>
          <text x="645" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">Output</text>
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="rgba(255,255,255,0.3)" />
          </marker>
        </defs>

        {/* Cost label */}
        <text x="400" y="230" textAnchor="middle" fill="rgba(34, 197, 94, 0.9)" fontSize="11" fontWeight="600">
          82% Cost Reduction: $35K/day → $6.3K/day = $10.5M annual savings
        </text>
      </svg>
    </div>
  );
};
