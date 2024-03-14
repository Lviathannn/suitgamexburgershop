import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useState } from "react";

type Props = {
  price: number;
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
  order: Order[];
};
export default function OrderHeader({ price, setOrder, order }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full justify-between">
      <p className="text-white text-xl font-medium">Total : Rp.{price}</p>
      <div className="flex gap-2">
        <AlertDialog open={isOpen}>
          <AlertDialogTrigger asChild>
            <button
              className="bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-500 disabled:cursor-not-allowed hover:bg-indigo-800 text-white px-4 py-2 rounded-md"
              disabled={price <= 0}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Order
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Apakah Anda yakin dengan pesanan anda ?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base">
                <div className="flex flex-col justify-between space-y-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Ingridient</p>
                    <p className="font-medium">Quantity</p>
                  </div>
                  <div className="space-y-1">
                    {order.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <p className="text-sm">{item.name}</p>
                        <p className="text-sm">{item.quantity}x</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Total : </p>
                    <p className="text-sm">Rp.{price}</p>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </AlertDialogCancel>
              <Link to="/order?succes=true">
                <AlertDialogAction
                  className="bg-indigo-500 hover:bg-indigo-800 w-full"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Yes
                </AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="bg-rose-500 hover:bg-rose-800 text-white px-4 py-2 rounded-md">
              Reset
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah Anda yakin ?</AlertDialogTitle>
              <AlertDialogDescription className="text-base">
                Anda akan mereset pesanan anda dan akan kehilangan semua pesanan
                yang telah anda buat.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-indigo-500 hover:bg-indigo-800"
                onClick={() => {
                  setOrder([]);
                }}
              >
                Yes
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  );
}
