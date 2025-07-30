import Chat from "./components/chat/Chat";
import Chatintro from "./components/chat/Chatintro";
import Prompt from "./components/chat/Prompt";

export default function Home() {
  return (
    <div className=" w-full   bg-white h-full flex flex-col justify-between">
      <div className=" flex flex-col items-center justify-center p-8 overflow-y-auto">
        <Chatintro />

        <Prompt />
      </div>

      <Chat />
    </div>
  );
}
