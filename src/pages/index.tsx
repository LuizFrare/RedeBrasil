import Layout from "../components/template/Layout";
import Post1 from "../components/template/Post1";


export default function Home() {
  return (
    <Layout title="Página Inicial" subtitle="Feed de notícias">
      <Post1 />
    </Layout>
  )
}
