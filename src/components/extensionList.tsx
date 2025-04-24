import { ExtensionCards } from "@/data";
import Button from "@/ui/button";

const ExtensionList: React.FC = () => {
  const ButtonItems = ["All", "Active", "Inactive"];

  return (
    <main className="h-full">
      <section className="flex flex-col justify-center items-center py-6">
        <h1 className="text-2xl text-[#091540] font-bold py-3">
          Extensions List
        </h1>

        <ul className="flex justify-between items-center gap-3">
          {ButtonItems.map((item, index) => (
            <Button key={index} className="text-[#091540]" label={item} />
          ))}
        </ul>
      </section>

      <section>
        {ExtensionCards.map((card, index) => (
          <article key={index}>
            <div>
              <img alt="card-icon" src={`./assets/images/${card.logo}`} />
              <div>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
              </div>
            </div>
            <div>
              <Button label="Remove" />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ExtensionList;
