import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { FaMusic, FaFootballBall, FaTheaterMasks, FaFilm, FaChild } from "react-icons/fa"; // Import necessary icons

export const EventHighlights = () => {
  return (
    <>
    <div className="px-8 flex flex-col gap-y-8 pt-8 pb-20">
        <h1 className="text-2xl md:text-3xl font-bold mt-8 text-[#003060] mb-12">Explore Top Event Categories</h1>
        <BentoGrid>
        <BentoGridItem
            title="Concerts"
            description="Book your tickets for the latest concerts."
            icon={<FaMusic className="text-[#fe542b] w-8 h-8" />}
            image="/Images/concerts.jpg"
        />
        <BentoGridItem
            title="Sports"
            description="Get tickets for upcoming sports events."
            icon={<FaFootballBall className="text-[#fe542b] w-8 h-8" />}
            image="/Images/sports.jpg"
        />
        <BentoGridItem
            title="Arts & Theatre"
            description="Discover the latest plays and art exhibitions."
            icon={<FaTheaterMasks className="text-[#fe542b] w-8 h-8" />}
            image="/Images/arts.jpg"
        />
        <BentoGridItem
            title="Movies"
            description="Explore tickets for the newest releases."
            icon={<FaFilm className="text-[#fe542b] w-8 h-8" />}
            image="/Images/movies.jpg"
        />
        <BentoGridItem
            title="Family Events"
            description="Find family-friendly events and activities."
            icon={<FaChild className="text-[#fe542b] w-8 h-8" />}
            image="/Images/family.jpg"
        />
        </BentoGrid>
    </div>

    </>
    
  );
};

