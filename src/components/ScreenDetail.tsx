import { ArrowRight, Globe, Lock, Home, Database, QrCode, Stethoscope, CreditCard, Coins, FileText, TrendingUp, Bell, Calendar, Users } from 'lucide-react';
import { Card } from './ui/card';

interface ScreenDetailProps {
  screen: string;
  onNavigate: (screen: string) => void;
}

const screenData: Record<string, {
  title: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  connections: { label: string; screen: string }[];
  persona?: string[];
}> = {
  'welcome': {
    title: 'Welcome / Landing',
    icon: <Globe className="w-8 h-8" />,
    description: 'The entry point for CareMehr application. Multi-language support and initial onboarding.',
    features: [
      'Multi-language selection',
      'Introduction to CareMehr services',
      'Quick access to registration',
      'Information about insurance coverage'
    ],
    connections: [
      { label: 'Sign Up', screen: 'registration' }
    ],
    persona: ['AMIR', 'LENA', 'General Users']
  },
  'registration': {
    title: 'Registration',
    icon: <Lock className="w-8 h-8" />,
    description: 'Secure user registration and authentication.',
    features: [
      'User account creation',
      'Identity verification',
      'Insurance information input',
      'Privacy consent management'
    ],
    connections: [
      { label: 'Continue to Dashboard', screen: 'main-dashboard-1' }
    ],
    persona: ['AMIR', 'LENA']
  },
  'main-dashboard-1': {
    title: 'Main Dashboard',
    icon: <Home className="w-8 h-8" />,
    description: 'Primary navigation hub after registration.',
    features: [
      'Quick access to key features',
      'Recent activity overview',
      'Navigation to specialized modules',
      'Account status at a glance'
    ],
    connections: [
      { label: 'View Payment Options', screen: 'mourance' },
      { label: 'Sync Medical Data', screen: 'sync-data' },
      { label: 'Access Main Features', screen: 'main-dashboard-2' }
    ],
    persona: ['All Users']
  },
  'sync-data': {
    title: 'Impoth / Sync Data',
    icon: <Database className="w-8 h-8" />,
    description: 'Import and synchronize medical data from external sources.',
    features: [
      'Import health records',
      'Sync with healthcare providers',
      'Data validation and verification',
      'Secure data storage'
    ],
    connections: [
      { label: 'View in Dashboard', screen: 'main-dashboard-2' },
      { label: 'Check-in with QR', screen: 'qr-checkin' }
    ],
    persona: ['AMIR']
  },
  'main-dashboard-2': {
    title: 'Main Dashboard',
    icon: <Home className="w-8 h-8" />,
    description: 'Comprehensive dashboard with health overview and family management.',
    features: [
      'Health summary overview',
      'Digital insurance card',
      'Family / Profile management',
      'Quick actions and shortcuts'
    ],
    connections: [
      { label: 'Make Payment', screen: 'payment-gateway' },
      { label: 'View Claims', screen: 'billing' },
      { label: 'Check Insurance', screen: 'insurance-status' }
    ],
    persona: ['AMIR', 'LENA']
  },
  'qr-checkin': {
    title: 'Visit ID / QR Check-in',
    icon: <QrCode className="w-8 h-8" />,
    description: 'Quick check-in for doctor visits using QR codes.',
    features: [
      'Generate visit QR code',
      'Scan QR for instant check-in',
      'Appointment verification',
      'Waiting time estimation'
    ],
    connections: [
      { label: 'View Visit Summary', screen: 'doctor-visit' }
    ],
    persona: ['AMIR']
  },
  'doctor-visit': {
    title: 'Doctor Visit Summary',
    icon: <Stethoscope className="w-8 h-8" />,
    description: 'Detailed summary of doctor visits and medical consultations.',
    features: [
      'Visit history and records',
      'Diagnosis information',
      'Prescription details',
      'Follow-up recommendations'
    ],
    connections: [
      { label: 'Get Support', screen: 'notifications' }
    ],
    persona: ['AMIR']
  },
  'mourance': {
    title: 'Mourance & Payments Module',
    icon: <CreditCard className="w-8 h-8" />,
    description: 'Insurance coverage and payment management.',
    features: [
      'Insurance plan overview',
      'Coverage details',
      'Payment history',
      'Premium management'
    ],
    connections: [],
    persona: ['LENA']
  },
  'payment-gateway': {
    title: 'Payment Gateway',
    icon: <Coins className="w-8 h-8" />,
    description: 'Secure payment processing (card, SEPA, wörke).',
    features: [
      'Multiple payment methods',
      'Card payment processing',
      'SEPA direct debit',
      'Payment confirmation'
    ],
    connections: [],
    persona: ['LENA']
  },
  'billing': {
    title: 'Billing & Claim Overview',
    icon: <FileText className="w-8 h-8" />,
    description: 'Track billing and insurance claims.',
    features: [
      'Itemized billing statements',
      'Claim status tracking',
      'Reimbursement history',
      'Download invoices'
    ],
    connections: [],
    persona: ['LENA']
  },
  'insurance-status': {
    title: 'Insurance Status',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Monitor insurance status (active/expired).',
    features: [
      'Active coverage status',
      'Expiration dates',
      'Renewal reminders',
      'Coverage limits'
    ],
    connections: [
      { label: 'Get Notifications', screen: 'notifications' }
    ],
    persona: ['LENA']
  },
  'notifications': {
    title: 'Notifications & Support',
    icon: <Bell className="w-8 h-8" />,
    description: 'Centralized notifications and customer support.',
    features: [
      'Important alerts and reminders',
      'Customer support chat',
      'Help documentation',
      'Contact information'
    ],
    connections: [
      { label: 'Preventive Care (Reminders)', screen: 'preventive-care-1' },
      { label: 'Preventive Care (Data Sharing)', screen: 'preventive-care-2' }
    ],
    persona: ['All Users']
  },
  'preventive-care-1': {
    title: 'Family / Preventive Care Module',
    icon: <Calendar className="w-8 h-8" />,
    description: 'Reminder and alerts for vaccinations and preventive care.',
    features: [
      'Vaccination schedule',
      'Preventive care reminders',
      'Health check-up alerts',
      'Family member tracking'
    ],
    connections: [],
    persona: ['LENA']
  },
  'preventive-care-2': {
    title: 'Family / Preventive Care Module',
    icon: <Users className="w-8 h-8" />,
    description: 'Data sharing QR and consent control.',
    features: [
      'Generate data sharing QR codes',
      'Consent management',
      'Privacy controls',
      'Authorized access logs'
    ],
    connections: [],
    persona: ['AMIR', 'LENA']
  }
};

export function ScreenDetail({ screen, onNavigate }: ScreenDetailProps) {
  const data = screenData[screen];
  
  if (!data) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 text-center">
          <p className="text-slate-600">Screen not found</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-500 text-white p-4 rounded-xl">
            {data.icon}
          </div>
          <div className="flex-1">
            <h2 className="text-slate-900 mb-2">{data.title}</h2>
            <p className="text-slate-600">{data.description}</p>
            {data.persona && (
              <div className="mt-3 flex gap-2">
                {data.persona.map((p) => (
                  <span key={p} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-slate-900 mb-3">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {data.connections.length > 0 && (
          <div>
            <h3 className="text-slate-900 mb-3">Navigate to</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.connections.map((connection, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(connection.screen)}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 rounded-lg transition-all border border-blue-200 hover:border-blue-300 group"
                >
                  <span className="text-slate-700">{connection.label}</span>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
