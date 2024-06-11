

import { Input } from '@/components/ui/input'
export function CompanyInput() {
    return (
        <div className="flex-1">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-4">
                company
            </label>
            <Input
                id="company"
                type="text"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                placeholder="company"
            />
        </div>
    );
}
