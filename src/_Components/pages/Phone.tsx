

import { Input } from '@/components/ui/input'
export function Phone() {
    return (
        <div className="flex-1">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-4">
                Telefone
            </label>
            <Input
                id="telefone"
                type="text"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                placeholder="telefone"
            />
        </div>
    );
}
