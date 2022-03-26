import * as S from './styles'
import API from '../../services/api'
import {useState} from 'react'
import { CardPokemon } from '../../components/CradPokemon'

export function Home () {

    const [pokemon , setPokemon] = useState({})
    const [pokemonName , setPokemonName] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const handleSubmit = async (event ) => {

        event.preventDefault();

        if(!pokemonName){
            return;
        }

        try{
            const response = await API.get(`/pokemon/${pokemonName}`);
            setPokemon(response.data);
            setError(null)
            setLoading(false)
        }
        catch (error){
         setError('Nenhum pokemon com esse nome foi encontrado');
         setPokemon(null)
        }

    }

    return (
        <S.Wrapper>


          {
              loading ?
             <S.Loading>
                 <h1>Aguardando busca</h1>
                 <p>{error}</p>
             </S.Loading>
                 :
              <CardPokemon name={pokemon.name}  abilities={pokemon.abilities} weight={pokemon.weight} avatar={pokemon.sprites.front_default} />

          }

            <S.Form onSubmit={handleSubmit}>
            <input value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}/>
            <button type='submit'> Buscar Pokemon</button>
            </S.Form>

            <a href="/berrie"> Berries</a>
        </S.Wrapper>
    )
}
