import { Button, Card, CardBody } from "@heroui/react";

export default function Page() {
  return (
    <>
      <Card>
        <CardBody>
          <h1 className="text-4xl font-bold">Hello, Manas!</h1>
        </CardBody>
      </Card>
      <div className="p-4">
        <p className="text-3xl">This is a sample page using HeroUI components.</p>
      </div>
      <Button variant="flat" color="primary">Click Me</Button>
    </>
  )
}