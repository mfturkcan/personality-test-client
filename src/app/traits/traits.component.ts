import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traits',
  templateUrl: './traits.component.html',
  styleUrls: ['./traits.component.css']
})
export class TraitsComponent implements OnInit {

  traitsWithImages = [
    {
      firstArticle: `I like getting my energy from dealing with the ideas, pictures, memories, and reactions that are inside my head, in my inner world. I often prefer doing things alone or with one or two people I feel comfortable with. I take time to reflect so that I have a clear idea of what I'll be doing when I decide to act.
      Ideas are almost solid things for me. Sometimes I like the idea of something better than the real thing.`,
      secondArticle: `I like getting my energy from active involvement in events and having a lot of different activities.
       I'm excited when I'm around people and I like to energize other people. I like moving into action and making things happen. I generally feel at home in the world. I often understand a problem better when I can talk out loud about it and hear what others have to say.`,
      image: "../../assets/trait-images/ie-trait.jpg",
      firstTitle: "Introverted (I)",
      secondTitle: "Extraverted (E)",
      group: "MIND"
    },
    {
      firstArticle: `Paying attention to physical reality, what I see, hear, touch, taste, and smell. I'm concerned with what is actual, present, current, and real. I notice facts and I remember details that are important to me.
      I like to see the practical use of things and learn best when I see how to use what I'm learning. Experience speaks to me louder than words.`,
      secondArticle: `Paying the most attention to impressions or the meaning and patterns of the information
      I get. I would rather learn by thinking a problem through than by hands-on experience.
      I'm interested in new things and what might be possible, so that I think more about the future than the past. I like to work with symbols or abstract theories, even if I don't know how I will use them. I remember events more as an impression of what it was like than as actual facts or details of what happened.`,
      image: "../../assets/trait-images/si-trait.jpg",
      firstTitle: "Sensing (S)",
      secondTitle: "Intuition (N)",
      group: "ENERGY"
    },
    {
      firstArticle: `When I make a decision, I like to find the basic truth or principle to be applied, regardless of the specific situation involved. I like to analyze pros and cons, and then be consistent and logical in deciding. I try to be impersonal, so I won't let my personal wishes--or other people's wishes--influence me.`,
      secondArticle: `I believe I can make the best decisions by weighing what people care about and the points-of-view of persons involved in a situation. I am concerned with values and what is the best for the people involved. I like to do whatever will establish or maintain harmony. In my relationships, I appear caring, warm, and tactful.`,
      image: "../../assets/trait-images/tf-trait.jpg",
      firstTitle: "Thinking (T)",
      secondTitle: "Feeling (F)",
      group: "NATURE"
    },
    {
      firstArticle: `I use my decision-making (Judging) preference (whether it is Thinking or Feeling) in my outer life. To others, I seem to prefer a planned or orderly way of life, like to have things settled and organized, feel more comfortable when decisions are made, and like to bring life under control as much as possible.
      Since this pair only describes what I prefer in the outer world, I may, inside, feel flexible and open to new information (which I am).`,
      secondArticle: `I use my perceiving function (whether it is Sensing or Intuition) in my outer life. To others, I seem to prefer a flexible and spontaneous way of life, and I like to understand and adapt to the world rather than organize it. Others see me staying open to new experiences and information.
      Since this pair only describes what I prefer in the outer world, inside I may feel very planful or decisive (which I am).`,
      image: "../../assets/trait-images/jp-trait.jpg",
      firstTitle: "Judging (J)",
      secondTitle: "Perceiving (P)",
      group: "TACTICS"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
