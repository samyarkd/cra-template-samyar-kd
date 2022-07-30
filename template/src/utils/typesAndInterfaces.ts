export type RickAndMortyCharacter = {
  id: number;
  name: string;
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface GetRickAndMorty {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: RickAndMortyCharacter[];
}
