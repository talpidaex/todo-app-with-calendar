import { useState } from "react";

type Checkbox = {
    label: string
}

export default function Checkbox({ label }: Checkbox) {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setIsChecked(event.target.checked)
    }

    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <span>{label}</span>
            </label>
        </div>
    );
};