import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "../stores/itemsStore";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </aside>
  );
}