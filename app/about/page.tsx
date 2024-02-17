import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
<>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission Statement</h2>
                    <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-0">
                  <Image className="w-full rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/bb2228eb-172b-47d1-041a-d3e1ef921400/public" alt="office content 1" width={1366} height={768}/>
                  <Image className="mt-8 w-full lg:mt-0) rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/39a3468c-9e21-4577-a9e4-8d7728b93b00/public" alt="office content 2" width={1366} height={768}/>
                </div>

</>
  );
}
