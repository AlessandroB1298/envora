import { Calendar, Home, LucideProps, Settings } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type itemProps = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const items: itemProps[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "About",
    url: "#",
    icon: Settings,
  },
  {
    title: "Calandar",
    url: "#",
    icon: Calendar,
  },
];
