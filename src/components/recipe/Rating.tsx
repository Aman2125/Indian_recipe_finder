import React from 'react';
import { Star } from 'lucide-react';

interface Props {
  value: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
}

export default function Rating({ value, onChange, readonly = false }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => !readonly && onChange?.(star)}
          disabled={readonly}
          className={`${readonly ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <Star
            className={`h-5 w-5 ${
              star <= value
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
}