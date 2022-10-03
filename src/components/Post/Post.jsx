import Comment from '../Comment/Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://github.com/DiogoMiranda-dev.png" 
            alt="perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Diogo Miranda</strong>
            <span>web developer</span>
          </div>
        </div>
        <time title="27 de Setembro 2022 ás 12:00h" dateTime="2022-09-27 12:00" >Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p> 
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 
        <p>👉<a href="">jane.design/doctorcare</a> </p> 
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu Comentário'
        />
        <footer>
          <button type="submit" >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}