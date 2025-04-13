import MemberCard from "../components/MemberCard"
import { meet } from "../constants"

const MeetTeam = () => {
  return (
    <section className="p-px py-20 md:py-[100px] text-shades-50">
      
      <h1 className="h2-small md:h1-small 3xl:h1 font-semibold text-primary-800 pointer-events-none">Meet the Team</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-10 lg:gap-x-8 mt-[67px] md:mt-[94px] 3xl:mt-[104px]">
        {meet.map((member)=>(
          <MemberCard key={member.id} {...member} />
        ))}
      </div>

    </section>
  )
}

export default MeetTeam