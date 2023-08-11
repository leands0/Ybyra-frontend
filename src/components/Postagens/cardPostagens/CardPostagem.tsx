import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import avatar from '../../../assets/images/avatar.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({ post }: CardPostagemProps) {
  const { usuario } = useContext(AuthContext)

  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          {(post.usuario?.foto == "" || post.usuario?.foto == " ") ? (
            <img src={avatar} className='h-12 rounded-full' alt={`${post.usuario?.nome} está sem foto`} />
          ) : (
            <img src={post.usuario?.foto} className='h-12 rounded-full' alt={`Foto de ${post.usuario?.nome}`} />
          )
          }
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          <p>{post.conteudo}</p>
          <img src={post.midia} alt="" />
          <p>{post.localizacao}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(post.data))}</p>
        </div>
      </div>
      {usuario.id === post.usuario?.id ? (<div className="flex">
        <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
      ) : (
        <>
        </>
      )}

    </div>
  )
}

export default CardPostagem