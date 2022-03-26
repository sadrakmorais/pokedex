import * as S from './styles'

export function CardPokemon ({avatar, name , abilities , weight }) {
console.log(abilities)
return (

    <S.Wrapper>
      <S.Avatar>
      <img src={avatar} alt={name}/>
      </S.Avatar>
      <S.Infos>
      <S.Name>
            Nome:<h1>{name}</h1>
        </S.Name>
        <S.Weight>
          Peso: <h1>{weight}</h1>
        </S.Weight>
      </S.Infos>


    </S.Wrapper>
)
}
