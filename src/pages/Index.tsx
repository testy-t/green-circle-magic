
import React from 'react';
import { CircleDashed } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center overflow-hidden p-8 gap-12 flex-wrap">
      <div className="relative">
        <div className="absolute inset-0 bg-pink-300 rounded-full opacity-50 animate-ping"></div>
        <CircleDashed
          size={400}
          className="text-red-600 relative z-10 animate-pulse"
          strokeWidth={1}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-8 bg-card text-card-foreground p-8 rounded-lg shadow-lg min-w-[280px]">
        <section>
          <h2 className="text-lg font-semibold mb-4">Чекбоксы</h2>
          <div className="flex flex-col gap-3">
            {['Опция 1', 'Опция 2', 'Опция 3'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <Checkbox id={`cb-${i}`} defaultChecked={i === 0} />
                <Label htmlFor={`cb-${i}`}>{label}</Label>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Радиокнопки</h2>
          <RadioGroup defaultValue="r1" className="flex flex-col gap-3">
            {[
              { v: 'r1', label: 'Вариант A' },
              { v: 'r2', label: 'Вариант B' },
              { v: 'r3', label: 'Вариант C' },
            ].map((o) => (
              <div key={o.v} className="flex items-center gap-2">
                <RadioGroupItem value={o.v} id={o.v} />
                <Label htmlFor={o.v}>{o.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </section>
      </div>
    </div>
  );
};

export default Index;
