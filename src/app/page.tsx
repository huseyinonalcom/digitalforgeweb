import { ButtonColorOut } from "@/components/ButtonColorOut";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-row gap-5">
        <ButtonColorOut>
          <div className="flex flex-col w-48">
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </ButtonColorOut>
        <ButtonColorOut>
          <Image src={"https://picsum.photos/200"} width={200} height={200} alt={""} />
        </ButtonColorOut>
        <ButtonColorOut>test3</ButtonColorOut>
        <ButtonColorOut>test4</ButtonColorOut>
        <ButtonColorOut>test5</ButtonColorOut>
        <ButtonColorOut>test6</ButtonColorOut>
        <ButtonColorOut>test7</ButtonColorOut>
        <ButtonColorOut>test8</ButtonColorOut>
      </div>
    </main>
  );
}
