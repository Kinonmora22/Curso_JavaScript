using System.Threading;

void LimparBuffer()
{
    while (Console.KeyAvailable)
    {
        Console.ReadKey(true);
    }
}

void EscreverLento(string texto)
{
    foreach (char letra in texto)
    {
        Console.Write(letra);
        Thread.Sleep(15);
    }

    Console.WriteLine();
}

int mortes = 0;

bool primeiraVez = true;

Personagem p1 = new Personagem();

while (true)
{
    Goblin g1 = new Goblin();

    Console.Clear();



    // INTRODUÇÃO
    if (primeiraVez)
    {
        EscreverLento($@"

                                                        Seu nome é {p1.nome}.

                    Você, uma vez já foi um ser humano normal, mas recluso. Até que em um dia fatídico, ao decidir sair
                            para comprar macarrão instantâneo e simples aperitivos, você fecha os olhos.

                                      Ao abrí-los novamente, você se vê encontra em uma floresta.

                                       Em sua frente se depara um {g1.nome} com uma espada na mão.

                                                        O que você decide fazer?


                                                Opções:

                                                                1. Fugir.
                                                                2. Atacar.
                                                                3. Itens.

");

        primeiraVez = false;
    }

    else
    {
        Console.WriteLine($@"

                                                        Seu nome é {p1.nome}.

                                                 Você desperta novamente na floresta.

                                       Em sua frente se depara um {g1.nome} com uma espada na mão.

                                                        O que você decide fazer?


                                                Opções:

                                                                1. Fugir.
                                                                2. Atacar.
                                                                3. Itens.

");
    }

    LimparBuffer();



    int opcoes;

    bool numeroValido = int.TryParse(Console.ReadLine(), out opcoes);



    // INPUT INVÁLIDO
    if (!numeroValido)
    {
        Console.WriteLine($@"

                    Você digitou algo inválido.

                    Tente novamente.

");

        Console.ReadKey();

        continue;
    }



    // FUGIR
    if (opcoes == 1)
    {
        Console.Clear();

        EscreverLento($@"

                    Você corre para longe daquele ser verde a toda sua velocidade.

                    Porém, em meio ao pânico, acaba tropeçando na beira de um penhasco.

                    Seu corpo despenca violentamente.

                                    Você morreu.

");

        mortes++;

        // RESETAR ITENS
        for (int i = 0; i < p1.itensConsumidos.Length; i++)
        {
            if (p1.itensConsumidos[i])
            {
                p1.lembrancaItens[i]++;
            }

            p1.itensConsumidos[i] = false;
        }

        p1.ataque += 2;
        p1.vidaMax += 5;

        EscreverLento($@"

                    Algo dentro de você mudou.

                    Mortes: {mortes}

                    Ataque atual: {p1.ataque}
                    Vida máxima atual: {p1.vidaMax}

");

        p1.vida = p1.vidaMax;

        Console.ReadKey();

        continue;
    }



    // ATACAR
    else if (opcoes == 2)
    {
        while (g1.vida > 0 && p1.vida > 0)
        {
            Console.Clear();

            Console.WriteLine($@"

                    ================= BATALHA =================

                    {p1.nome}
                    Vida: {p1.vida}

                    VS

                    {g1.nome}
                    Vida: {g1.vida}

                    ===========================================

");

            Console.WriteLine("Pressione ENTER para atacar.");
            Console.ReadLine();



            // PLAYER ATACA
            g1.vida -= p1.ataque;

            Console.WriteLine($@"

                    Você atacou o {g1.nome}!

                    Dano causado: {p1.ataque}

");



            // GOBLIN MORRE
            if (g1.vida <= 0)
            {
                EscreverLento($@"

                            O {g1.nome} morreu.

                            Vitória.

");

                p1.vida = p1.vidaMax;

                Console.ReadKey();

                break;
            }



            // GOBLIN ATACA
            p1.vida -= g1.ataque;

            Console.WriteLine($@"

                    O {g1.nome} atacou você!

                    Dano recebido: {g1.ataque}

");



            // PLAYER MORRE
            if (p1.vida <= 0)
            {
                mortes++;

                // RESETAR ITENS
                for (int i = 0; i < p1.itensConsumidos.Length; i++)
                {
                    if (p1.itensConsumidos[i])
                    {
                        p1.lembrancaItens[i]++;
                    }

                    p1.itensConsumidos[i] = false;
                }

                EscreverLento($@"

                                Você morreu.

");

                p1.ataque += 2;
                p1.vidaMax += 5;

                EscreverLento($@"

                        Algo dentro de você mudou.

                        Mortes: {mortes}

                        Novo ataque: {p1.ataque}
                        Nova vida máxima: {p1.vidaMax}

");

                p1.vida = p1.vidaMax;

                Console.ReadKey();

                break;
            }

            Console.ReadKey();
        }
    }



    // ITENS
    else if (opcoes == 3)
    {
        Console.Clear();



        // MOSTRAR ITENS DISPONÍVEIS
        for (int i = 0; i < p1.itens.Length; i++)
        {
            if (!p1.itensConsumidos[i])
            {
                Console.WriteLine($@"
                    {i + 1}. {p1.itens[i]} +{p1.statusitens[i]} HP
");
            }
        }



        int itemEscolhido;

        bool itemValido = int.TryParse(Console.ReadLine(), out itemEscolhido);



        if (!itemValido)
        {
            Console.WriteLine($@"

                    Você digitou algo inválido.

");

            Console.ReadKey();

            continue;
        }



        int indice = itemEscolhido - 1;



        if (indice >= 0 && indice < p1.itens.Length)
        {
            if (!p1.itensConsumidos[indice])
            {
                // RECUSA COMER
                if (p1.lembrancaItens[indice] >= 3)
                {
                    Console.WriteLine($@"

                    ""Eu não quero comer isso mais.""

");

                    Console.ReadKey();

                    continue;
                }



                p1.vida += p1.statusitens[indice];

                p1.itensConsumidos[indice] = true;

                Console.WriteLine($@"

                    Você comeu {p1.itens[indice]}.

                    Vida atual: {p1.vida}

");



                // MEMÓRIA TEMPORAL
                if (p1.lembrancaItens[indice] == 1)
                {
                    EscreverLento($@"

                    ""Eu já não comi isso antes?""

");
                }

                else if (p1.lembrancaItens[indice] == 2)
                {
                    EscreverLento($@"

                    ""O gosto tá começando a ficar repetitivo...""

");
                }
            }

            else
            {
                Console.WriteLine($@"

                    Você já consumiu esse item nesta tentativa.

");
            }
        }

        else
        {
            Console.WriteLine($@"

                    Esse item não existe.

");
        }

        Console.ReadKey();
    }
}







class Personagem
{
    public bool[] itensConsumidos =
    {
        false,
        false
    };

    public int[] lembrancaItens =
    {
        0,
        0
    };

    public string nome = "Natsuki Subaru";

    public string[] itens =
    {
        "Macarrão instantâneo",
        "Batata Chips"
    };

    public int[] statusitens =
    {
        10,
        5
    };

    public double vida = 50;

    public double vidaMax = 50;

    public double ataque = 0.5;
}







class Goblin
{
    public string nome = "Goblin";

    public double vida = 20;

    public double ataque = 20;
}