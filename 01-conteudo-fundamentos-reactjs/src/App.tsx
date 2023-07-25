import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

import './global.css'

import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.' },
      { type: 'link', content: 'diego.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2023-07-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/daniloamsilva.png',
      name: 'Danilo Augusto',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.' },
      { type: 'link', content: 'danilo.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2023-07-10 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
