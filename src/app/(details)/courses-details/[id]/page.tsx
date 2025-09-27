import LayoutNavFot from '@/components/homeLayout/Layout/LayoutNavFot';
import React from 'react';
interface DetailsProps {
  params: {
    id: string;
  };
}
const Page = ({ params }: DetailsProps) => {
  const { id } = params;
  return (
    <LayoutNavFot>
      <div>You id is : {id}</div>
    </LayoutNavFot>
  );
};

export default Page;
