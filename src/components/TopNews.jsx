export default function TopNews() {
    return(
        <div className="px-4">
                       {/* Title with blue square */}
                <div className="flex items-center gap-2 font-medium">
                    <div className="w-3 h-3 bg-blue-600"></div>
                    <div>Top News</div>
                </div>

      <div className="my-4"></div>

                {/* Scrollable container */}
                <div className="w-[17rem] h-[27rem] overflow-y-scroll border border-gray-300 rounded-lg p-2">
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
                    <div className="text-[#00356A] italic">8 minutes ago</div>
                    <div className="my-2"></div>
                    <div>
                        Trump ‘has power to force Putin’ into peace talks, says EU chief
                    </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full h-[8rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4 mb-4">
                    <div className="text-[#00356A] italic">8 minutes ago</div>
                    <div className="my-2"></div>
                    <div>
                        Trump ‘has power to force Putin’ into peace talks, says EU chief
                    </div>
                    </div>

                    {/* Card 4 */}
                    <div className="w-full h-[rem] border border-gray-400 bg-gray-100 rounded-[8px] shadow-md p-4">
                    <div className="text-[#00356A] italic">8 minutes ago</div>
                    <div className="my-2"></div>
                    <div>
                        Trump ‘has power to force Putin’ into peace talks, says EU chief
                    </div>
                    </div>
                </div>
        </div>
    )
}