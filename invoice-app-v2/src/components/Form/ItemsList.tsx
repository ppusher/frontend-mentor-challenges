"use client";
import { Item } from "@/lib/types";
import { useEffect, useState } from "react";

interface ItemsListProps {
	invoiceItemData: Item[];
	onItemsListChange: (items: string | Item[]) => void;
}

export default function ItemsList({
	invoiceItemData,
	onItemsListChange,
}: ItemsListProps) {
	const [itemsList, setItemsList] = useState<Item[]>(invoiceItemData);

	function handleInputChange(
		index: number,
		field: keyof Item,
		value: string | number,
	) {
		const newItems = [...itemsList];
		newItems[index] = { ...newItems[index], [field]: value };
		if (newItems[index].quantity && newItems[index].price) {
			newItems[index].total = newItems[index].quantity * newItems[index].price;
		} else {
			newItems[index].total = 0;
		}
		setItemsList(newItems);
	}

	function handleAddItem() {
		setItemsList([...itemsList, { name: "", quantity: 0, price: 0, total: 0 }]);
	}

	useEffect(() => {
		onItemsListChange(itemsList);
	}, [itemsList]);

	return (
		<fieldset>
			<legend>Item List</legend>
			<table>
				<thead>
					<tr>
						<th>Item Name</th>
						<th>Qty.</th>
						<th>Price</th>
						<th>Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{itemsList.map((item, index) => (
						<tr key={index}>
							<td>
								<input
									type="text"
									name={`item.name${index}`}
									value={item.name}
									onChange={(e) =>
										handleInputChange(index, "name", e.target.value)
									}
								/>
							</td>
							<td>
								<input
									type="number"
									name={`item.quantity${index}`}
									value={item.quantity}
									onChange={(e) =>
										handleInputChange(
											index,
											"quantity",
											parseInt(e.target.value),
										)
									}
								/>
							</td>
							<td>
								<input
									type="number"
									step="1.0"
									name={`item.price${index}`}
									value={item.price}
									onChange={(e) =>
										handleInputChange(
											index,
											"price",
											parseFloat(e.target.value),
										)
									}
								/>
							</td>
							<td>{item.total}</td>
							<td>
								<button type="button" disabled>
									DELETE
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button
				className="btn-basic text-text-tertiary bg-background-secondary w-full"
				type="button"
				onClick={handleAddItem}
			>
				+ Add New Item
			</button>
		</fieldset>
	);
}
