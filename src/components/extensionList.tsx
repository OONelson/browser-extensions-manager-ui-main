import { useState } from "react";
import { Switch } from "@heroui/switch";
import { Card } from "@heroui/card";
import { cn } from "@heroui/theme";

import { ExtensionCards } from "@/data";
import Button from "@/ui/button";

const ButtonItems = ["All", "Active", "Inactive"];

const ExtensionList: React.FC = () => {
  const [filter, setFilter] = useState<"All" | "Active" | "Inactive">("All");

  const [extensions, setExtensions] = useState(
    ExtensionCards.map((item) => ({
      ...item,
      id: item.id,
      isActive: item.isActive ?? false,
    }))
  );

  const handleToggle = (id: number) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "Active") return !ext.isActive;
    if (filter === "Inactive") return ext.isActive;

    return true;
  });

  return (
    <main className="h-full">
      <section className="flex flex-col justify-center items-center py-6 lg:flex-row lg:justify-between">
        <h1 className="text-2xl text-[#091540] dark:text-white font-bold py-3">
          Extensions List
        </h1>

        <ul className="flex justify-between items-center gap-3">
          {ButtonItems.map((item, index) => (
            <Button
              key={index}
              className={cn(
                "text-[#091540] dark:text-white dark:bg-gray-800 hover:text-[#34437a] hover:bg-neutral-50",
                {
                  "bg-red-700 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-500 text-white":
                    filter === item,
                }
              )}
              label={item}
              onClick={() => setFilter(item as "All" | "Active" | "Inactive")}
            />
          ))}
        </ul>
      </section>

      <section className="mt-4 lg:grid grid-cols-3 gap-3">
        {filteredExtensions.map((card) => (
          <Card
            key={card.id}
            className="p-4 mb-4 lg:my-0 rounded-3xl flex justify-between items-start w-full gap-y-5 dark:bg-gray-800"
          >
            <div className="flex justify-between items-start gap-x-3">
              <img
                alt="card-icon"
                className="w-[20%]"
                src={`./images/${card.logo}`}
              />
              <div className="flex justify-between items-start flex-col ">
                <h3 className="text-[#091540] text-lg font-bold dark:text-white">
                  {card.name}
                </h3>
                <p className=" text-gray-500 font-medium text-[13px] dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full h-[50px]">
              <Button
                className="border border-solid border-gray-300 text-[#091540] font-medium dark:bg-gray-800 dark:text-white dark:hover:bg-red-700 hover:border-none hover:bg-red-700 hover:text-white focus:outline-2 focus:border-none focus:outline-offset-2 transition-colors  "
                label="Remove"
              />
              <Switch
                defaultSelected
                color="danger"
                isSelected={!card.isActive}
                size="sm"
                onClick={() => handleToggle(card.id)}
              />
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default ExtensionList;
