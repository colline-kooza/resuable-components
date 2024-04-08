"use client";

import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe, X } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";

export default function TabbedItems() {
  const services = [
    {
      title: "Telehealth",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Video prescription",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "UTI consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Mental health",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "ED Consult",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
    {
      title: "Urgent care",
      image: "/doctor.jpg",
      slug: "telehealth",
    },
  ];
  const tabs = [
    {
      title: "Popular Services",
      icon: Stethoscope,
      component: <ServiceList data={services} />,
      content: [],
    },
    {
      title: "Doctors",
      icon: Microscope,
      component: <LinkCards />,
      content: [],
    },
    {
      title: "Specialists",
      icon: Activity,
      component: <LinkCards className="bg-blue-900" />,
      content: [],
    },
    {
      title: "Symptoms",
      icon: Syringe,
      component: <LinkCards className="bg-pink-950" />,
      content: [],
    },
  ];
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {tabs.map((tab, i) => {
        return (
          <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
            {tab.component}
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}
