export default function TopNews() { 
  return (
    <div className="px-4">
      {/* Title with blue square */}
      <div className="flex items-center gap-2 font-medium">
        <div className="w-3 h-3 bg-blue-600"></div>
        <div>Top News</div>
      </div>

      <div className="my-4"></div>

      {/* Scrollable container */}
      <div className="w-[20rem] h-[70rem] overflow-y-scroll border border-gray-300 rounded-lg p-2">
        
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
            Global markets rise as US announces new trade deal with Europe
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">22 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Massive wildfire spreads across California, thousands evacuated
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">30 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Tech giants unveil AI pact to ensure safer innovations
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">40 minutes ago</div>
          <div className="my-2"></div>
          <div>
            Premier League: Arsenal secures last-minute win against Chelsea
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">50 minutes ago</div>
          <div className="my-2"></div>
          <div>
            WHO issues warning on rising global obesity levels
          </div>
        </div>

        {/* Card 7 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">1 hour ago</div>
          <div className="my-2"></div>
          <div>
            NASA reveals new images from Mars exploration mission
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">2 hours ago</div>
          <div className="my-2"></div>
          <div>
            Inflation rates drop as central banks adjust interest policies
          </div>
        </div>

        {/* Card 9 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
          <div className="text-[#00356A] italic">3 hours ago</div>
          <div className="my-2"></div>
          <div>
            Grammy Awards 2025: Newcomer wins Album of the Year
          </div>
        </div>

        {/* Card 10 */}
        <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4">
          <div className="text-[#00356A] italic">5 hours ago</div>
          <div className="my-2"></div>
          <div>
            Climate summit calls for urgent action on carbon emissions
          </div>
        </div>
      </div>
    </div>
  );
}
