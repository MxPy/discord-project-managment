import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.purepc.pl/image/news/2023/03/09_discord_testuje_mozliwosci_sztucznej_inteligencji_ai_odpowie_na_pytania_uzytkownikow_i_pomoze_w_moderacji_serwera_1_b.png)'}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold py-8">Your All-in-One Project Management Solution Integrated with Discord!</h1>
            <Link href="/ui" className="btn btn-wide btn-primary">Start being agile for free!!</Link>
          </div>
        </div>
      </div>

      <div className="hero flex justify-center min-h-[80vh] max-h-[80vh]  bg-base-200 p-5">
            <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6">The web task board connected to Discord streamlines project management for teams. Integrated within Discord servers, it offers customizable task boards where users can assign tasks, track progress, and communicate seamlessly. With real-time updates and flexible integrations, it enhances productivity and collaboration within Discord's familiar environment.</p>
          </div>
        </div>
            <div className="mockup-browser border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">https://diman.io</div>
              </div>
                <div className="flex justify-center bg-base-200">
                <div className=" min-h-[40vh] object-cover min-w-[70vh] max-w-fit max-h-fit" style={{backgroundImage: 'url(https://marketplace-cdn.atlassian.com/files/3db7a734-518e-474a-872f-b3ebb68a01a6)'}}>
                </div>
                </div>
            </div>
      </div>
      <div className=" flex justify-center ">
      <div className="hero flex justify-center  min-h-[80vh] max-h-[80vh] min-w-[80vh] max-w-[80vh]">
      <div className="mockup-phone border bg-base-300 justify-center">
              <div className="camera "></div> 
              <div className="display max-h-[70vh] max-w-[30vh] ">
                <div className="flex justify-center bg-base-200">
                <img src="https://support.discord.com/hc/article_attachments/19262506465943" className="object-cover "></img>
                </div>
                </div>
      </div>
            <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="py-6">The web task board connected to Discord streamlines project management for teams. Integrated within Discord servers, it offers customizable task boards where users can assign tasks, track progress, and communicate seamlessly. With real-time updates and flexible integrations, it enhances productivity and collaboration within Discord's familiar environment.</p>
          </div>
        </div>
            
      </div>
      </div>
      
    </main>
  );
}
