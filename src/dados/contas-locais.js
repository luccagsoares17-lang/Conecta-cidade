// Contas do piloto para o modo sem banco (VITE_DADOS=local). Só o resumo PBKDF2 das senhas e dos
// códigos de acesso fica aqui; as senhas foram entregues à equipe fora do repositório.
// Mesmas pessoas, famílias e logins de api/_lib/semente.js e docs/acessos.md.

export const contasLocais = {
  "casas": [
    {
      "id": 1,
      "codigo": "CKS-2925"
    },
    {
      "id": 2,
      "codigo": "CKS-5420"
    },
    {
      "id": 3,
      "codigo": "CKS-5959"
    },
    {
      "id": 4,
      "codigo": "CKS-9588"
    },
    {
      "id": 5,
      "codigo": "CKS-5695"
    },
    {
      "id": 6,
      "codigo": "CKS-8244"
    }
  ],
  "pessoas": [
    {
      "id": 1,
      "casa": "CKS-2925",
      "nome": "Lucas",
      "email": "lucas@conectacidade.app",
      "perfil": "gestor",
      "senha": "pbkdf2-sha256$210000$IYP97XEPkKA1XkT9HhhCnA==$kbMNjpRKVxxwXdFhp8x0l2aXSfa7ZiRkFN5anm+dpys="
    },
    {
      "id": 2,
      "casa": "CKS-2925",
      "nome": "Micheline",
      "email": "micheline@conectacidade.app",
      "perfil": "jovem",
      "senha": "pbkdf2-sha256$210000$m7BDQuAP60IR9oeCK6pf9g==$odHtJhHkM5ETvLIWRg0Lnv6+O53tHr4RV1WHu5ROzcQ="
    },
    {
      "id": 3,
      "casa": "CKS-5420",
      "nome": "Gustavo",
      "email": "gustavo@conectacidade.app",
      "perfil": "gestor",
      "senha": "pbkdf2-sha256$210000$ni+RM+7yCH8Rh5esj+uhLQ==$6DMgLkXdj6LOFXtjiCYmGlm1V/ruCcA6EfVvGs0ewXc="
    },
    {
      "id": 4,
      "casa": "CKS-5959",
      "nome": "Lucca",
      "email": "lucca@conectacidade.app",
      "perfil": "gestor",
      "senha": "pbkdf2-sha256$210000$yfj1pZt6Wgnmnt7SdCmECw==$I5VaxiyA3nURxjqcjCDAcpfwwu/wqqrCvbNt8CjraSQ="
    },
    {
      "id": 5,
      "casa": "CKS-9588",
      "nome": "Mariana",
      "email": "mariana@conectacidade.app",
      "perfil": "gestor",
      "senha": "pbkdf2-sha256$210000$vG1gGGHcr6PmidA1d/zoCQ==$8T1vVpzxk2St49dQSvprerIrS3fEIVF54yljj8f8/lQ="
    },
    {
      "id": 6,
      "casa": "CKS-5695",
      "nome": "Maria Tereza",
      "email": "mariatereza@conectacidade.app",
      "perfil": "gestor",
      "senha": "pbkdf2-sha256$210000$SpcPMW0aaewD3FBXfwKkyA==$qyOZJZTq2rUZX9X8ZV6PP2Vcmoibi7u7x7XRz5hYVYQ=",
      "apelido": "Maria Tereza"
    },
    {
      "id": 7,
      "casa": "CKS-8244",
      "nome": "Vitor",
      "email": "vitor@conectacidade.app",
      "perfil": "gestor",
      "senha": "pbkdf2-sha256$210000$k6EQOlEJhCbmZSsBPDkb4g==$o3KJf1wwJYA5sw9eyCIdzIQJGDjDW3QpqlCUTXE78KA="
    }
  ],
  "organizadores": [
    {
      "id": 1,
      "nome": "Mário",
      "email": "mario@conectacidade.app",
      "grupo": "Administração do Núcleo",
      "areas": [
        "Avisos",
        "Eventos",
        "Guia"
      ],
      "codigo": "pbkdf2-sha256$210000$F6IPg8DUCS+a6kPGdRMxqg==$ADffz4Jx3A4bGEQd8+/xnaKhghUmL6ArvhqqOnCaguY="
    },
    {
      "id": 2,
      "nome": "Ivison",
      "email": "ivison@conectacidade.app",
      "grupo": "Administração do Núcleo",
      "areas": [
        "Avisos",
        "Eventos",
        "Guia"
      ],
      "codigo": "pbkdf2-sha256$210000$MuBI7Nh3+OSktUABcvRpng==$/4rs+VDdPQ2Kxts9v2acKOUs8J+CamA2TFpmjP5orjo="
    }
  ]
};
