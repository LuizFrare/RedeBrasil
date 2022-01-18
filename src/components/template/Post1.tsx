import Image from "next/image"
import postImg1 from '../../../public/img/post1.jpeg'

export default function Post1() {
    return (
        <section>
            
        <div className={`p-6 flex flex-col sm:flex-col sm:mx-96 sm:my-4 items-center justify-center space-y-6 sm:space-y-12 sm:space-x-6`}>
            <div className={`flex-1 w-full rounded shadow-xl bg-white overflow-hidden justify-center items-center dark:bg-gradient-to-br from-gray-900 to-gray-800 dark:text-gray-100 pb-4`}>
                <Image src={postImg1} alt="Imagem do post 1" className={`w-full h-22 object-cover`}/>
                <h1 className={`text-2xl m-3 pt-2 font-black`}>Governo Federal realiza evento itinerante voltado para o agronegócio</h1>
                <h2 className={`text-sm mb-2 mx-3 font-bold`}>Presidente Jair Bolsonaro participou do Circuito de Negócios Agro, evento que vai percorrer 600 municípios</h2>
                <h3 className={`text-sm mb-2 mx-3 leading-loose font-normal`}>O Presidente Jair Bolsonaro participou da terceira etapa do Circuito de Negócios Agro, iniciativa do Banco do Brasil que </h3>
                <h3 className={`text-sm mb-2 mx-3 leading-3 font-normal`}>visa reforçar iniciativa do Banco do Brasil que visa reforçar a presença da instituição pública junto ao segmento.</h3>
                <a className={`text-sm mx-4 leading-loose text-blue-900 font-black hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200`} href="https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2022/01/governo-federal-realiza-evento-itinerante-voltado-para-o-agronegocio">Clique aqui para saber mais...</a>
            </div>
        </div>

        </section>
    )
}