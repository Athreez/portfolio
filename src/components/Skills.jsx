import { UserProfileDetails, UserContestInfo, UserSolvedProblemsStats, UserHeatMap } from "react-leetcode";
import { Suspense } from "react";

const skillsData = [
  {
    category: "Languages",
    color: "bg-red-900/30 border-red-700/50 text-red-300",
    skills: ["C", "C++", "Python", "Java", "JavaScript"]
  },
  {
    category: "Web Development",
    color: "bg-blue-900/30 border-blue-700/50 text-blue-300",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB", "MySQL"]
  },
  {
    category: "Core CS Concepts",
    color: "bg-purple-900/30 border-purple-700/50 text-purple-300",
    skills: ["DSA", "DBMS", "Operating Systems", "OOP", "Computer Networks", "Software Engineering"]
  },
  {
    category: "Other Skills",
    color: "bg-green-900/30 border-green-700/50 text-green-300",
    skills: ["Problem-solving", "Debugging", "System Design", "API Development"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-blue-500">Skills</span>
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        A comprehensive overview of my technical expertise and proficiencies across various domains.
      </p>

      <div className="space-y-12">
        {skillsData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Programming Section */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          Competitive Programming
        </h3>
        
        <Suspense fallback={
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">Loading LeetCode profile...</p>
          </div>
        }>
          {/* Top row: Profile (left) + Contest Rating & Questions Solved (right, stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* LeetCode Profile Details */}
            <div className="min-h-full flex flex-col">
              <div className="flex-1">
                <UserProfileDetails
                  userName="Athreez"
                  theme={{
                    primaryColor: "rgba(234, 179, 8, 1)",
                    secondaryColor: "rgba(209, 213, 219, 1)",
                    bgColor: "rgba(17, 24, 39, 1)"
                  }}
                  showRank={false}
                />
              </div>
            </div>

            {/* Right column: Contest Rating & Questions Solved (stacked) */}
            <div className="flex flex-col gap-8 min-h-full">
              {/* LeetCode Contest Rating */}
              <div>
                <UserContestInfo 
                  userName="Athreez"
                  theme={{
                    primaryColor: "rgba(234, 179, 8, 1)",
                    secondaryColor: "rgba(209, 213, 219, 1)",
                    bgColor: "rgba(17, 24, 39, 1)"
                  }}
                />
              </div>

              {/* LeetCode Solved Problems Stats */}
              <div>
                <UserSolvedProblemsStats 
                  userName="Athreez"
                  theme={{
                    primaryColor: "rgba(234, 179, 8, 1)",
                    secondaryColor: "rgba(209, 213, 219, 1)",
                    bgColor: "rgba(17, 24, 39, 1)"
                  }}
                  showUserName={false}
                />
              </div>
            </div>
          </div>

          {/* Full width: Heat Map */}
          <div className="mb-8">
            <UserHeatMap 
              userName="Athreez"
              theme={{
                primaryColor: "rgba(234, 179, 8, 1)",
                secondaryColor: "rgba(209, 213, 219, 1)",
                bgColor: "rgba(17, 24, 39, 1)"
              }}
            />
          </div>

          {/* Full width: Link to LeetCode Page */}
          <div className="text-center pt-4">
            <a
              href="https://leetcode.com/u/Athreez/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 active:scale-95 transition duration-200 transform px-10 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl"
            >
              View Full LeetCode Profile
            </a>
          </div>
        </Suspense>
      </div>
    </section>
  );
}
