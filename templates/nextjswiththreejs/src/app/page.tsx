import Image from "next/image";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false, //disable Server Side Rendering for three Js 
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  );
}
