"use client"

import { SimpleWidget } from './SimpleWidget';

import { useAppSelector } from '@/store';

import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
   const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap justify-center items-center p-2">
      <SimpleWidget
        title={isCart.toString()}
        subtitle="productos agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
}
