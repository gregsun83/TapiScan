import { WaHero } from "@/components/sections/wa-hero";
import { WaPain } from "@/components/sections/wa-pain";
import { WaFlow } from "@/components/sections/wa-flow";
import { WaDemo } from "@/components/sections/wa-demo";
import { WaIncludes } from "@/components/sections/wa-includes";
import { WaProof } from "@/components/sections/wa-proof";
import { WaTrust } from "@/components/sections/wa-trust";
import { WaNfc } from "@/components/sections/wa-nfc";
import { WaCta } from "@/components/sections/wa-cta";

export function HomeContent() {
  return (
    <div className="homepage-root">
      <WaHero />
      <WaPain />
      <WaFlow />
      <WaDemo />
      <WaIncludes />
      <WaProof />
      <WaTrust />
      <WaNfc />
      <WaCta />
    </div>
  );
}
