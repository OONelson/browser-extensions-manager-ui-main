import { Switch } from "@heroui/switch";
import { Card } from "@heroui/card";

import { ExtensionCards } from "@/data";
import Button from "@/ui/button";

const ExtensionList: React.FC = () => {
  const ButtonItems = ["All", "Active", "Inactive"];

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
              className="text-[#091540] dark:text-white dark:bg-gray-800"
              label={item}
            />
          ))}
        </ul>
      </section>

      <section className="mt-4 lg:grid grid-cols-3 gap-3">
        {ExtensionCards.map((card, index) => (
          <Card
            key={index}
            className="p-4 mb-4 lg:my-0 rounded-3xl flex justify-between items-start w-full gap-y-5 dark:bg-gray-800"
          >
            <div className="flex justify-between items-start gap-x-3">
              <img
                alt="card-icon"
                className="w-[20%]"
                src={`./assets/images/${card.logo}`}
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
            <div className="flex justify-between items-center w-full">
              <Button
                className="border border-solid border-gray-300 text-[#091540] font-medium dark:bg-gray-800 dark:text-white"
                label="Remove"
              />
              <Switch defaultSelected color="danger" size="sm" />
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default ExtensionList;
