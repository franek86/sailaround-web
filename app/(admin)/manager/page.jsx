import React from "react";
import Link from "next/link";
import Title from "@/app/components/Title";
import Card from "@/app/components/Card";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const ManagerCard = ({ title, link, shortText }) => {
  return (
    <Link className="display" href={link}>
      <Card variation="card">
        <Title level={4} addClasses="text-md text-zinc-600">
          {title}
        </Title>
        {shortText && <div className="my-2 text-sm text-zinc-400">{shortText}</div>}
        <div className="flex justify-end items-center">
          <PlusCircleIcon className="h-6 w-6 text-blue-500 me-1" />
          <div className="text-sm text-gray-400">Explore more</div>
        </div>
      </Card>
    </Link>
  );
};

const Manager = () => {
  return (
    <>
      <Title level="1" addClasses="text-3xl">
        Manager
      </Title>

      <section className="my-6 grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <ManagerCard title="Countries" link="/manager/countires" shortText="Here, you can view the list of countries, add new ones, edit existing entries, or delete countries as needed." />
        <ManagerCard title="Boat Type" link="/manager/boat-type" shortText="You can explore the list of boat types, add new ones, edit existing entries, or delete boat types as needed." />
        <ManagerCard title="Bases" link="/manager/bases" shortText="Explore the list of boat bases, add new ones, edit existing entries, or delete boat bases as needed." />
      </section>
    </>
  );
};

export default Manager;
