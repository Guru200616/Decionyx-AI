import { useState } from 'react';
import Layout from './components/Layout';
import DecisionHub from './components/screens/DecisionHub';
import CommandCenter from './components/screens/CommandCenter';
import SimulationLab from './components/screens/SimulationLab';
import Analytics from './components/screens/Analytics';

type Screen = 'decision-hub' | 'command-center' | 'simulation-lab' | 'analytics';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('decision-hub');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'decision-hub':
        return <DecisionHub />;
      case 'command-center':
        return <CommandCenter />;
      case 'simulation-lab':
        return <SimulationLab />;
      case 'analytics':
        return <Analytics />;
      default:
        return <DecisionHub />;
    }
  };

  return (
    <Layout currentScreen={currentScreen} setScreen={setCurrentScreen}>
      {renderScreen()}
    </Layout>
  );
}
