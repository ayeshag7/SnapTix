import { cn } from "@/lib/utils";
import Image from "next/image";

// BentoGrid component to structure event highlights or categories
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[20rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem component to display event information in a card format
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group hover:shadow-lg transition duration-200 shadow-input p-6 bg-white shadow-md border border-[#003060] flex flex-col space-y-4",
        className
      )}
    >
      {/* Optional header for additional content */}
      {header && <div className="text-xl font-semibold mb-2">{header}</div>}

      <div className="group-hover:translate-x-2 transition duration-200">
        {/* Optional icon for visual emphasis */}
        {icon && <div className="mb-4">{icon}</div>}

        {/* Title of the event */}
        <div className="text-xl font-bold text-[#003060] mb-2">{title}</div>

        {/* Event description or additional details */}
        <div className="text-sm text-gray-600">{description}</div>

        <div className="bg-black h-32 md:h-36 w-40 md:w-80 mt-6 rounded-lg overflow-hidden relative">
            <Image
            src={image}
            alt="event"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 block w-64 h-[576px] md:w-[480px] md:h-[584px]"
            />
        </div>

      </div>
    </div>
  );
};
