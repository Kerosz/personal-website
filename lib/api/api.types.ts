export interface IStudycase {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  excerpt: string;
  scheme: string;
  src: Record<string, unknown>;
  tags: ITag[];
  align: string;
  goals: IGoal[];
}

export interface IHero {
  _id: string;
  html: string;
  align: string;
}

export interface IBio {
  _id: string;
  text: string;
}

export interface ITag {
  title: string;
}

export interface IGoal {
  content: string;
}
