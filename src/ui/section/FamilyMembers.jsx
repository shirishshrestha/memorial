const FamilyMembers = () => {
  const familyMembers = [
    {
      name: "Alisson Ally Henderson b. 1976 USA, Texas, Catemburg,18990 Street Houston",
      relation: "Wife",
    },
    {
      name: "George G. Christopherson, Aka Private George, Christian Town",
      relation: "Brother",
    },
    {
      name: "Copper G. Christopherson, Aka Redmond Hammingster Peddingministon, Raycity 110",
      relation: "Brother",
    },
    {
      name: "Alisson Ally Henderson b. 1976 Canada, Toronto, Adoniston Street",
      relation: "Sister",
    },
  ];
  return (
    <section className="bg-darkBlue py-[35px]">
      <div className="grid grid-cols-2  gap-[31px] " id="main_container">
        <div>
          <figure>
            <img src="video-dummy.svg" alt="" className="w-full" />
          </figure>
          <div className="mt-[23px]">
            <h4 className=" text-[25px] font-bold mb-[21px]">Videos</h4>
            <figure className="flex justify-between">
              <img src="/dummy-1.svg" alt="" />
              <img src="/dummy-2.svg" alt="" />
              <img src="/dummy-3.svg" alt="" />
            </figure>
          </div>
        </div>
        <div>
          <h4 className=" text-[25px] font-bold mb-[21px]">Family Members</h4>
          {familyMembers.map((member, index) => (
            <div
              className="flex items-start gap-[10px] font-bold pb-[36px]"
              key={index}
            >
              <figure className="py-[7px]">
                <img src="/bullet.svg" alt="" />
              </figure>
              <div>
                <p className="text-[1rem]">{member.name}</p>
                <p className="text-darkYellow text-[1rem]">{member.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMembers;
