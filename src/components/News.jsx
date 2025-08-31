import Header from "./Header";
import Navbar from "./Navbar";
import newsphoto from "../assets/newsphoto.png"; 

export default function News() {
  return (
    <div className="px-4">
      <button className="bg-[#0F66B6] text-white px-8 py-1.5 shadow text-lg mb-7">
        Politics
      </button>

      <h1 className="text-3xl font-medium">
        2027: Shield Tinubu from harassment
      </h1>
      <h1 className="text-3xl font-medium">
        — APC chieftain urges Southern elders
      </h1>

      <p className="text-[20px] py-4">August 10, 2025</p>

      <img
        src={newsphoto}
        alt="News"
        className="w-full max-w-4xl h-auto object-cover rounded-lg mb-6"
      />

      <p className="text-justify py-4 leading-relaxed text-[15px]">
                A chieftain of the All Progressives Congress (APC) in Osun State, Olatunbosun Oyintiloye, has urged political and traditional leaders in Southern Nigeria to protect President Bola Tinubu from a few elite individuals from the North who are hell-bent on stopping his reelection bid in 2027.
            Oyintiloye made the remarks while speaking with journalists on Sunday in Osogbo.
            He said Tinubu had been a friend of the North and had always supported its political cause; hence, he deserves to enjoy the support of the region for his second-term bid.
            He, however, expressed concern that a splinter group from the North often forms itself into a clique whenever a Southerner is the President and uses every available means, including blackmail, to destroy his government.
            Oyintiloye said the country’s political history would not forget the embarrassment Southern Presidents often suffered at the hands of a tiny section of the North in their quest to hijack power.
            “This has been recurring, and the nation’s political history won’t forget the kind of intimidation Southern Presidents often suffered at the hands of very few men from the North who always mount serious opposition to the reelection bid of such President.
            “But in the case of President Bola Tinubu, he has done enough to get the support of the major power block in the North.
            “Therefore, the time has come for the region to further put the tiny few behind the mischief being plotted against the President where they really belong.
            “These individuals are self-appointed leaders of the North, so the region’s recognised political leaders and royal fathers can’t continue to watch the trend and allow blackmail against Tinubu to gain traction,” Oyintiloye said.
            The former lawmaker also called on political leaders and traditional rulers from Southern Nigeria not to make themselves available for some rejected politicians from the North who are plotting against Tinubu.
            He said, “And this is the more reason the Southern leaders must rise and rally support for the President.
            “This support is necessary to put an end to the consistent, negative political trajectory that second-term bids, whenever a Southerner is the President, often follow.
            “They should shield the President against unwarranted attacks from just a handful of politicians from the North.”
            He also appealed to the Ooni of Ife, Oba Adeyeye Ogunwusi, who is Chairman of the Council of Southern Traditional Rulers, and the co-chairmen, Obi of Obinugwu, Cletus Illomuanya, and King Jaja of Opobo, Dandeson Jaja, with the Secretary of the council, Benjamin Ikenchuku Keagborekuzi I, Dein of Agbor, to champion the support for the President within the region and work with their colleagues from the North to ensure victory for Tinubu in 2027.
            “I also want to advise ex-President Olusegun Obasanjo, ex-President Goodluck Ebele Jonathan, Prof. Wole Soyinka, former President of the Nigeria Senate, Ken Nnamani, and other Southern elders to rise to the occasion and stop a repeat of negative history.
            “They should defend Southern Nigeria from the few Northern power mongers,” he further said.
            Oyintiloye, who declared that Tinubu’s reelection would stabilise Nigeria, also stated that the President, in his second term, would continue to ensure fairness in the federal government’s developmental drive for all regions in the country.
      </p>

      {/* Back and Next buttons */}
      <div className="flex justify-between items-center mt-8">
        <a href="/" className="bg-[#0F66b6] text-white px-6 py-2 rounded-md">
          Back
        </a>
        <button className="bg-[#0F66B6] text-white px-6 py-2 rounded-md shadow hover:bg-">
          Next
        </button>
      </div>
    </div>
  );
}
