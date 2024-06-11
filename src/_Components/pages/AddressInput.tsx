
import { Input } from '@/components/ui/input'
export function AddressInput() {
    return (
      <div className="flex-1">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Address
        </label>
        <Input
          id="address"
          type="text"
          className="border border-gray-300 h-300 w-full rounded p-2 mb-5"
          placeholder="Address"
        />
      </div>
    );
  }