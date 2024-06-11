import { Input } from '@/components/ui/input'
export function LastNameInput() {
    return (
        <div className="flex-1">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
            </label>
            <Input
                id="last-name"
                type="text"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                placeholder="Last name"
            />
        </div>
    );
}