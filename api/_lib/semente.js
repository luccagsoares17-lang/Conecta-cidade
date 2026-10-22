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
    },
    {
      "codigo": "CKS-5959"
    },
    {
      "codigo": "CKS-9588"
    },
    {
      "codigo": "CKS-5695"
    },
    {
      "codigo": "CKS-8244"
    },
    {
      "codigo": "CKS-5962"
    },
    {
      "codigo": "CKS-2669"
    },
    {
      "codigo": "CKS-3733"
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
    },
    {
      "nome": "Lucca",
      "email": "lucca@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-5959",
      "senha_hash": "scrypt$16384$8$1$VVmuK2aUQ1eCPZlGLbpHKg==$EmkawHc8wfT8ZLRhza7ePFgHaSI1BfnjCtdbGOPWhEA="
    },
    {
      "nome": "Mariana",
      "email": "mariana@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-9588",
      "senha_hash": "scrypt$16384$8$1$YtjRY5pHMhkDr87j2SF8QA==$2INJ/HRNsXKW+1uIyOgW75/mjSQZEC342FC2w4Cpnik="
    },
    {
      "nome": "Maria Tereza",
      "email": "mariatereza@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-5695",
      "senha_hash": "scrypt$16384$8$1$KSIYyekFTv8WrsAhPse8dA==$VDG38F2NYrwLObSexBOvPgXJNJwAlmBKCmFngY7ZXF0=",
      "apelido": "Maria Tereza"
    },
    {
      "nome": "Vitor",
      "email": "vitor@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-8244",
      "senha_hash": "scrypt$16384$8$1$HSRaMASUMQyqtmvWKxts4g==$rxq8YNZj/72soWT6uvCCVKzP8DjBCxvA5JqCgakaTyc="
    },
    {
      "nome": "Letícia",
      "email": "leticia@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-5962",
      "senha_hash": "scrypt$16384$8$1$Mz6uLA60mcrGW+OL6NbQYA==$iwuGlef6JE5D+BPZz/jHPoV3KH4W1UyOn+qlI4/jv5U="
    },
    {
      "nome": "Jorge",
      "email": "jorge@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-2669",
      "senha_hash": "scrypt$16384$8$1$rJFbPeVoPSdZ+9XFk+53CA==$L5VVbWJrrgl+HV8tIGR/G8AunWCxEMkVzqCY7qolBqY="
    },
    {
      "nome": "Felipe",
      "email": "felipe@conectacidade.app",
      "perfil": "gestor",
      "casa": "CKS-3733",
      "senha_hash": "scrypt$16384$8$1$b/CWM+kCxAaVWYYR/P9ixA==$ibmW84tuuOxfEayllsgZ/lnXOLccAjlSw442JRk/x6I="
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
    },
    {
      "nome": "Ana Alice Gonçalves",
      "apelido": "Ana Alice",
      "email": "anaalice@conectacidade.app",
      "grupo": "Administração do Núcleo",
      "areas": [
        "Avisos",
        "Eventos",
        "Guia"
      ],
      "codigo_hash": "scrypt$16384$8$1$yI+/zfSBHyKKy9YC5leWBQ==$h316tSL1vUACzsUNU3vggBFAaModuOzP0iqQTMS75yU="
    }
  ]
};
