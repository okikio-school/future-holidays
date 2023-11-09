import type { Payment } from "./Column"

import { DataTable } from "./DataTable"
import { columns } from "./Column"

async function getData(): Promise<Payment[]> {
  // and this Payment[] is imported from .columns which will again controll the type of that data that is passed from the server component to the client component
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed53b",
      amount: 150,
      status: "processing",
      email: "w@example.com",
    },
    {
      id: "728ed54f",
      amount: 50,
      status: "failed",
      email: "l@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}