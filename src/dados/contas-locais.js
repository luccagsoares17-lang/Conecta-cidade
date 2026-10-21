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
