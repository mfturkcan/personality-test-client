const personalityTypes: { [char: string]: string } = {
  "ISTJ": `Quiet, serious, earn success by thoroughness and dependability.
  Practical, matter-of-fact, realistic, and responsible. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized - their work, their home, their life. Value traditions and loyalty.`,
  "ISFJ": `Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their
  obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home.`,
  "INFJ": `Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear
  vision about how best to serve the common good. Organized and decisive in implementing their vision.`,
  "INTJ": `Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through.
  Skeptical and independent, have high standards of competence and performance - for themselves and others.`,
  "ISTP": `Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions.
  Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency.`,
  "ISFP": `Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts, do not force their opinions or values on others.`,
  "INFP": `Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential.
  Adaptable, flexible, and accepting unless a value is threatened.`,
  "INTP": `Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in
  depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.`,
  "ESTP": `Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them - they want to act energetically to solve the problem. Focus on the here-and-now, spontaneous, enjoy each moment that
  they can be active with others. Enjoy material comforts and style. Learn best through doing.`,
  "ESFP": `Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work, and make work fun. Flexible and spontaneous,
  adapt readily to new people and environments. Learn best by trying a new skill with other people.`,
  "ENFP": `Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support.
  Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.`,
  "ENTP": `Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically. Good at reading other people. Bored by routine,
   will seldom do the same thing the same way, apt to turn to one new interest after another.`,
  "ESTJ": `Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards,
  systematically follow them and want others to also. Forceful in implementing their plans.`,
  "ESFJ": `Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day
  lives and try to provide it. Want to be appreciated for who they are and for what they contribute.`,
  "ENFJ": `Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal,
  responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership.`,
  "ENTJ": `Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed,
  well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas.`
}

export interface PersonalityFeatures {
  weaknesses: string[],
  strengths: string[]
}


export const personalitySW: { [char: string]: PersonalityFeatures } = {
  "ISTJ": {
    strengths: ["Detail-oriented", "Realistic", "Present-focused", "Observant", "Logical and practical", "Orderly and organized"],
    weaknesses: ["Judgmental", "Subjective", "Tends to blame others", "Insensitive"],
  },
  "ISFJ": {
    strengths: ["Reliable", "Practical", "Sensitive", "Eye for detail"],
    weaknesses: ["Dislikes abstract concepts", "Avoids confrontation", "Dislikes change", "Neglects own needs"]
  },
  "INFJ": {
    strengths: ["Sensitive to the needs of others", "Reserved", "Highly creative and artistic", "Focused on the future", "Values close, deep relationships", "Enjoys thinking about the meaning of life", "Idealistic"],
    weaknesses: ["Can be overly sensitive", "Sometimes difficult to get to know", "Can have overly high expectations", "Stubborn", "Dislikes confrontation"]
  },
  "INTJ": {
    strengths: ["Enjoys theoretical and abstract concepts", "High expectations", "Good at listening", "Takes criticism well", "Self-confident and hard-working"],
    weaknesses: ["Can be overly analytical and judgmental", "Very perfectionistic", "Dislikes talking about emotions", "Sometimes seems callous or insensitive"]
  },
  "ISTP": {
    strengths: ["Logical", "Learns by experience", "Action-oriented", "Realistic and practical", "Enjoys new things", "Self-confident and easygoing"],
    weaknesses: ["Difficult to get to know", "Insensitive", "Grows bored easily", "Risk-taker", "Does not like commitment"]
  },
  "ISFP": {
    strengths: ["Very aware of their environment", "Practical", "Enjoys hands-on learning", "Loyal to values and beliefs"],
    weaknesses: ["Dislikes abstract, theoretical information", "Reserved and quiet", "Strong need for personal space", "Dislikes arguments and conflict"]
  },
  "INFP": {
    strengths: ["Loyal and devoted", "Sensitive to feelings", "Caring and interested in others", "Works well alone", "Values close relationships", "Good at seeing 'the big picture'"],
    weaknesses: ["Can be overly idealistic", "Tends to take everything personally", "Difficult to get to know", "Sometimes loses sight of the little things", "Overlooks details"]
  },
  "INTP": {
    strengths: ["Logical and objective", "Abstract thinker", "Independent", "Loyal and affectionate with loved ones"],
    weaknesses: ["Difficult to get to know", "Can be insensitive", "Prone to self-doubt", "Struggles to follow rules", "Has trouble expressing feelings"]
  },
  "ESTP": {
    strengths: ["Gregarious, funny, and energetic", "Influential and persuasive", "Action-oriented", "Adaptable and resourceful", "Observant"],
    weaknesses: ["Impulsive", "Competitive", "Dramatic at times", "Easily bored", "Insensitive"]
  },
  "ESFP": {
    strengths: ["Optimistic and gregarious", "Enjoys people and socializing", "Focused on the present, spontaneous", "Practical"],
    weaknesses: ["Dislikes abstract theories", "Becomes bored easily", "Does not plan ahead", "Impulsive"]
  },
  "ENFP": {
    strengths: ["Warm and enthusiastic", "Empathetic and caring", "Strong people skills", "Strong communication skills", "Fun and spontaneous", "Highly creative"],
    weaknesses: ["Needs approval from others", "Disorganized", "Tends to get stressed out easily", "Can be overly emotional", "Overthinks", "Struggles to follow rules"]
  },
  "ENTP": {
    strengths: ["Innovative", "Creative", "Great conversationalist", "Enjoys debating", "Values knowledge"],
    weaknesses: ["Can be argumentative", "Dislikes routines and schedules", "Does not like to be controlled", "Unfocused", "Insensitive"]
  },
  "ESTJ": {
    strengths: ["Practical and realistic", "Dependable", "Self-confident", "Hard-working", "Traditional", "Strong leadership skills"],
    weaknesses: ["Insensitive", "Inflexible", "Not good at expressing feelings", "Argumentative", "Bossy"]
  },
  "ESFJ": {
    strengths: ["Kind and loyal", "Outgoing", "Organized", "Practical and dependable", "Enjoy helping others", "Conscientious"],
    weaknesses: ["Needy", "Approval-seeking", "Sensitive to criticism", "Dislike change", "Intolerant", "Controlling"]
  },
  "ENFJ": {
    strengths: ["Outgoing and warm-hearted", "Empathetic", "Wide social circle", "Encouraging", "Organized", "Affectionate", "Persuasive"],
    weaknesses: ["Approval-seeking", "Overly sensitive", "Indecisive", "Self-sacrificing", "Rigid and uncompromising", "Overprotective", "Manipulative"]
  },
  "ENTJ": {
    strengths: ["Strong leadership skills", "Self-assured", "Well-organized", "Good at making decisions", "Assertive and outspoken", "Strong communication skills"],
    weaknesses: ["Impatient", "Stubborn", "Insensitive", "Aggressive", "Intolerant"]
  }

}





export default personalityTypes;
