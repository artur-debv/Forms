
import { Button } from '@/components/ui/button';
import { AddressInput } from '../_Components/pages/AddressInput';
import { CompanyInput } from '../_Components/pages/CompanyInput';
import { FirstNameInput } from '../_Components/pages/FirstNameInput';
import { LastNameInput } from '../_Components/pages/LastNameInput';
import { Phone } from '../_Components/pages/Phone';
import '../styles/global.css';

// App
export default function App() {
  // State hook to manage the selected date

  return (
    // Container for the application
    <div className="flex items-center justify-center h-screen w-full bg-zinc-100">
      <div className="w-full max-w-xl bg-white shadow rounded p-8">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-5">Registration</h1>
        <AddressInput />
        <FirstNameInput />
        <LastNameInput />
        <CompanyInput />
        <Phone />
        <Button className=' w-full h-full' variant="outline">Register</Button>
      </div>
    </div>
  );
}
