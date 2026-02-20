type FieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email';
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
};

export function InputField({ id, label, type = 'text', required = false, placeholder, autoComplete }: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-nyxera-text">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded border border-nyxera-subtext/30 bg-[#0b1334] px-3 py-2 text-nyxera-text placeholder:text-nyxera-subtext/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric"
      />
    </div>
  );
}

export function TextareaField({
  id,
  label,
  required = false,
  rows = 5,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-nyxera-text">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={rows}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded border border-nyxera-subtext/30 bg-[#0b1334] px-3 py-2 text-nyxera-text placeholder:text-nyxera-subtext/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-nyxera-electric"
      />
    </div>
  );
}
