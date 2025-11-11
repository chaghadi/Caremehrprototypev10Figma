export function ConnectionLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {/* Welcome to Registration */}
      <line x1="50%" y1="90" x2="50%" y2="140" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      
      {/* Registration to Main Dashboard 1 */}
      <line x1="50%" y1="210" x2="50%" y2="260" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      
      {/* Main Dashboard 1 to Main Dashboard 2 */}
      <line x1="50%" y1="330" x2="50%" y2="400" stroke="#5eead4" strokeWidth="2" markerEnd="url(#arrowTeal)" />
      
      {/* Main Dashboard 1 to Mourance (right) */}
      <line x1="calc(50% + 130px)" y1="295" x2="calc(50% + 190px)" y2="295" stroke="#5eead4" strokeWidth="2" markerEnd="url(#arrowGreen)" />
      
      {/* Main Dashboard 1 to Impoth (left arc) */}
      <path d="M calc(50% - 130px) 295 Q calc(50% - 280px) 295, calc(50% - 280px) 435" fill="none" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      
      {/* Impoth bidirectional to Main Dashboard 2 */}
      <path d="M calc(50% - 285px) 435 Q calc(50% - 150px) 435, calc(50% - 130px) 435" fill="none" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowPurple)" />
      
      {/* Main Dashboard 2 to Payment Gateway */}
      <line x1="calc(50% + 130px)" y1="435" x2="calc(50% + 190px)" y2="435" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowTeal)" />
      
      {/* Main Dashboard 2 to Billing */}
      <line x1="calc(50% + 130px)" y1="465" x2="calc(50% + 250px)" y2="575" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowTeal)" />
      
      {/* Main Dashboard 2 to Insurance Status */}
      <line x1="calc(50% + 130px)" y1="465" x2="calc(50% + 250px)" y2="715" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowTeal)" />
      
      {/* Impoth to Visit ID */}
      <line x1="calc(50% - 420px)" y1="470" x2="calc(50% - 420px)" y2="540" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      
      {/* Visit ID to Doctor Visit */}
      <line x1="calc(50% - 420px)" y1="610" x2="calc(50% - 420px)" y2="680" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      
      {/* Doctor Visit to Notifications */}
      <path d="M calc(50% - 290px) 715 Q calc(50% - 150px) 800, 50% 820" fill="none" stroke="#93c5fd" strokeWidth="2" markerEnd="url(#arrowOrange)" />
      
      {/* Insurance Status to Notifications */}
      <path d="M calc(50% + 190px) 715 Q calc(50% + 100px) 770, 50% 820" fill="none" stroke="#5eead4" strokeWidth="2" markerEnd="url(#arrowOrange)" />
      
      {/* Notifications to Preventive Care 1 */}
      <line x1="calc(50% - 40px)" y1="890" x2="calc(50% - 100px)" y2="960" stroke="#fb923c" strokeWidth="2" markerEnd="url(#arrowPurple)" />
      
      {/* Notifications to Preventive Care 2 */}
      <line x1="calc(50% + 40px)" y1="890" x2="calc(50% + 100px)" y2="960" stroke="#fb923c" strokeWidth="2" markerEnd="url(#arrowPurple)" />
      
      {/* Arrow markers */}
      <defs>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#93c5fd" />
        </marker>
        <marker id="arrowTeal" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#5eead4" />
        </marker>
        <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#a78bfa" />
        </marker>
        <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#fb923c" />
        </marker>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#86efac" />
        </marker>
      </defs>
    </svg>
  );
}
