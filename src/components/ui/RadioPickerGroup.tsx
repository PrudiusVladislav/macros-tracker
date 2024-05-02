import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface RadioPickerGroupProps {
    description?: string;
    options: { value: string; label: string }[];
    value: string;
}

function RadioPickerGroup({ description, options, value }: RadioPickerGroupProps) {
  return (
    <div>
        <p className="text-secondary-text mb-2">{description}</p>
        <Tabs defaultValue={value} className="w-[400px]">
            <TabsList>
                {options.map(option => (
                    <TabsTrigger key={option.value} value={option.value}>
                        {option.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    </div>
  );
}

export default RadioPickerGroup;