import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import { useNavigation } from '@react-navigation/native';
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";


export default function Leitura(){

    const navigation = useNavigation();

    return(
        <Container>

            <ScrollView> 

            <Box>
                <TouchableOpacity onPress={()=> navigation.navigate('MainTab')}> 
                    <Flecha />
                </TouchableOpacity>
                <Text style={{fontSize:20}}> Autocontrole </Text>
                <Save />         
            </Box> 


            <Text style={{fontSize: 18, marginTop: 10, textAlign: "center", margin: 15}}> 
            O que é, como desenvolver e técnicas de mindfulness 
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> O Que É Autocontrole Emocional? </Text>

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
            Autocontrole emocional é o atributo que torna uma pessoa capaz de dominar as próprias emoções ou os impulsos decorrentes dessas emoções.

Isso porque as emoções, em si, não podem ser controladas, pois são reações espontâneas e automáticas a uma determinada situação – seja ela real, ou não.

Como diria um dos maiores escritores de todos os tempos, William Shakespeare:

“Não posso escolher como me sinto, mas posso escolher o que fazer a respeito”.

Ou seja, não podemos controlar a emoção gerada por um impulso, mas podemos recorrer ao autocontrole para dar uma resposta adequada a essa situação.

Nesse sentido, a autodisciplina funciona como um tipo de filtro que nos permite escolher o que e de que maneira dizer ou fazer alguma coisa.

Significa que, para exercer o autocontrole, é preciso diminuir ou deixar a impulsividade de lado por um momento, dando espaço para uma análise racional de cada cenário.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> Qual A Importância Do Autocontrole? </Text>

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
            Desenvolver o autocontrole permite a adaptação profissional – e pessoal – a diferentes situações, levando a respostas adequadas e moderadas.

Graças ao autocontrole, é possível abrir mão de rápidos momentos de satisfação em prol de um bem maior, que inclua toda uma família, departamento ou comunidade.

É o caso de negociações policiais para salvar a vida de reféns ou mesmo negociações diplomáticas que envolvem perdas para um ou mais países.

Nesses cenários tensos, os negociadores tendem a estar com as emoções à flor da pele, o que pode reforçar comportamentos impulsivos.

No entanto, com autodisciplina, vão conseguir se comunicar de maneira moderada e tranquila, favorecendo respostas conciliadoras e desfechos pacíficos.

Conforme citamos acima, o autocontrole também é uma peça-chave para alcançar metas e realizar tarefas que exigem concentração e adiamento de um período de diversão ou descanso.

Usando essa ferramenta, nossa mente pondera os sacrifícios que valem a pena, identificando, por exemplo, que é mais vantajoso poupar dinheiro para uma viagem de férias do que gastar em roupas.

Outra função relevante do autocontrole é que ele faz do indivíduo protagonista no campo dos sentimentos, pois é um mecanismo de inteligência emocional.

Como componente dessa área, o autocontrole colabora para o autoconhecimento, pois só é possível gerenciar aquilo que conhecemos.

Assim, quem busca por essa ferramenta acaba descobrindo os gatilhos que desestabilizam suas emoções e produzem respostas negativas, o que dá a chance de manipular o cenário para mudar sua resposta de costume.
            </Text>

            </ScrollView>

        </Container>
    )
}