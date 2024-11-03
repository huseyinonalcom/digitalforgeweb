import Image from "next/image";

export default function HotPress() {
  return (
    <div className="w-full flex flex-col gap-5 items-center p-12">
      <Image priority src="/assets/logos/hotpress.svg" alt="Digital Forge Logo" width={200} height={200} />
    </div>
  );
}
