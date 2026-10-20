import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectContent from "./ProjectContent";

const projectData: Record<
  string,
  {
    title: string;
    category: string;
    year: string;
    client: string;
    description: string;
    gradient: string;
  }
> = {
  "1": {
    title: "Beyond the Veil",
    category: "Feature Film",
    year: "2025",
    client: "Placeholder Studio",
    description:
      "A full-VFX feature film exploring the boundaries between dreams and reality. Kardooni handled over 400 shots, from environment design to creature animation.",
    gradient: "from-indigo-900 via-purple-900 to-black",
  },
  "2": {
    title: "Nova",
    category: "Series · Season 1",
    year: "2025",
    client: "Placeholder Network",
    description:
      "An 8-episode science fiction series. We built entire planets, designed a new alien species, and delivered over 1,200 finished shots.",
    gradient: "from-slate-800 via-blue-900 to-black",
  },
  "3": {
    title: "Silent Orbit",
    category: "Commercial",
    year: "2024",
    client: "Placeholder Brand",
    description:
      "A 60-second spot for a global technology brand. Filmed entirely in-camera, with all space environments created in CG.",
    gradient: "from-rose-900 via-red-900 to-black",
  },
  "4": {
    title: "Ashes of Eden",
    category: "Music Video",
    year: "2024",
    client: "Placeholder Artist",
    description:
      "A visual album companion piece. Kardooni designed the full visual language — from concept art to final grade.",
    gradient: "from-amber-900 via-orange-900 to-black",
  },
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}

// ✅ کامپوننت async که params رو می‌خونه
async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectData[id] || projectData["1"];
  return <ProjectContent project={project} />;
}

// ✅ Skeleton Loading
function ProjectSkeleton() {
  return (
    <div className="px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        {/* Back link skeleton */}
        <div className="h-4 w-32 bg-white/10 rounded mb-12" />

        {/* Category + year skeleton */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-24 bg-white/10 rounded" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
          <div className="h-3 w-16 bg-white/10 rounded" />
        </div>

        {/* Title skeleton */}
        <div className="space-y-3 mb-16">
          <div className="h-16 md:h-24 w-full max-w-3xl bg-white/10 rounded" />
        </div>
      </div>

      {/* Video/image skeleton */}
      <div className="px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] w-full bg-white/5 rounded" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-3 w-20 bg-white/10 rounded mb-2" />
                <div className="h-5 w-32 bg-white/10 rounded" />
              </div>
            ))}
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-3/4 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ کامپوننت اصلی — Server Component
export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 md:pt-40">
        <Suspense fallback={<ProjectSkeleton />}>
          <ProjectDetails params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}