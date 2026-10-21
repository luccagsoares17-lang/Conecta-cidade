// Contas iniciais do piloto. Só os resumos (hash scrypt) das senhas e dos códigos de acesso
// ficam aqui; as senhas e os códigos foram entregues à equipe fora do repositório.
// A semente roda sempre que o servidor sobe e não sobrescreve nada que já exista.

export const semente = {
  "casas": [
    {
      "codigo": "CKS-2925"
    },
    {
      "codigo": "CKS-5420"
    }
  ],
  "pessoas": [
    {
      "nome": "Lucas",
      "email": "lucas@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-2925",
      "senha_hash": "scrypt$16384$8$1$XBvDeiSUnop8G6gKJjWSjA==$v9GaxUTxPnG/4mLBod7JgDGPvHdlg90ExyX+0ngKPpo="
    },
    {
      "nome": "Micheline",
      "email": "micheline@conectacidade.app",
      "perfil": "jovem",
      "casa": "CKS-2925",
      "senha_hash": "scrypt$16384$8$1$Z8j1Iws8qz+jXOsFukYsoQ==$Ykd+xpzVB3hwWPl/CUHnyYH/o40TxcRCuxP8ryUr4Qw="
    },
    {
      "nome": "Gustavo",
      "email": "gustavo@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-5420",
      "senha_hash": "scrypt$16384$8$1$53C+ebxS1DJ8h4Xt00Lh+g==$ybGWuNcKcpsRH4LeWuu8K9CjLlaQCHIU+GjaEX3v+aY="
    }
  ],
  "organizadores": [
    {
      "nome": "Mário",
      "email": "mario@conectacidade.app",
      "grupo": "Administração do Núcleo",
      "areas": [
        "Avisos",
        "Eventos",
        "Guia"
      ],
      "codigo_hash": "scrypt$16384$8$1$K1Qd/lcWzJXGeLSk1ZFgJA==$0Fpyv0M7Ik21ZTGXTtIUu/QyYVbAX7NNPT27QH79ReM="
    },
    {
      "nome": "Ivison",
      "email": "ivison@conectacidade.app",
      "grupo": "Administração do Núcleo",
      "areas": [
        "Avisos",
        "Eventos",
        "Guia"
      ],
      "codigo_hash": "scrypt$16384$8$1$8EScuFQsM9JPVwrkwpWuHw==$hhpEp6xV/JgzjQiut/pusENwqMlTJcVrhp5y0vC4nQ8="
    }
  ]
};
