# Doces do Natinho 🧁

Loja feita com muito amor e carinho para o negócio da minha Esposa em homenagem ao meu filho.

## Preview

![Demo](assets/demo.gif)

## Como Rodar

```bash
# Instalar dependências
npm install

# Copiar e configurar variáveis de ambiente
cp .env.example .env

# Rodar em desenvolvimento
npm run dev
```

## Configuração

Edite o arquivo `.env` com os dados do negócio:

| Variável               | Descrição                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp (somente dígitos, com DDI). Ex: `5521999999999` |
| `VITE_ADDRESS`         | Endereço completo da loja                                          |
| `VITE_BASE_URL`        | URL base da aplicação para concatenar com a loja externa (`/loja`) |

## Adicionar um Card na Lista

Em `src/data.ts`, adicione um novo objeto no array `LINKS`:

```tsx
{
  id: 'meu-novo-link',
  label: 'Nome do Botão',
  icon: 'Instagram',
  type: 'url',
  url: 'https://...',
},
```

### Tipos de link

| `type`       | Funcionalidade                           |
| ------------ | ---------------------------------------- |
| `url`        | Abre o link em `url`                     |
| `whatsapp`   | Abre o WhatsApp com o número configurado |
| `encomendas` | Abre a loja externa (`BASE_URL/loja`)    |
| `location`   | Abre o painel de localização             |

### Adicionar um ícone novo

Em `src/App.tsx`, adicione um `case` no `renderIcon`:

```tsx
case 'MeuIcone':
  return <MeuIconeComponent size={size} color="#fff" />;
```

## Deploy

O deploy é automático via **GitHub Actions** para **Cloudflare Pages** ao fazer push na branch `main`.

1. Faça o fork/clone do repositório
2. Adicione os secrets no GitHub:
   - `CLOUDFLARE_API_TOKEN` — API token com permissão Cloudflare Pages (Edit)
   - `CLOUDFLARE_ACCOUNT_ID` — ID da sua conta Cloudflare
3. Faça push na `main`

O workflow executa `format:check`, `lint`, `build` e faz deploy.

## Stack

- [React 19](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev)
- [Cloudflare Pages](https://pages.cloudflare.com)
