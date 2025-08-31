export default function LatestNews() { 
  return (
    <div className="px-4">
      {/* Title with blue square */}
      <div className="flex items-center gap-2 font-medium">
        <div className="w-3 h-3 bg-blue-600"></div>
        <div>Latest News</div>
      </div>

      <div className="my-4"></div>

      {/* Scrollable container */}
      <div className="w-full md:w-[20rem]   border border-gray-300 rounded-lg p-2">
        
        {/* Card 1 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">8 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Trump ‘has power to force Putin’ into peace talks, says EU chief
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">15 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Global markets rally as inflation fears ease
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">20 minutes ago</div>
          <div className="my-2"></div>
          <div>
            NASA confirms new moon mission timeline
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">30 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Tech giants release AI safety commitments
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">35 minutes ago</div>
          <div className="my-2"></div>
          <div>
            New policies aim to reduce carbon emissions globally
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">40 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Sports world reacts to major championship upset
          </div>
        </div>

        {/* Card 7 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">45 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Startup secures record funding for green energy
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">1 hour ago</div>
          <div className="my-2"></div>
          <div>
            Scientists discover breakthrough in cancer treatment
          </div>
        </div>

        {/* Card 9 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">2 hours ago</div>
          <div className="my-2"></div>
          <div>
            Flooding impacts thousands in coastal cities
          </div>
        </div>

        {/* Card 10 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4">
          <div className="text-[#00356A] italic">3 hours ago</div>
          <div className="my-2"></div>
          <div>
            Education reforms spark nationwide debate
          </div>
        </div>

      </div>
    </div>
  );
}
