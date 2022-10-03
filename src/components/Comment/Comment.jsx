import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export default function Comment() {
  return (
    <div className={styles.comment}>
        <img 
            src="https://github.com/DiogoMiranda-dev.png" 
            alt="perfil"
          />

        <div className={styles.commentBox}>
          <div className={styles.commentContent} >
            <header>
              <div className={styles.AuthorAndTime}>
                <strong>Diogo Miranda</strong>
                <time title="27 de Setembro 2022 ás 12:00h" dateTime="2022-09-27 12:00" >Cerca de 1h atrás</time>
              </div>
              <button title="Deletar comentário" >
                <Trash size={24} />
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>  
    </div>
  )
}
