import Image from "next/image"
import postImg2 from '../../../public/img/post2.jpeg'

export default function Post1() {
    return (
        <section>
            
        <div className={`p-1 flex flex-col sm:flex-col sm:mx-96 sm:my-4 justify-start space-y-6 sm:space-y-12 sm:space-x-2`}>
            <div className={`flex-1 w-full rounded my-4 py-6 px-4 shadow-xl bg-white overflow-hidden justify-center items-center dark:bg-gradient-to-br from-gray-900 to-gray-800 dark:text-gray-100`}>
                <h1 className={`text-2xl m-3 pt-2`}>Governo Federal realiza evento itinerante voltado para o agronegócio</h1>
                <h2 className={`text-sm mb-2 ml-4 font-normal`}>Presidente Jair Bolsonaro participou do Circuito de Negócios Agro, evento que vai percorrer 600 municípios</h2>
            </div>
        </div>

        <div className={`p-1 flex flex-col sm:flex-col sm:mx-96 sm:my-4 justify-start space-y-6 sm:space-y-12 sm:space-x-2`}>
            <div className={`flex-1 w-full rounded my-4 py-6 px-4 shadow-xl bg-white overflow-hidden justify-center items-center dark:bg-gradient-to-br from-gray-900 to-gray-800 dark:text-gray-100`}>
                <h1 className={`text-2xl m-3 pt-2`}>Presidente Jair Bolsonaro participa do lançamento de internet de alta velocidade para populações da Região Amazônica</h1>
                <h2 className={`text-sm mb-2 ml-4 font-normal`}>Estão previstas a construção de oito infovias de cabos de fibra ótica subfluvial na região que vão somar quase 12 mil quilômetros de extensão</h2>
            </div>
        </div>

        <div className={`p-1 flex flex-col sm:flex-col sm:mx-96 sm:my-4 justify-start space-y-6 sm:space-y-12 sm:space-x-2`}>
            <div className={`flex-1 w-full rounded my-4 py-6 px-4 shadow-xl bg-white overflow-hidden justify-center items-center dark:bg-gradient-to-br from-gray-900 to-gray-800 dark:text-gray-100`}>
                <h1 className={`text-2xl m-3 pt-2`}>Governo Federal anuncia medidas que beneficiam atividade pesqueira</h1>
                <h2 className={`text-sm mb-2 ml-4 font-normal`}>Pescadores artesanais vão contar com financiamento da Caixa Econômica Federal com taxa de juros a partir de 3% ao ano</h2>
            </div>
        </div>

        <div className={`p-1 flex flex-col sm:flex-col sm:mx-96 sm:my-4 justify-start space-y-6 sm:space-y-12 sm:space-x-2`}>
            <div className={`flex-1 w-full rounded my-4 py-6 px-4 shadow-xl bg-white overflow-hidden justify-center items-center dark:bg-gradient-to-br from-gray-900 to-gray-800 dark:text-gray-100`}>
                <h1 className={`text-2xl m-3 pt-2`}>Comitê vai monitorar ações de combate à Covid-19 destinadas aos povos indígenas</h1>
                <h2 className={`text-sm mb-2 ml-4 font-normal`}>A estrutura foi instituída por decreto do Presidente Jair Bolsonaro</h2>
            </div>
        </div>

        </section>
    )
}