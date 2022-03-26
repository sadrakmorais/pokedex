import { useState } from 'react'
import * as S from './styles'
import API from '../../services/api'

export function Berryes () {

    const [berrie , setBerrie] = useState({})
    const [berrieName , setBerrieName] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)




    const handleSubmit = async (event ) => {

        event.preventDefault();

        if(!berrieName){
            return;
        }

        try{
            const response = await API.get(`/berry/${berrieName}`);
            setBerrie(response.data);
            setError(null)
            setLoading(false)
        }
        catch (error){
         setError('Nenhum berrie com esse nome foi encontrado');
         setBerrie(null)
        }

    }
    return (
        <S.Wrapper>

          <h1>Olá berries</h1>
      </S.Wrapper>
    )
}
