import { Globe, Lock, Home, Database, QrCode, Stethoscope, CreditCard, Coins, FileText, TrendingUp, Bell, Calendar, Users } from 'lucide-react';
import { ScreenNode } from './ScreenNode';
import { ConnectionLines } from './ConnectionLines';

interface SitemapViewProps {
  onScreenClick: (screen: string) => void;
}

export function SitemapView({ onScreenClick }: SitemapViewProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-visible">
        {/* SVG for connection lines */}
        <ConnectionLines />
        
        {/* Sitemap Layout */}
        <div className="relative" style={{ minHeight: '1200px' }}>
          
          {/* Row 1: Welcome/Landing */}
          <div className="absolute" style={{ left: '50%', top: '20px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Globe className="w-6 h-6" />}
              title="Welcome / Landing"
              color="blue"
              onClick={() => onScreenClick('welcome')}
            />
          </div>

          {/* Row 2: Registration */}
          <div className="absolute" style={{ left: '50%', top: '140px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Lock className="w-6 h-6" />}
              title="Registration"
              color="blue"
              onClick={() => onScreenClick('registration')}
            />
          </div>

          {/* Row 3: Main Dashboard (Teal) */}
          <div className="absolute" style={{ left: '50%', top: '260px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Home className="w-6 h-6" />}
              title="Main Dashboard"
              color="teal"
              onClick={() => onScreenClick('main-dashboard-1')}
            />
          </div>

          {/* Row 3 Right: Mourance & Payments */}
          <div className="absolute" style={{ left: 'calc(50% + 320px)', top: '260px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<CreditCard className="w-6 h-6" />}
              title="Mourance & Payments Module"
              color="green"
              onClick={() => onScreenClick('mourance')}
              size="large"
            />
          </div>

          {/* Row 4 Left: Impoth/Sync Data */}
          <div className="absolute" style={{ left: 'calc(50% - 420px)', top: '400px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Database className="w-6 h-6" />}
              title="Impoth / Sync Data"
              color="blue"
              onClick={() => onScreenClick('sync-data')}
            />
          </div>

          {/* Row 4 Center: Main Dashboard (Purple) */}
          <div className="absolute" style={{ left: '50%', top: '400px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Home className="w-6 h-6" />}
              title="Main Dashboard"
              color="purple"
              onClick={() => onScreenClick('main-dashboard-2')}
              details={['Health summary', 'Insurance card', 'Family / Profile']}
            />
          </div>

          {/* Row 4 Right: Payment Gateway */}
          <div className="absolute" style={{ left: 'calc(50% + 320px)', top: '400px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Coins className="w-6 h-6" />}
              title="Payment Gateway"
              subtitle="(card SEPA wörke)"
              color="teal"
              onClick={() => onScreenClick('payment-gateway')}
            />
          </div>

          {/* Row 5 Left: Visit ID/QR Check-in */}
          <div className="absolute" style={{ left: 'calc(50% - 420px)', top: '540px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<QrCode className="w-6 h-6" />}
              title="Visit ID / QR Check-in"
              color="blue"
              onClick={() => onScreenClick('qr-checkin')}
            />
          </div>

          {/* Row 5 Right: Billing & Claim Overview */}
          <div className="absolute" style={{ left: 'calc(50% + 320px)', top: '540px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<FileText className="w-6 h-6" />}
              title="Billing & Claim Overview"
              color="teal"
              onClick={() => onScreenClick('billing')}
            />
          </div>

          {/* Row 6 Left: Doctor Visit Summary */}
          <div className="absolute" style={{ left: 'calc(50% - 420px)', top: '680px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Stethoscope className="w-6 h-6" />}
              title="Doctor Visit Summary"
              color="blue"
              onClick={() => onScreenClick('doctor-visit')}
            />
          </div>

          {/* Row 6 Right: Insurance Status */}
          <div className="absolute" style={{ left: 'calc(50% + 320px)', top: '680px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<TrendingUp className="w-6 h-6" />}
              title="Insurance Status"
              subtitle="(active / expired)"
              color="teal"
              onClick={() => onScreenClick('insurance-status')}
            />
          </div>

          {/* Row 7: Notifications & Support */}
          <div className="absolute" style={{ left: '50%', top: '820px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Bell className="w-6 h-6" />}
              title="Notifications & Support"
              color="orange"
              onClick={() => onScreenClick('notifications')}
            />
          </div>

          {/* Row 8: Family/Preventive Care Modules */}
          <div className="absolute" style={{ left: 'calc(50% - 200px)', top: '960px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Calendar className="w-6 h-6" />}
              title="Family/ Preventive Care Module"
              color="purple"
              onClick={() => onScreenClick('preventive-care-1')}
              details={['Reminder & Alerts', 'for vaccinations etc.']}
            />
          </div>

          <div className="absolute" style={{ left: 'calc(50% + 200px)', top: '960px', transform: 'translateX(-50%)' }}>
            <ScreenNode
              icon={<Users className="w-6 h-6" />}
              title="Family / Preventive Care Module"
              color="purple"
              onClick={() => onScreenClick('preventive-care-2')}
              details={['Data Sharing QR', '& Consent Control']}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
