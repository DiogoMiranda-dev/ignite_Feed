import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './Post';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Diogo" 
          content="lorem ipsum dolor sit amet, consectetur adipis"
          />
          <Post 
          author="Miranda" 
          content="lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis"
          />
        </main>
      </div>
    </div>
  )
}
