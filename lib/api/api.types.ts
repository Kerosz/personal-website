export interface IStudycase {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  live: string;
  livePreview: string;
  source: string;
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

export interface INavigation {
  _id: string;
  label: string;
  path: string | null;
  target?: boolean;
}

export interface IContact {
  _id: string;
  content: string;
  email: string;
}

export interface ITag {
  title: string;
}

export interface IGoal {
  content: string;
}
