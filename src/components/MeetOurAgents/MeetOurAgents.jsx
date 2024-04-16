import AgentsDetails from "../AgentsDetails/AgentsDetails";

const MeetOurAgents = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-green-200 p-4 rounded-lg mt-10 w-1/4 mx-auto flex-col">
        <h1 className="text-blue-700 md:text-3xl text-2xl font-black">
          Agents
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <AgentsDetails></AgentsDetails>
      </div>
      <div className="mt-16">
        <section className="py-6 bg-gray-100  text-gray-800">
          <div className="container p-4 mx-auto space-y-16 sm:p-10">
            <div className="space-y-4">
              
              <p className="max-w-2xl text-gray-600 text-2xl">
              Meet our exceptional team of agents, each equipped with expertise, integrity, and a passion for real estate. With a personalized approach, we listen to your needs and navigate the market to find the ideal property solution tailored just for you. Let's embark on this journey together.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer ">
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?0"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Web developer</p>
                 
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?1"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Web developer</p>
                  
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?2"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Atomic Properties</p>
                  
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?3"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Property Consultan</p>
                  
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?4"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Atomic Properties</p>
                 
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?5"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Property Advisor</p>
                  
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?6"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Property Manager</p>
                 
                </div>
              </div>
              <div className="space-y-4">
                <img
                  alt=""
                  className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?7"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm text-gray-600">Property Consultan</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MeetOurAgents;
