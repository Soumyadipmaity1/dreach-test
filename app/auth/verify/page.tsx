import React from 'react';
import Verify from "@/components/page-components/Auth/Verify";

type Props = {
  params: Record<string, string>;
  searchParams: Promise<{ phone: string }>;
}

export default async function VerifyPage({ searchParams }: Props) {
  const params = await searchParams;
  const phone = params.phone || '';
  
  return (
    <div className="container mx-auto py-8">
      <Verify phone={phone} />
    </div>
  );
}

export const metadata = {
  title: 'Verify Account',
  description: 'Verify your phone number',
};
