export interface Limit {
  limit?: number,
  offset?:number
}

export interface PokemonsListInterface {
  name: string,
  url: string
}

export interface ApiRequest {
  count: number,
  results: PokemonsListInterface[],
  next?: string,
  previous?: string
}

export interface Pokemon {
  height: number,
  base_experience: number,
  name: string,
  stats: pokemonStats[],
  sprites: {
    front_default: string
  }
}

export interface pokemonStats {
  name: string,
  base_stat: number,
  effort: number,
  stat: PokemonsListInterface
}