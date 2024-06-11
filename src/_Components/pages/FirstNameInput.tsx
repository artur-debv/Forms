
import { Input } from '@/components/ui/input'
export function FirstNameInput() {
    return (
      <div className="flex-1">
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
          First Name
        </label>
        <Input
          id="first-name"
          type="text"
          className="border border-gray-300 rounded p-2 w-full mb-4"
          placeholder="First name"
        />
      </div>
    );
  }