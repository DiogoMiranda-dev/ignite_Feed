import { Post } from './Post';

export function App() {
  return (
    <div>
    <Post 
      author="Diogo" 
      content="lorem ipsum dolor sit amet, consectetur adipis"
    />
     <Post 
      author="Miranda" 
      content="lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis"
    />
    </div>
  )
}
